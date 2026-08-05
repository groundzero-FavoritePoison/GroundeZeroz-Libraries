/* =========================================================
   books-data.js
   Add a new book by adding one object to this array.
   Both books.html (the grid) and book.html (the detail
   template, read via ?slug=) pull from this file — nothing
   else needs to change when you add a title.
   ========================================================= */

const booksData = [
  {
    slug: "seven-guilty-pleasures",
    title: "Seven Guilty Pleasures",
    genre: "Dark Romance Anthology",
    tagline: "Four novellas. One rule broken in every room.",
    coverLabel: "Seven Guilty\nPleasures",
    synopsis: [
      "Four interconnected dark romance novellas — Stuck, After Hours, Open Window, and Assigned — about the moments people cross lines they swore they'd hold.",
      "An elevator that won't move. An office that empties out at midnight. A window left open on purpose. An assignment nobody asked for. Each story stands alone; together, they trace the same question — what happens the moment 'no' stops being the whole truth.",
      "Written for readers who want their romance a little dangerous and their heroes a little unforgivable."
    ],
    buyLink: "#",
    sampleLink: "#",
    reviews: [
      { quote: "Read it in one sitting and immediately started it over. Assigned wrecked me.", author: "@velvet.reads" },
      { quote: "Four stories, four different kinds of dangerous. Open Window is the standout.", author: "@duskbound" },
      { quote: "Exactly the kind of morally grey I keep coming back for.", author: "K. Osei, Reader" }
    ]
  }
];
