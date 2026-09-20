import type { Shot } from "@/components/shot-gallery";

import type { Fact, Note } from "./case-study";

export const fairwayFacts: Fact[] = [
  { value: "515", label: "products" },
  { value: "12", label: "makers" },
  { value: "6", label: "categories" },
  { value: "1299", label: "photographs" },
];

export const fairwayShots: Shot[] = [
  {
    src: "/shots/fairway-home.jpg",
    alt: "The FAIRWAY home page, a bento of full bleed photographs",
    caption:
      "The home page. Cards run to their own edges and the photographs do the work.",
  },
  {
    src: "/shots/fairway-shelf.jpg",
    alt: "The clubs shelf with its filters and result count",
    caption:
      "203 clubs behind one shelf. Every filter is a link, so this exact view has an address.",
  },
  {
    src: "/shots/fairway-product.jpg",
    alt: "A product page with shaft, flex and hand options",
    caption:
      "Shaft, flex and hand come out of the product spec, not from a list written per page.",
  },
  {
    src: "/shots/fairway-brands.jpg",
    alt: "The brand index, eight makers with stock and four to order",
    caption: "Eight makers on the rack, four more to order.",
  },
];

export const fairwayNotes: Note[] = [
  {
    title: "The shop picked the clubs, it did not build them",
    body: "A maker writes that it spent two years on the sole geometry. A fitter writes that three shafts in the same head land eleven yards apart. Everything on this site is written the second way.",
  },
  {
    title: "Filters are links",
    body: "Every shelf, club type and price band has its own address. None of it is kept in component state, so you can send someone a link and they open the same view you were looking at.",
  },
  {
    title: "The bag counts options, not items",
    body: "A line is keyed by the product plus the options picked with it. Order the same head in two shafts and you get two lines, not a quantity of two.",
  },
];

export const fairwayDisclaimer =
  "FAIRWAY is not a real shop. Nothing typed into it is sent anywhere and no payment is taken. Product names and photographs belong to their makers and appear the way they would in a retailer catalogue, with no partnership implied.";
