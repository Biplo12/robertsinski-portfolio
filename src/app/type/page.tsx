import type { CSSProperties } from "react";
import Link from "next/link";
import {
  Figtree,
  Geist,
  Hanken_Grotesk,
  IBM_Plex_Sans,
  Instrument_Sans,
  Manrope,
  Outfit,
  Public_Sans,
} from "next/font/google";

/* Heading is settled: Outfit. These variants only change the body face. */
const outfit = Outfit({
  variable: "--t-outfit",
  subsets: ["latin", "latin-ext"],
});
const geist = Geist({ variable: "--t-geist", subsets: ["latin", "latin-ext"] });
const instrument = Instrument_Sans({
  variable: "--t-instrument",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});
const publicSans = Public_Sans({
  variable: "--t-public",
  subsets: ["latin", "latin-ext"],
});
const manrope = Manrope({
  variable: "--t-manrope",
  subsets: ["latin", "latin-ext"],
});
const hanken = Hanken_Grotesk({
  variable: "--t-hanken",
  subsets: ["latin", "latin-ext"],
});
const plex = IBM_Plex_Sans({
  variable: "--t-plex",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});
const figtree = Figtree({
  variable: "--t-figtree",
  subsets: ["latin", "latin-ext"],
});

type Variant = {
  id: string;
  body: string;
  note: string;
  bodyStyle: CSSProperties;
};

const variants: Variant[] = [
  {
    id: "A",
    body: "Outfit",
    note: "Jeden krój na wszystko. Najspójniejsze, ale Outfit w małych rozmiarach ma ciasne prześwity, więc dłuższe akapity męczą.",
    bodyStyle: { fontFamily: "var(--t-outfit)" },
  },
  {
    id: "B",
    body: "Geist",
    note: "Neutralny grotesk Vercela. Nie wchodzi w drogę nagłówkowi, dobrze trzyma małe rozmiary.",
    bodyStyle: { fontFamily: "var(--t-geist)" },
  },
  {
    id: "C",
    body: "Instrument Sans",
    note: "Nieco węższy i bardziej sprężysty od Geista. Ma prawdziwą kursywę, przydaje się w cytatach.",
    bodyStyle: { fontFamily: "var(--t-instrument)" },
  },
  {
    id: "D",
    body: "Hanken Grotesk",
    note: "Humanistyczny, o otwartych literach. Najprzyjaźniejszy do czytania długich bloków tekstu.",
    bodyStyle: { fontFamily: "var(--t-hanken)" },
  },
  {
    id: "E",
    body: "Manrope",
    note: "Półgeometryczny, spokrewniony z Outfitem w rysunku, ale wyraźnie spokojniejszy w tekście.",
    bodyStyle: { fontFamily: "var(--t-manrope)" },
  },
  {
    id: "F",
    body: "IBM Plex Sans",
    note: "Inżynierski, lekko techniczny rytm. Wnosi powagę, którą okrągły Outfit sam z siebie nie ma.",
    bodyStyle: { fontFamily: "var(--t-plex)" },
  },
  {
    id: "G",
    body: "Public Sans",
    note: "Krój administracji USA, rzeczowy i bezosobowy. Zero ozdób, maksymalna czytelność.",
    bodyStyle: { fontFamily: "var(--t-public)" },
  },
  {
    id: "H",
    body: "Figtree",
    note: "Ciepły, lekko zaokrąglony. Blisko Outfita nastrojem, więc całość brzmi bardziej „startupowo”.",
    bodyStyle: { fontFamily: "var(--t-figtree)" },
  },
];

const PolishFlag = () => {
  return (
    <span
      role="img"
      aria-label="Poland"
      className="inline-flex h-3 w-[1.2rem] shrink-0 flex-col overflow-hidden rounded-[1px] ring-1 ring-border"
    >
      <span className="h-1/2 bg-[#efe9dd]" />
      <span className="h-1/2 bg-[#c33b45]" />
    </span>
  );
};

const headingStyle: CSSProperties = { fontFamily: "var(--t-outfit)" };

const TypeVariants = () => {
  const fontVars = [
    outfit,
    geist,
    instrument,
    publicSans,
    manrope,
    hanken,
    plex,
    figtree,
  ]
    .map((f) => f.variable)
    .join(" ");

  return (
    <div className={`${fontVars} flex flex-1 justify-center px-6 py-12`}>
      <div className="w-full max-w-xl">
        <header className="border-b pb-6">
          <p className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
            Krój do treści · nagłówek: Outfit
          </p>
          <h1
            className="mt-4 text-2xl font-semibold tracking-tight"
            style={headingStyle}
          >
            Osiem krojów pod nagłówek
          </h1>
          <p className="mt-3 max-w-[52ch] leading-relaxed text-muted-foreground">
            Nagłówek zostaje w Outficie w każdym wariancie. Zmienia się tylko to, czym napisana jest linia z lokalizacją, akapit i drobny tekst.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            ← wróć na stronę
          </Link>
        </header>

        <div className="divide-y">
          {variants.map((v) => (
            <section key={v.id} className="py-8">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                {v.id} · Outfit + {v.body}
              </p>

              <div className="mt-4 rounded-md border bg-card px-6 py-7">
                <p
                  className="text-[2.1rem] leading-[1.08] tracking-tight"
                  style={headingStyle}
                >
                  <span className="font-light">hey, </span>
                  <span className="font-bold">Robert here.</span>
                </p>

                <div style={v.bodyStyle}>
                  <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    Fullstack developer from Katowice
                    <PolishFlag />
                  </p>

                  <p className="mt-5 leading-relaxed">
                    I build web apps. Backend and frontend, four years so far.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    If you need something built,{" "}
                    <span className="underline decoration-signal underline-offset-4">
                      write to me
                    </span>
                    . I answer within a day.
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
                {v.note}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeVariants;
