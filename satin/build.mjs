// Generates public/satin.png: the folded blue cloth behind the hero headline.
//
// SVG filters could not do this. feDisplacementMap on banded gradients marbles,
// and feDiffuseLighting quantises into contour lines because its height map is
// only 8 bits. So the cloth is shaded here instead, in floating point: fractal
// noise becomes a height field, the height field becomes surface normals, and
// the normals are lit with a diffuse term plus a tight specular highlight,
// which is what makes satin read as satin.

import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const WIDTH = 1440;
const HEIGHT = 880;
const SEED = 0x9e3779b1;

// --- value noise -----------------------------------------------------------

// Math.imul throughout: plain * overflows past 2^53 and JS silently drops
// precision, which showed up as horizontal banding in the cloth.
const hash = (x, y) => {
  let h = Math.imul(x | 0, 0x27d4eb2d) ^ Math.imul(y | 0, 0x165667b1) ^ SEED;
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};

// Quintic, not cubic: cubic smoothstep leaves the lattice axes faintly visible
// once the relief is cranked up, because its second derivative jumps at the
// cell edges.
const smooth = (t) => t * t * t * (t * (t * 6 - 15) + 10);

const noise = (x, y) => {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = smooth(x - xi);
  const yf = smooth(y - yi);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
};

// Anisotropic fbm: stretched along x, so folds run long instead of blobby.
const fbm = (x, y, octaves = 3) => {
  let sum = 0;
  let amp = 1;
  let norm = 0;
  let fx = x;
  let fy = y;
  for (let i = 0; i < octaves; i += 1) {
    sum += noise(fx, fy) * amp;
    norm += amp;
    amp *= 0.3;
    fx *= 2.11;
    fy *= 2.07;
  }
  return sum / norm;
};

// Cloth has a direction. The field is stretched hard along the fall of the
// drape and packed tight across it, so folds come out long and parallel
// instead of bubbling like water, and a warp term makes them meander the way
// real fabric does. Ridged noise sharpens the crest, which is what puts the
// thin dark crease beside each highlight.
const TILT = Math.PI / 5;
const TC = Math.cos(TILT);
const TS = Math.sin(TILT);

const height = (px, py) => {
  const u = px / WIDTH - 0.5;
  const v = py / HEIGHT - 0.5;
  const across = u * TC - v * TS;
  const along = u * TS + v * TC;

  const warp = fbm(along * 1.3 + 7.1, across * 0.7 + 2.4, 2) - 0.5;
  const a = across * 6.8 + warp * 1.9 + 5;
  const b = along * 1.4 + 5;

  // Folding the field at its midpoint sharpens the crest, and smoothing the
  // result flattens the derivative at both ends so the fold does not read as
  // a cut-out edge.
  const ridge = 1 - Math.abs(fbm(a, b, 2) * 2 - 1);
  const crest = smooth(ridge);
  const swell = fbm(a * 0.45 - 3.3, b * 0.8 + 6.2, 2);
  return crest * 0.5 + swell * 0.5;
};

// --- colour ramp: the reference gradient, 124deg ---------------------------

const STOPS = [
  { at: 0.0, rgb: [0x7a, 0xb6, 0xdd] },
  { at: 0.18, rgb: [0x2a, 0x6e, 0xa8] },
  { at: 0.36, rgb: [0x06, 0x28, 0x5f] },
  { at: 0.62, rgb: [0x0a, 0x43, 0x70] },
  { at: 0.85, rgb: [0x1b, 0x5b, 0x8a] },
  { at: 1.0, rgb: [0x10, 0x42, 0x6b] },
];

const ramp = (t) => {
  if (t <= STOPS[0].at) return STOPS[0].rgb;
  for (let i = 0; i < STOPS.length - 1; i += 1) {
    const a = STOPS[i];
    const b = STOPS[i + 1];
    if (t <= b.at) {
      const k = (t - a.at) / (b.at - a.at);
      return [0, 1, 2].map((c) => a.rgb[c] + (b.rgb[c] - a.rgb[c]) * k);
    }
  }
  return STOPS[STOPS.length - 1].rgb;
};

