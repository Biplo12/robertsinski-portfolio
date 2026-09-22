import type { Shot } from "@/components/shot-gallery";

import type { Note } from "./case-study";

export const veloriaShots: Shot[] = [
  {
    src: "/shots/veloria-home.jpg",
    alt: "The Veloria home page: a painted hill estate under the wordmark",
    caption: "The home page. One painting, the wordmark, nothing else.",
  },
  {
    src: "/shots/veloria-wines.jpg",
    alt: "The wines index, the bottles painted in a row",
    caption: "The wines. The bottles are painted, not photographed.",
  },
  {
    src: "/shots/veloria-wine.jpg",
    alt: "A page for one wine, with the bottle and its tasting notes",
    caption:
      "One wine. Vintage, grape, time in oak and in bottle, all read from the same file as the list.",
  },
  {
    src: "/shots/veloria-vineyards.jpg",
    alt: "The vineyards page with a painted map of the parcels",
    caption: "The vineyards. A painted map instead of a table of parcels.",
  },
];

export const veloriaNotes: Note[] = [
  {
    title: "Every fact sits in one file",
    body: "Prices, vintages, hectares, dates, names. They all live in src/data and nothing gets retyped into a component, so two pages cannot give different numbers for the same thing.",
  },
  {
    title: "The colours come out of the paintings",
    body: "They are all picked out of the artwork itself. There are no hex values in the components and no grey, black or white anywhere as a surface, so the interface and the pictures match by default.",
  },
  {
    title: "A script looks for seams",
    body: "One mistake kept coming back: a painting whose paper is close to the page cream but not the same, which leaves a faint edge around the image. Now a script checks every image the site renders and tells me.",
  },
];
