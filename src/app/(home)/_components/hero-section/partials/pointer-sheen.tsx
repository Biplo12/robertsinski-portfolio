'use client';

import React from 'react';

/**
 * A highlight that travels over the cloth with the pointer.
 *
 * Rather than painting a shape on top, this reads the cloth itself: the
 * brightest crests are raised to a power so only the glossy ridges survive,
 * smeared a little along the fall of the folds the way a specular highlight
 * runs on satin, then gated by distance to the pointer. Moving the cursor
 * therefore lights up the folds that are already there instead of dropping a
 * spotlight over them.
 *
 * The canvas holds only the highlight and is screened over the card, so black
 * costs nothing and the cloth underneath is untouched. Without WebGL, without
 * JavaScript, or under prefers-reduced-motion the card simply stays as lit as
 * the texture already is.
 */

const VERTEX = `#version 300 es
in vec2 aPosition;
out vec2 vUv;

void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision mediump float;

in vec2 vUv;
uniform sampler2D uCloth;
uniform vec2 uPointer;
uniform float uStrength;
uniform float uAspect;
out vec4 fragColor;

// Matches the tilt the folds are generated at, so the highlight elongates
// along the weave instead of across it.
const vec2 ALONG = vec2(0.809, -0.588);
const vec3 TINT = vec3(0.76, 0.87, 1.0);

void main() {
  vec2 tex = vec2(vUv.x, 1.0 - vUv.y);

  float gloss = 0.0;
  for (int i = -3; i <= 3; i++) {
    vec3 cloth = texture(uCloth, tex + ALONG * float(i) * 0.007).rgb;
    float luminance = dot(cloth, vec3(0.299, 0.587, 0.114));
    gloss += luminance * luminance * luminance;
  }
  gloss /= 7.0;

  vec2 offset = (vUv - uPointer) * vec2(uAspect, 1.0);
  float near = 1.0 - smoothstep(0.0, 0.34, length(offset));

  fragColor = vec4(TINT * gloss * near * near * uStrength * 5.5, 1.0);
}`;

const compile = (
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader | null => {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
};

const PointerSheen: React.FC = (): React.JSX.Element => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const node = canvas.current;
    if (!node) return;

    const card = node.closest('article');
    if (!card) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const gl = node.getContext('webgl2', { alpha: true, antialias: false });
    if (!gl) return;

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const pointerSlot = gl.getUniformLocation(program, 'uPointer');
    const strengthSlot = gl.getUniformLocation(program, 'uStrength');
    const aspectSlot = gl.getUniformLocation(program, 'uAspect');

    const target = { x: 0.5, y: 0.5, strength: 0 };
    const eased = { x: 0.5, y: 0.5, strength: 0 };
    let ready = false;
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = (): void => {
      const box = card.getBoundingClientRect();
      // Half resolution: the highlight is broad and soft, so the extra pixels
      // would only cost fill rate.
      const nextWidth = Math.max(1, Math.round(box.width * 0.5));
      const nextHeight = Math.max(1, Math.round(box.height * 0.5));
      if (nextWidth === width && nextHeight === height) return;

      width = nextWidth;
      height = nextHeight;
      node.width = width;
      node.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform1f(aspectSlot, width / height);
    };

    const draw = (): void => {
      frame = requestAnimationFrame(draw);
      if (!ready) return;

      eased.x += (target.x - eased.x) * 0.14;
      eased.y += (target.y - eased.y) * 0.14;
      eased.strength += (target.strength - eased.strength) * 0.1;

      // Flip Y: the pointer is measured from the top of the card, gl_Position
      // space runs from the bottom. Without this the highlight mirrors.
      gl.uniform2f(pointerSlot, eased.x, 1 - eased.y);
      gl.uniform1f(strengthSlot, eased.strength);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const move = (event: PointerEvent): void => {
      const box = card.getBoundingClientRect();
      target.x = (event.clientX - box.left) / box.width;
      target.y = (event.clientY - box.top) / box.height;
      target.strength = 1;
    };

    const leave = (): void => {
      target.strength = 0;
    };

    const cloth = new Image();
    cloth.decoding = 'async';
    cloth.onload = (): void => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, cloth);
      ready = true;
    };
    cloth.src = '/satin.png';

    const observer = new ResizeObserver(resize);
    observer.observe(card);
    resize();

    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', leave);
    frame = requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      card.removeEventListener('pointermove', move);
      card.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden className='pointer-sheen' />;
};

export default PointerSheen;