// 124deg in CSS runs top-left to bottom-right, clockwise from north.
const ANGLE = ((124 - 90) * Math.PI) / 180;
const DX = Math.cos(ANGLE);
const DY = Math.sin(ANGLE);
const SPAN = Math.abs(WIDTH * DX) + Math.abs(HEIGHT * DY);

// --- shading ---------------------------------------------------------------

const LIGHT = (() => {
  const v = [-0.46, -0.62, 0.64];
  const len = Math.hypot(...v);
  return v.map((c) => c / len);
})();

const HALF = (() => {
  const v = [LIGHT[0], LIGHT[1], LIGHT[2] + 1];
  const len = Math.hypot(...v);
  return v.map((c) => c / len);
})();

const RELIEF = 300;

// The sheen is the colour of the lamp bouncing off dyed cloth, not white
// paint: adding plain white washed the blue out of the lit side.
const SHEEN = [150, 196, 232];

// Composition, fixed rather than left to the noise: a lamp just off the
// top-left corner and shade falling in the top right, so the card reads the
// same way no matter where object-fit crops it.
const composition = (u, v) => {
  const lamp = Math.exp(-((u - 0.1) ** 2 / 0.11 + (v + 0.04) ** 2 / 0.15));
  const shade = Math.exp(-((u - 0.88) ** 2 / 0.14 + (v - 0.06) ** 2 / 0.18));
  return 1 + lamp * 0.45 - shade * 0.46;
};

const lit = new Float32Array(WIDTH * HEIGHT * 3);

for (let y = 0; y < HEIGHT; y += 1) {
  for (let x = 0; x < WIDTH; x += 1) {
    const hL = height(x - 1, y);
    const hR = height(x + 1, y);
    const hU = height(x, y - 1);
    const hD = height(x, y + 1);

    let nx = (hL - hR) * RELIEF;
    let ny = (hU - hD) * RELIEF;
    const nLen = Math.hypot(nx, ny, 1);
    nx /= nLen;
    ny /= nLen;
    const nz = 1 / nLen;

    const diffuse = Math.max(nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2], 0);
    const specular =
      Math.pow(Math.max(nx * HALF[0] + ny * HALF[1] + nz * HALF[2], 0), 24) *
      0.34;

    // Position along the gradient axis, plus a nudge from the fold itself so
    // raised cloth catches the lighter dye.
    const t = Math.min(
      Math.max(
        (x * DX + y * DY) / SPAN + 0.34 + (height(x, y) - 0.5) * 0.22,
        0,
      ),
      1,
    );
    const base = ramp(t);

    const shade =
      (0.78 + diffuse * 0.55) * composition(x / WIDTH, y / HEIGHT);
    const i = (y * WIDTH + x) * 3;
    for (let c = 0; c < 3; c += 1) {
      lit[i + c] = base[c] * shade + specular * SHEEN[c];
    }
  }
}

// --- god rays --------------------------------------------------------------
//
// Volumetric light scattering: every pixel marches toward the centre of the
// card, accumulating the cloth it passes with a decay, so bright folds smear
// into soft radial shafts. This is the effect the reference runs as a WebGL
// pass over the card; it never moves there (its shader multiplies the mouse
// position by zero and its clock stays at zero), so it is baked in here
// instead of costing a shader at runtime.
//
// Marched on a third-resolution grid and interpolated back, because the
// result is smooth and sampling every full-resolution pixel is a hundred
// million lookups for no visible gain.

const RAY_STEPS = 64;
const DECAY = 0.972;
const RAY_GAIN = 0.4;
// Only the lit crests throw rays. Marching the whole cloth just lifts every
// pixel and washes the card out; thresholding is what turns the smear into
// distinct shafts.
const RAY_THRESHOLD = 0.42;
const RAY_SOFTNESS = 0.16;

const emitters = new Float32Array(WIDTH * HEIGHT * 3);

for (let i = 0; i < WIDTH * HEIGHT; i += 1) {
  const r = lit[i * 3];
  const g = lit[i * 3 + 1];
  const b = lit[i * 3 + 2];
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const t = Math.min(
    Math.max((luminance - RAY_THRESHOLD) / RAY_SOFTNESS, 0),
    1,
  );
  const gate = t * t * (3 - 2 * t);
  emitters[i * 3] = r * gate;
  emitters[i * 3 + 1] = g * gate;
  emitters[i * 3 + 2] = b * gate;
}
const RW = Math.round(WIDTH / 3);
const RH = Math.round(HEIGHT / 3);
const rays = new Float32Array(RW * RH * 3);

