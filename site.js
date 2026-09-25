(function () {
  var BOOKS = window.LUMELO_BOOKS || [];
  var IG = "https://www.instagram.com/lumelo4kidz/";
  var LABEL = { "available": "Available", "coming-soon": "Coming soon", "planned": "Planned" };

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function byId(id) { return document.getElementById(id); }
  function bookUrl(b) { return "book.html?id=" + encodeURIComponent(b.id); }

  /* header and footer */
  var page = document.body.getAttribute("data-page");
  var nav = [["index.html", "Home", "home"], ["books.html", "Books", "books"], ["printables.html", "Free printables", "printables"], ["parents.html", "For parents", "parents"], ["about.html", "About", "about"]];
  var hdr = byId("site-header");
  if (hdr) {
    var links = nav.map(function (n) {
      var a = el("a", { href: n[0], text: n[1] });
      if (n[2] === page || (page === "book" && n[2] === "books")) a.setAttribute("aria-current", "page");
      return a;
    });
    hdr.className = "top";
    hdr.appendChild(el("div", { "class": "wrap bar" }, [
      el("a", { "class": "brand", href: "index.html" }, [el("img", { src: "lion-badge.png", alt: "" }), document.createTextNode("LUMELO")]),
      el("nav", { "aria-label": "Main" }, links)
    ]));
  }
  var ftr = byId("site-footer");
  if (ftr) {
    var col = function (title, items) {
      return el("div", {}, [el("h4", { text: title })].concat(items.map(function (i) {
        var a = el("a", { href: i[1], text: i[0] });
        if (i[1].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
        return a;
      })));
    };
    ftr.appendChild(el("div", { "class": "wrap" }, [
      el("div", {}, [
        el("strong", { text: "LUMELO", style: "font-family:Fredoka;font-size:22px;color:#243B53" }),
        el("small", { text: "Learn. Play. Grow." }),
        el("small", { text: "Copyright 2026 LUMELO. All rights reserved." }),
        el("small", { text: "Artwork and text in LUMELO books are created with the help of AI tools and checked by the LUMELO team." })
      ]),
      col("Explore", [["Books", "books.html"], ["Free printables", "printables.html"], ["For parents", "parents.html"], ["About LUMELO", "about.html"]]),
      col("Connect", [["Instagram @lumelo4kidz", IG], ["Privacy, terms and AI notice", "legal.html"]])
    ]));
  }

  /* book cover or colour tile */
  function cover(b) {
    var c = el("div", { "class": "cov c-" + (b.color || "sky") + (b.cover ? "" : " tile") });
    if (b.cover) c.appendChild(el("img", { src: b.cover, alt: "Cover of " + b.title }));
    else {
      c.appendChild(el("img", { src: "lion-badge.png", alt: "" }));
      c.appendChild(el("b", { text: b.title }));
      c.appendChild(el("small", { text: b.series }));
    }
    return c;
  }
  function card(b) {
    return el("a", { "class": "card", href: bookUrl(b) }, [
      cover(b),
      el("div", { "class": "body" }, [
        el("span", { "class": "state " + b.status, text: LABEL[b.status] || b.status }),
        el("h3", { text: b.title }),
        el("p", { text: b.summary }),
        el("span", { "class": "meta", text: b.category + " | Ages " + b.ages })
      ])
    ]);
  }

  /* home */
  var feat = byId("featured");
  if (feat) {
    var f = BOOKS.filter(function (b) { return b.featured; })[0] || BOOKS[0];
    if (f) {
      feat.appendChild(cover(f));
      feat.appendChild(el("div", {}, [
        el("span", { "class": "state " + f.status, text: LABEL[f.status] }),
        el("h3", { text: f.title, style: "font-size:32px;margin-top:10px" }),
        el("p", { text: f.subtitle + ". Ages " + f.ages + ".", style: "margin-top:10px;font-size:18px" }),
        el("div", { "class": "cta" }, [el("a", { "class": "btn", href: bookUrl(f), text: "See the book" })])
      ]));
      var hero = byId("hero-cover");
      if (hero && f.cover) hero.src = f.cover;
    }
  }
  var latest = byId("latest");
  if (latest) BOOKS.slice(0, 4).forEach(function (b) { latest.appendChild(card(b)); });
  var cats = byId("categories");
  if (cats) {
    var seen = {};
    BOOKS.forEach(function (b) { seen[b.category] = (seen[b.category] || 0) + 1; });
    Object.keys(seen).forEach(function (k) {
      cats.appendChild(el("a", { "class": "chip", href: "books.html?cat=" + encodeURIComponent(k), style: "text-decoration:none", text: k + " (" + seen[k] + ")" }));
    });
  }

  /* catalogue */
  var grid = byId("catalogue");
  if (grid) {
    var params = new URLSearchParams(location.search);
    var cat = params.get("cat") || "All";
    var names = ["All"];
    BOOKS.forEach(function (b) { if (names.indexOf(b.category) < 0) names.push(b.category); });
    var chips = byId("filters");
    function draw() {
      grid.textContent = "";
      var shown = BOOKS.filter(function (b) { return cat === "All" || b.category === cat; });
      shown.forEach(function (b) { grid.appendChild(card(b)); });
      if (!shown.length) grid.appendChild(el("p", { "class": "empty", text: "No books here yet." }));
      Array.prototype.forEach.call(chips.children, function (c) { c.setAttribute("aria-pressed", c.textContent === cat ? "true" : "false"); });
    }
    names.forEach(function (n) {
      var c = el("button", { "class": "chip", type: "button", text: n });
      c.addEventListener("click", function () { cat = n; draw(); });
      chips.appendChild(c);
    });
    draw();
  }

  /* book detail */
  var det = byId("detail");
  if (det) {
    var id = new URLSearchParams(location.search).get("id");
    var b = BOOKS.filter(function (x) { return x.id === id; })[0] || BOOKS[0];
    document.title = b.title + " | LUMELO";
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", b.summary);
    var facts = el("dl", { "class": "facts" }, []);
    [["Series", b.series + ", book " + b.volume], ["Ages", b.ages], ["Category", b.category], ["Pages", b.pages], ["Format", b.format]].forEach(function (r) {
      facts.appendChild(el("dt", { text: r[0] })); facts.appendChild(el("dd", { text: r[1] }));
    });
    var buy = el("div", { "class": "cta" }, []);
    if (b.links && b.links.length) b.links.forEach(function (l) { buy.appendChild(el("a", { "class": "btn", href: l.url, target: "_blank", rel: "noopener", text: l.label })); });
    else buy.appendChild(el("a", { "class": "btn", href: IG, target: "_blank", rel: "noopener", text: "Follow for launch news" }));
    var right = el("div", {}, [
      el("span", { "class": "state " + b.status, text: LABEL[b.status] }),
      el("h1", { text: b.title, style: "font-size:clamp(34px,5vw,54px);margin-top:12px" }),
      el("p", { text: b.subtitle, style: "font-size:20px;margin-top:10px" }),
      facts
    ].concat((b.description || []).map(function (t) { return el("p", { text: t, style: "margin-top:12px" }); })));
    if (b.inside && b.inside.length) {
      right.appendChild(el("h2", { text: "Inside the book", style: "font-size:26px;margin-top:26px" }));
      right.appendChild(el("ul", { "class": "ticks" }, b.inside.map(function (t) { return el("li", { text: t }); })));
    }
    right.appendChild(buy);
    if (b.status !== "available") right.appendChild(el("p", { "class": "note", text: b.status === "planned" ? "This book is an idea and is not being sold yet." : "This book is not on sale yet." }));
    det.appendChild(cover(b)); det.appendChild(right);
    var sm = byId("samples");
    if (sm && b.samples && b.samples.length) {
      b.samples.forEach(function (s) {
        sm.appendChild(el("figure", { "class": "sheet" }, [el("img", { src: s.src, alt: s.caption + " sample page", loading: "lazy" }), el("figcaption", { text: s.caption })]));
      });
    } else if (sm) sm.closest("section").hidden = true;
    var more = byId("more");
    if (more) BOOKS.filter(function (x) { return x.id !== b.id; }).slice(0, 3).forEach(function (x) { more.appendChild(card(x)); });
  }
})();
