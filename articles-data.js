/* =========================================================
   articles-data.js
   Add a new article by adding one object here. articles.html
   (grid + filters) and article.html (detail, via ?slug=)
   both pull from this file.
   ========================================================= */

const articlesData = [
  {
    slug: "why-dark-romance-isnt-about-the-darkness",
    title: "Why Dark Romance Isn't About the Darkness",
    type: "Essay",
    readingTime: "7 min",
    publishDate: "2026-07-01",
    coverLabel: "Why Dark Romance\nIsn't About the\nDarkness",
    excerpt: "An essay on what the genre actually asks of its readers — control, safety, and the strange comfort of watching someone else lose both on the page.",
    body: [
      "Every defense of dark romance starts the same way: it's fiction, it's fantasy, nobody's condoning anything. All true, and all beside the point. The actual appeal of this genre has almost nothing to do with the darkness itself and everything to do with control.",
      "Readers of this genre are not looking for danger. They're looking for danger with an exit. A book has a cover you can close, a chapter you can stop at, a narrator whose perspective you can leave whenever you choose. That container is the entire mechanism — the reader gets to feel the loss of control that the story depicts, from a position of total control over their own experience of it.",
      "That's why pacing and consent-adjacent tension matter so much more in this genre than raw shock value. A scene that removes the reader's sense of agency over the *reading experience* — not the character's agency in the story — is the only thing that actually breaks the spell. Everything else is negotiable.",
      "So the genre isn't about the darkness. It's about the frame around it. Take the frame away and you don't have dark romance anymore — you just have darkness, and that's a different, much less interesting book."
    ],
    tags: ["genre theory", "dark romance", "reader psychology"]
  },
  {
    slug: "what-serialized-platforms-dont-tell-you-about-payment",
    title: "What Serialized Fiction Platforms Don't Tell You About Payment",
    type: "Research",
    readingTime: "8 min",
    publishDate: "2026-04-11",
    coverLabel: "What Platforms\nDon't Tell You\nAbout Payment",
    excerpt: "A breakdown of how payment structures actually work across GoodNovel, NovelSnack, Wattpad, and Fizzo — and what to check before you submit.",
    body: [
      "Most writers pick a serialized fiction platform based on audience size alone, and that's the wrong first filter. The bigger question is how payment actually converts from reader engagement into your bank account, and that varies more than most submission pages let on.",
      "Some platforms pay per-word on acceptance, some pay based on unlocked-chapter revenue split with the reader base, and some blend both with bonus thresholds you only unlock after hitting specific read-count milestones. None of this is usually front-loaded in the pitch — you find it in the contract, or you don't find it until your first payout looks smaller than expected.",
      "The other detail worth checking every time: exclusivity clauses. A platform asking for full exclusivity on a title changes the math completely compared to one that only asks for a distribution window. Signing away rights to a story you might want to publish elsewhere later is a much bigger cost than a lower per-word rate.",
      "My rule now: read the payment structure before the submission guidelines, not after. Guidelines tell you how to get accepted. Payment terms tell you whether it's worth it once you are."
    ],
    tags: ["platforms", "contracts", "business of writing"]
  },
  {
    slug: "the-case-for-writing-under-a-pen-name",
    title: "The Case for Writing Under a Pen Name",
    type: "Opinion",
    readingTime: "5 min",
    publishDate: "2026-02-09",
    coverLabel: "The Case for\nWriting Under\na Pen Name",
    excerpt: "A pen name isn't a mask. It's a boundary — and one of the most useful tools available to a working writer.",
    body: [
      "People tend to hear 'pen name' and assume it means hiding something. Usually it means the opposite — it means being able to write more honestly, not less, because the name on the cover isn't tangled up with every other part of your life.",
      "A pen name lets a genre stay a genre instead of becoming a referendum on your character at family dinners. It also lets you build a distinct readership around a specific voice and promise, rather than diluting one identity across every kind of writing you do.",
      "There's a practical business case too: separate brands can be run, marketed, and eventually sold or handed off independently of each other. That's harder to do cleanly when everything lives under one name that also shows up on a resume.",
      "None of this is about deception. It's about drawing a clean line between the writer and the writing, and giving each project the specific audience it was actually built for."
    ],
    tags: ["pen names", "author branding", "writing life"]
  }
];