const sampleLit = (u, v, out) => {
  const fx = Math.min(Math.max(u, 0), 1) * (WIDTH - 1);
  const fy = Math.min(Math.max(v, 0), 1) * (HEIGHT - 1);
  const x0 = Math.floor(fx);
  const y0 = Math.floor(fy);
  const x1 = Math.min(x0 + 1, WIDTH - 1);
  const y1 = Math.min(y0 + 1, HEIGHT - 1);
  const tx = fx - x0;
  const ty = fy - y0;
  for (let c = 0; c < 3; c += 1) {
    const a = emitters[(y0 * WIDTH + x0) * 3 + c];
    const b = emitters[(y0 * WIDTH + x1) * 3 + c];
    const d = emitters[(y1 * WIDTH + x0) * 3 + c];
    const e = emitters[(y1 * WIDTH + x1) * 3 + c];
    out[c] = (a + (b - a) * tx) * (1 - ty) + (d + (e - d) * tx) * ty;
  }
};

{
  const probe = [0, 0, 0];
  for (let ry = 0; ry < RH; ry += 1) {
    for (let rx = 0; rx < RW; rx += 1) {
      const u = rx / (RW - 1);
      const v = ry / (RH - 1);
      let weight = 1;
      let total = 0;
      const acc = [0, 0, 0];
      for (let i = 0; i < RAY_STEPS; i += 1) {
        const t = Math.min(0.999, (i / RAY_STEPS) * 0.86);
        sampleLit(u + (0.5 - u) * t, v + (0.5 - v) * t, probe);
        for (let c = 0; c < 3; c += 1) acc[c] += probe[c] * weight;
        total += weight;
        weight *= DECAY;
      }
      const o = (ry * RW + rx) * 3;
      for (let c = 0; c < 3; c += 1) rays[o + c] = acc[c] / total;
    }
  }
}

const sampleRays = (u, v, out) => {
  const fx = u * (RW - 1);
  const fy = v * (RH - 1);
  const x0 = Math.floor(fx);
  const y0 = Math.floor(fy);
  const x1 = Math.min(x0 + 1, RW - 1);
  const y1 = Math.min(y0 + 1, RH - 1);
  const tx = fx - x0;
  const ty = fy - y0;
  for (let c = 0; c < 3; c += 1) {
    const a = rays[(y0 * RW + x0) * 3 + c];
    const b = rays[(y0 * RW + x1) * 3 + c];
    const d = rays[(y1 * RW + x0) * 3 + c];
    const e = rays[(y1 * RW + x1) * 3 + c];
    out[c] = (a + (b - a) * tx) * (1 - ty) + (d + (e - d) * tx) * ty;
  }
};

// tanh keeps the shafts from blowing out where several of them overlap.
const tanh = (x) => {
  const e = Math.exp(2 * Math.min(x, 20));
  return (e - 1) / (e + 1);
};

const raw = Buffer.alloc(HEIGHT * (WIDTH * 3 + 1));

{
  const shaft = [0, 0, 0];
  for (let y = 0; y < HEIGHT; y += 1) {
    const rowStart = y * (WIDTH * 3 + 1);
    raw[rowStart] = 0; // no per-scanline filtering
    for (let x = 0; x < WIDTH; x += 1) {
      sampleRays(x / (WIDTH - 1), y / (HEIGHT - 1), shaft);
      const i = rowStart + 1 + x * 3;
      const src = (y * WIDTH + x) * 3;
      for (let c = 0; c < 3; c += 1) {
        const value = lit[src + c] + tanh(shaft[c] / 255) * 255 * RAY_GAIN;
        raw[i + c] = Math.min(Math.max(Math.round(value), 0), 255);
      }
    }
  }
}

// --- PNG container ---------------------------------------------------------

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(WIDTH, 0);
ihdr.writeUInt32BE(HEIGHT, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // truecolour

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

writeFileSync(new URL("../public/satin.png", import.meta.url), png);
console.log(`satin.png ${WIDTH}x${HEIGHT} ${(png.length / 1024).toFixed(0)}KB`);
