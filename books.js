/*
  LUMELO book catalogue.
  To add a book: copy one block below, change the words, and save.
  status: "available" (has buy links), "coming-soon" (being prepared), or "planned" (idea only)
  links:  add buy links only when the book is really on sale, for example
          { label: "Buy on Amazon", url: "https://www.amazon.com/dp/XXXXXXXXXX" }
  cover:  path to a cover image in the images folder, or null to show a colour tile
  color:  sky, sun, coral, mint or lav (used for the colour tile)
*/
window.LUMELO_BOOKS = [
  {
    id: "pencil-control-1",
    title: "Pencil Control Workbook",
    subtitle: "Lines, curves, shapes, patterns and dot-to-dot to build fine motor skills",
    series: "LUMELO First Skills",
    volume: 1,
    category: "Tracing",
    ages: "3 to 6",
    pages: "About 100 activity pages (in production)",
    format: "Paperback, 8.5 x 11 in, black and white",
    status: "coming-soon",
    featured: true,
    cover: "cover.jpg",
    color: "sky",
    summary: "Standing lines, waves, loops, spirals, shapes and dot-to-dot, with animal friends on every page.",
    description: [
      "A tracing workbook that builds pencil control before children start writing letters. Pages begin with easy standing and sleeping lines and grow to waves, loops, spirals, shapes and patterns.",
      "Every trace has a clear start and stop dot, so children always know where to begin and where to finish. Short pages help children finish and feel proud."
    ],
    inside: [
      "Straight lines: standing, sleeping and slanting",
      "Curves and waves: rainbows, smiles and bumps",
      "Loops, circles, ovals, spirals and figure eights",
      "Shapes and patterns to finish",
      "Dot-to-dot pictures and follow-the-path pages",
      "Get Ready page, star chart and Super Star certificate"
    ],
    samples: [
      { src: "page-waves.jpg", caption: "Waves" },
      { src: "page-spirals.jpg", caption: "Spirals" },
      { src: "page-dots.jpg", caption: "Dot-to-dot" },
      { src: "page-path.jpg", caption: "Follow the path" }
    ],
    links: []
  },
  {
    id: "abc-tracing-2",
    title: "ABC Tracing",
    subtitle: "Big and small letters with friendly start and stop dots",
    series: "LUMELO First Skills",
    volume: 2,
    category: "Alphabet",
    ages: "3 to 6",
    pages: "To be decided",
    format: "Paperback",
    status: "planned",
    cover: null,
    color: "coral",
    summary: "Uppercase and lowercase letters to trace, with the same LUMELO animal friends.",
    description: ["An idea for the next book in the series. Details may change."],
    inside: [], samples: [], links: []
  },
  {
    id: "numbers-1-20-3",
    title: "Numbers 1 to 20",
    subtitle: "Trace, count and match numbers",
    series: "LUMELO First Skills",
    volume: 3,
    category: "Numbers",
    ages: "3 to 6",
    pages: "To be decided",
    format: "Paperback",
    status: "planned",
    cover: null,
    color: "mint",
    summary: "Trace numbers, count objects and match them with the LUMELO animals.",
    description: ["An idea for a book in the series. Details may change."],
    inside: [], samples: [], links: []
  },
  {
    id: "shapes-and-colours",
    title: "Shapes and Colours",
    subtitle: "Spot, trace and colour",
    series: "LUMELO First Skills",
    volume: 4,
    category: "Early learning",
    ages: "2 to 5",
    pages: "To be decided",
    format: "Paperback",
    status: "planned",
    cover: null,
    color: "sun",
    summary: "Simple shapes and colours to find, trace and colour in.",
    description: ["An idea for a book in the series. Details may change."],
    inside: [], samples: [], links: []
  },
  {
    id: "mazes-and-puzzles",
    title: "Mazes and Puzzles",
    subtitle: "Easy first mazes, matching and spot the difference",
    series: "LUMELO Activity Fun",
    volume: 1,
    category: "Activity",
    ages: "4 to 7",
    pages: "To be decided",
    format: "Paperback",
    status: "planned",
    cover: null,
    color: "lav",
    summary: "First mazes, matching games and simple puzzles for growing minds.",
    description: ["An idea for a book in a second series. Details may change."],
    inside: [], samples: [], links: []
  }
];
