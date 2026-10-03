// ===== CONTENT: edit your text, links and images here =====
const DATA = {
 "layout": [
  "hero",
  "about",
  "work",
  "projects",
  "education",
  "recognition",
  "art",
  "contact"
 ],
 "artistLayout": [
  "hero",
  "art",
  "about",
  "contact"
 ],
 "site": {
  "name": "Arnavjot Kaur",
  "description": "Software engineer at Hindustan Times.",
  "shortName": "arnavjot",
  "greeting": "hi, arnavjot here.",
  "email": "arnavjotkaur.27@gmail.com",
  "photoUrl": "img/me.webp",
  "doodleUrl": "img/doodle2.webp",
  "resumeUrl": "https://drive.google.com/file/d/1CxUfzm2Mc4dkJRhIMlHdtRs-r5Xoc4zZ/view?usp=sharing",
  "links": [
   {
    "label": "LinkedIn",
    "url": "https://linkedin.com/in/arnavjotkaur"
   },
   {
    "label": "GitHub",
    "url": "https://github.com/arnavjot"
   },
   {
    "label": "LeetCode",
    "url": "https://leetcode.com/arnavjot"
   },
   {
    "label": "Instagram",
    "url": "https://instagram.com/arnavjotkaur"
   }
  ]
 },
 "hero": {
  "engineer": "Software engineer at [Hindustan Times](https://www.hindustantimes.com/). I build the Live Hindustan app, read by 200K+ people a day, and I like making apps feel fast.",
  "artist": "Artist and software engineer. I draw sketches and doodles, mostly digital and sometimes charcoal. I also build apps at [Hindustan Times](https://www.hindustantimes.com/)."
 },
 "about": {
  "paragraphs": [
   "I am currently a Software Development Engineer at [Hindustan Times](https://www.hindustantimes.com/). I work on the Live Hindustan app for Android and iOS, which 200K+ people use every day. My work is mostly API integration, app architecture, performance, and the screens people actually tap on.",
   "Before this, I studied Computer Science and Engineering at Thapar Institute of Engineering and Technology."
  ],
  "techIntro": "Here are some technologies I have been working with:",
  "tech": [
   "Java",
   "Kotlin",
   "C++",
   "SQL",
   "Android SDK",
   "MVVM",
   "Retrofit",
   "Dagger 2",
   "ExoPlayer",
   "WorkManager",
   "Firebase",
   "REST APIs",
   "Git",
   "MySQL",
   "MongoDB"
  ],
  "outro": "Outside work I draw sketches and doodles.",
  "artist": {
   "paragraphs": [
    "Drawing is my other thing: sketches and doodles. I am currently a Software Development Engineer at [Hindustan Times](https://www.hindustantimes.com/)."
   ],
   "toolsIntro": "Here is what I sketch with:",
   "tools": [
    "Freeform",
    "Tayasui Sketches",
    "Charcoal"
   ]
  }
 },
 "work": {
  "role": "Software Development Engineer I",
  "company": "Hindustan Times",
  "period": "June 2025 to present",
  "highlights": [
   {
    "label": "Faster launch",
    "headline": "Cut splash-to-home from 6s to 2s, 66% faster",
    "points": [
     "Served cached device config instantly and refreshed it in the background.",
     "Moved authentication checks to WorkManager so they no longer block launch.",
     "Removed startup work the app did not need."
    ]
   },
   {
    "label": "Video player",
    "headline": "One shared video player for the whole app",
    "points": [
     "Designed a shared ExoPlayer setup for inline and fullscreen video across Home, listings and stories.",
     "Coordinated playback state and lifecycle so two videos never play at once.",
     "Less decoder and memory pressure, so scrolling stays smooth."
    ]
   },
   {
    "label": "Voice of UP",
    "headline": "Shipped Voice of UP from idea to production",
    "points": [
     "Owned it end to end on a tight timeline.",
     "Built the subscription and payment flows."
    ]
   },
   {
    "label": "Revenue",
    "headline": "Built a credit-score flow inside a news app",
    "points": [
     "OTP-verified flow with credit-score APIs, a score visualization and personal-loan redirection.",
     "Integrated ads and related-content experiences, tracked with analytics."
    ]
   },
   {
    "label": "Navigation",
    "headline": "Configurable navigation and core redesigns",
    "points": [
     "Built configurable L1 navigation with deep links, scrolling and experiments.",
     "Redesigned home, story pages and navigation for dynamic templates and personalized content, on Android and iOS."
    ]
   },
   {
    "label": "Aapka Vidhayak",
    "headline": "Built Aapka Vidhayak: rate your MLA",
    "points": [
     "State and constituency drill-down, search and ratings, backed by a shared web API.",
     "Added authentication, session-aware notifications and onboarding.",
     "Personalized content entry points across the app."
    ]
   },
   {
    "label": "Festival of Gifts",
    "headline": "Built a festive contest inside the app",
    "points": [
     "Built the Festival of Gifts contest with a leaderboard.",
     "Wired in deep links and analytics around it."
    ]
   },
   {
    "label": "More",
    "headline": "The everyday work behind a 200K+ DAU app",
    "points": [
     "Ship production features across API integration, app architecture, performance and UI, mostly in Java.",
     "Native polls and quizzes, deep linking and analytics across the app.",
     "Contribute to cross-platform features on iOS."
    ]
   }
  ]
 },
 "projects": [
  {
   "label": "Chrome extension, 2026",
   "title": "LeetLog",
   "description": "A Chrome extension that lets you write notes on any LeetCode problem and commit them to your own GitHub repo. Sign-in uses the GitHub OAuth device flow, with no server in between.",
   "tags": [
    "JavaScript",
    "Chrome Extension (MV3)",
    "GitHub API",
    "OAuth"
   ],
   "url": "https://github.com/arnavjot/leetlog"
  },
  {
   "label": "Capstone, 2023 to 2024",
   "title": "Deepfake detection with Xception and BiLSTM",
   "description": "A deep learning model that classifies manipulated videos, using Xception for each frame and a BiLSTM for how frames change over time.",
   "tags": [
    "Deep learning",
    "Computer vision"
   ]
  },
  {
   "label": "Dec 2024",
   "title": "Medicine price comparison",
   "description": "A web app for comparing medicine prices across pharmacies, with live search suggestions, JWT login and favourites. Built on a Node.js and Express API.",
   "tags": [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT"
   ],
   "url": "https://github.com/arnavjot/medicine-comparison"
  },
  {
   "label": "Flutter app",
   "title": "Dijkstra pathfinding app",
   "description": "A mobile app that shows the shortest route between two cities on a zoomable map, running Dijkstra's algorithm on real-world geographic data.",
   "tags": [
    "Flutter",
    "Node.js",
    "MongoDB",
    "Graph algorithms"
   ],
   "url": "https://github.com/arnavjot/dijkstra-algo"
  }
 ],
 "art": {
  "intro": "Sketches and doodles. Mostly digital, a few in charcoal.",
  "exploreLabel": "Explore full collection",
  "previewMobile": 4,
  "items": [
   {
    "image": "art/ohana.webp",
    "title": "Oh Ana",
    "medium": "Freeform",
    "year": "2024"
   },
   {
    "image": "art/captain.webp",
    "title": "Captain",
    "medium": "Charcoal",
    "year": "2024"
   },
   {
    "image": "art/youangel.webp",
    "title": "you're the angel",
    "medium": "Freeform",
    "year": "2024"
   },
   {
    "image": "art/depp.webp",
    "title": "Johnny Depp 90's",
    "medium": "Freeform",
    "year": "2024"
   },
   {
    "image": "art/corazon.webp",
    "title": "Corazón",
    "medium": "Tayasui Sketches",
    "year": "2023"
   },
   {
    "image": "art/ironspider.webp",
    "title": "ironspider-eye",
    "medium": "Freeform",
    "year": "2024"
   },
   {
    "image": "art/spidey.webp",
    "title": "spider - a 6 min doodle",
    "medium": "Freeform",
    "year": "2024"
   },
   {
    "image": "art/princess.webp",
    "title": "Princess Mononoke ⭐️",
    "medium": "Freeform",
    "year": "2024"
   },
   {
    "image": "art/sketch.webp",
    "title": "Batman",
    "medium": "Freeform",
    "year": "2023"
   },
   {
    "image": "art/headphones.webp",
    "title": "Neko",
    "medium": "Freeform",
    "year": "2023"
   }
  ]
 },
 "education": [
  {
   "school": "Thapar Institute of Engineering and Technology",
   "degree": "B.E. Computer Science and Engineering, Oct 2021 to June 2025"
  }
 ],
 "recognition": [
  {
   "title": "Insta Award, 4 times.",
   "detail": "Monthly award at Hindustan Times for ownership and delivery."
  },
  {
   "title": "Flipkart GRID 6.0.",
   "detail": "Advanced to Level 2."
  },
  {
   "title": "300+ DSA problems",
   "detail": "solved across platforms."
  },
  {
   "title": "Certified",
   "detail": "in AWS Academy Cloud Foundations, Oracle Java Foundations and Foundational C# (Microsoft)."
  }
 ],
 "contact": {
  "heading": "say hi.",
  "text": "Open to software engineering roles, and always up for a chat about apps or art."
 }
};
// ===== END CONTENT =====

addEventListener("pointerdown", () => document.body.setAttribute("data-pointer", ""), true);
addEventListener("keydown", () => document.body.removeAttribute("data-pointer"), true);
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
const preload = (u, cb) => { const im = new Image(); im.onload = im.onerror = () => cb && cb(); im.src = u; };
const upgrade = (img, big) => { if (!img || !big || big === "#") return; preload(big, () => { if (img.isConnected) img.src = big; }); };
function prefetch(urls) {
  const queue = [...new Set(urls.filter(u => u && u !== "#"))];
  const next = () => { const u = queue.shift(); if (u) preload(u, () => setTimeout(next, 120)); };
  setTimeout(next, 400);
}
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const has = (v) => Array.isArray(v) ? v.length > 0 : (v && typeof v === "object") ? Object.values(v).some(has) : Boolean(v && String(v).trim());
const arr = (v) => Array.isArray(v) ? v.filter(x => x != null) : (v == null || v === "" ? [] : [v]);
const obj = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
const str = (v) => (typeof v === "string" || typeof v === "number") ? String(v) : "";
const safe = (fn, ...a) => { try { return fn(...a) || ""; } catch (e) { console.warn("Section skipped:", e); return ""; } };
const safeUrl = (u) => { u = str(u).trim(); return u && (/^(https?:|mailto:|tel:)/i.test(u) || !/^[a-z][\w+.-]*:/i.test(u)) ? u : "#"; };
const rich = (v) => esc(v).replace(/\[([^\]]+)\]\(((?:https?:|mailto:)[^)\s]+)\)/g, (m, t, u) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`);
const COLORS = ["var(--peri)", "var(--peach)", "var(--mint)", "var(--butter)", "var(--lilac)"];

const driveId = (u) => {
  if (!/drive\.google\.com|docs\.google\.com/.test(u || "")) return null;
  const m = u.match(/\/d\/([^/?#]+)/) || u.match(/[?&]id=([^&#]+)/);
  return m ? m[1] : null;
};
const thumbOf = (x) => str(x.thumb) ? safeUrl(x.thumb) : /^(?![a-z][\w+.-]*:)[^?#]*\.webp$/i.test(str(x.image)) ? str(x.image).replace(/\.webp$/i, "-sm.webp") : imgSrc(x.image, 640);
const imgSrc = (u, w = 1600) => { if (/^data:image\/[a-z+.-]+;base64,/i.test(str(u))) return str(u); const id = driveId(u); return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w${w}` : safeUrl(u); };
const resumeLinks = (u) => {
  if (!has(u)) return null;
  const id = driveId(u);
  if (id) return { view: `https://drive.google.com/file/d/${id}/preview`, download: `https://drive.google.com/uc?export=download&id=${id}`, open: `https://drive.google.com/file/d/${id}/view` };
  const s = safeUrl(u); if (s === "#") return null;
  return { view: s, download: s, open: s };
};
const UI_DEFAULTS = {
  nav: { about: "About", work: "Experience", projects: "Projects", art: "Art", contact: "Contact" },
  headings: { about: "About me", work: "Experience", projects: "Projects", art: "Art", education: "Education", recognition: "Recognition" },
  engineer: "Engineer", artist: "Artist", switchLabel: "Show me as",
  sayHi: "Say hi", resume: "Resume", viewResume: "View resume", resumeTitle: "resume",
  downloadPdf: "Download PDF", openNewTab: "Open in new tab", close: "Close",
  scrollCue: "Scroll down for art", exploreArt: "Explore collection", seeMore: "See more",
  loading: "Loading…", comingSoon: "This portfolio is being set up. Check back soon.",
  loadError: "The portfolio content didn't load.<br>Check your connection and refresh the page.",
  profilePicture: "Profile picture", hiBubble: "hi!", viewPhoto: "View photo"
};
let UI = UI_DEFAULTS;
const ui = (k) => { const v = UI[k]; return typeof v === "string" ? v : UI_DEFAULTS[k]; };
const navLabel = (k) => str(obj(UI.nav)[k]) || UI_DEFAULTS.nav[k];
const heading = (k) => str(obj(UI.headings)[k]) || UI_DEFAULTS.headings[k];
const MARKS = {
  about: `<span class="mark" style="border-radius:50%;background:var(--mint)"></span>`,
  work: `<span class="mark" style="border-radius:6px;background:var(--peach)"></span>`,
  projects: `<span class="mark" style="width:30px;height:18px;border-radius:999px;background:var(--butter)"></span>`,
  art: `<span class="mark" style="border-radius:0 100% 0 0;background:var(--lilac)"></span>`
};

function renderHero(d, ctx) {
  const s = obj(d.site), h = obj(d.hero);
  if (!has(s.greeting) && !has(s.name)) return "";
  const both = has(h.engineer) && has(h.artist);
  return `<header class="hero" id="top">
    <div class="hero-row">
      <div class="hero-words">
        <h1>${esc(s.greeting || s.name)}</h1>
        ${both ? `<div class="switch" role="group" aria-label="${esc(ui("switchLabel"))}">
          <button type="button" data-mode="engineer">${esc(ui("engineer"))}</button>
          <button type="button" data-mode="artist">${esc(ui("artist"))}</button>
        </div>` : ""}
        ${has(h.engineer) ? `<p class="hero-line" data-for="engineer">${rich(h.engineer)}</p>` : ""}
        ${has(h.artist) ? `<p class="hero-line" data-for="artist">${rich(h.artist)}</p>` : ""}
        <div class="hero-actions">
          ${has(s.email) ? `<a class="btn btn-light" href="mailto:${esc(s.email)}">${esc(ui("sayHi"))}</a>` : ""}
        </div>
      </div>
      <div class="stage-box" aria-hidden="true"><div class="stage-fit" id="stageFit"><div class="laptop" aria-hidden="true"><i class="lt-screen"></i><i class="lt-base"></i></div><div class="stage" id="stage"></div><svg class="star" viewBox="0 0 100 100" aria-hidden="true"><polygon points="50.0,21.0 60.6,39.4 81.4,43.8 67.1,59.6 69.4,80.7 50.0,72.0 30.6,80.7 32.9,59.6 18.6,43.8 39.4,39.4"/></svg><div class="bubble" id="hiBubble" aria-hidden="true">${esc(ui("hiBubble"))}</div></div></div>
    </div>
    <button type="button" class="scroll-cue" id="scrollCue" aria-label="${esc(ui("scrollCue"))}" hidden>
      <span>${esc(ui("scrollCue"))}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
    </button>
  </header>`;
}

function renderAbout(d) {
  const a = obj(d.about), art = obj(a.artist);
  const photo = imgSrc(str(obj(d.site).photoUrl)) === "#" ? "" : str(obj(d.site).photoUrl);
  const block = (x, introKey, listKey) => {
    const paras = arr(x.paragraphs).map(str).filter(has), list = arr(x[listKey]).map(str).filter(has);
    if (!paras.length && !list.length && !has(str(x.outro))) return "";
    return `${paras.map(p => `<p>${rich(p)}</p>`).join("")}
      ${list.length ? `${has(str(x[introKey])) ? `<p style="margin-bottom:12px">${esc(x[introKey])}</p>` : ""}
        <ul class="chips">${list.map((t, i) => `<li style="border-color:${COLORS[i % COLORS.length]}">${esc(t)}</li>`).join("")}</ul>` : ""}
      ${has(str(x.outro)) ? `<p>${rich(x.outro)}</p>` : ""}`;
  };
  const eng = block(a, "techIntro", "tech"), artist = block(art, "toolsIntro", "tools");
  if (!eng && !artist && !has(photo)) return "";
  const body = artist
    ? `<div class="eng-only">${eng}</div><div class="art-only">${artist}</div>`
    : eng;
  const pic = has(photo) ? `<button type="button" class="photo" data-photo aria-label="${esc(ui("viewPhoto"))}"><img src="${esc(imgSrc(photo, 700))}" alt="${esc(obj(d.site).name || "Photo")}" loading="lazy" onload="this.classList.add('loaded');this.parentNode.classList.add('ready')" onerror="this.classList.add('loaded');this.parentNode.classList.add('ready')"></button>` : "";
  const picM = pic.replace('class="photo"', 'class="photo photo-m"');
  return `<section class="section" id="about"><div class="about">
    ${pic}
    <div class="about-text">
      <h2 class="h2" style="margin-bottom:24px">${MARKS.about}${esc(heading("about"))}</h2>
      ${picM}
      ${body}
    </div>
  </div></section>`;
}

const jobsOf = (d) => (Array.isArray(d.work) ? d.work : [d.work]).map(obj).filter(j => has(str(j.role)) || has(str(j.company)) || arr(j.highlights).length || arr(j.points).length);
function renderWork(d) {
  const jobs = jobsOf(d);
  if (!jobs.length) return "";
  return `<section class="section" id="work">
    <h2 class="h2">${MARKS.work}${esc(heading("work"))}</h2>
    ${jobs.length > 1 ? `<div class="jobs" role="tablist" aria-label="Jobs">${jobs.map((j, i) => `<button type="button" class="job" role="tab" aria-selected="${i === 0}" data-job="${i}">${esc(j.company || j.role)}</button>`).join("")}</div>` : ""}
    <div id="job-view"></div>
  </section>`;
}

function renderProjects(d) {
  const ps = arr(d.projects).map(obj).filter(p => has(str(p.title)));
  if (!ps.length) return "";
  return `<section class="section" id="projects">
    <h2 class="h2">${MARKS.projects}${esc(heading("projects"))}</h2>
    <div class="projects">${ps.map(p => `<article class="project">
      ${has(p.label) ? `<div class="label">${esc(p.label)}</div>` : ""}
      <h3>${has(p.url) ? `<a href="${esc(safeUrl(p.url))}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title)}</h3>
      ${has(p.description) ? `<p>${esc(p.description)}</p>` : ""}
      ${has(arr(p.tags).map(str).filter(has)) ? `<div class="tags">${arr(p.tags).map(str).filter(has).map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
    </article>`).join("")}</div>
  </section>`;
}

const ART_RATIOS = ["4 / 5", "1 / 1", "3 / 4", "4 / 3", "4 / 5", "1 / 1"];
const ART_TILTS = ["-1.5deg", "1deg", "-0.5deg", "1.5deg", "-1deg", "0.5deg"];
const ART_FILLS = ["#FFC531", "#DCDDF7", "#FFFFFF", "#C8EEDF", "#FFD9E4", "#E6E7F2"];
function renderArt(d, ctx) {
  const a = obj(d.art), items = arr(a.items).map(obj).filter(x => has(str(x.image)) && imgSrc(str(x.image)) !== "#");
  ctx.art = items;
  if (!items.length) return "";
  return `<section class="section" id="art">
    <div class="art-head">
      <h2 class="h2">${MARKS.art}${esc(heading("art"))}</h2>
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:18px">
        <button type="button" class="btn btn-outline btn-small eng-only" data-explore>${esc(a.exploreLabel || ui("exploreArt"))}</button>
        ${has(a.moreUrl) ? `<a class="art-more art-only" href="${esc(safeUrl(a.moreUrl))}" target="_blank" rel="noopener">${esc(a.moreLabel || ui("seeMore"))}</a>` : ""}
      </div>
    </div>
    ${has(a.intro) ? `<p class="sub" style="max-width:56ch">${esc(a.intro)}</p>` : ""}
    <div class="art-grid">${items.map((x, i) => {
      const meta = [x.medium, x.year].filter(has).map(esc).join(", ");
      return `<button type="button" class="art-btn" data-art="${i}" aria-label="Open ${esc(x.title || "artwork " + (i + 1))}">
        <div class="art-frame" style="aspect-ratio:${ART_RATIOS[i % 6]};background:${ART_FILLS[i % 6]};transform:rotate(${ART_TILTS[i % 6]})">
          <img src="${esc(thumbOf(x))}" alt="${esc(x.title || "Artwork")}" loading="lazy" onload="this.parentNode.classList.add('ready')" onerror="this.parentNode.classList.add('ready')">
        </div>
        ${has(x.title) ? `<div class="art-title">${esc(x.title)}</div>` : ""}
        ${meta ? `<div class="art-meta">${meta}</div>` : ""}
      </button>`;
    }).join("")}</div>
  </section>`;
}

function blockEducation(d) {
  const ed = arr(d.education).map(obj).filter(e => has(str(e.school)));
  if (!ed.length) return "";
  return `<div><h2 class="list-h">${esc(heading("education"))}</h2>${ed.map(e => `<div class="row">
    <div style="font-weight:600">${esc(e.school)}</div>
    ${has(e.degree) ? `<div class="muted">${esc(e.degree)}</div>` : ""}
    ${has(e.detail) ? `<div class="muted">${esc(e.detail)}</div>` : ""}
  </div>`).join("")}</div>`;
}
function blockRecognition(d) {
  const r = arr(d.recognition).map(obj).filter(x => has(str(x.title)));
  if (!r.length) return "";
  return `<div><h2 class="list-h">${esc(heading("recognition"))}</h2>${r.map(x => `<div class="row"><strong>${esc(x.title)}</strong> <span class="muted">${esc(x.detail || "")}</span></div>`).join("")}</div>`;
}

function renderContact(d, ctx) {
  const c = obj(d.contact), s = obj(d.site);
  const links = arr(s.links).map(obj).filter(l => has(str(l.label)) && safeUrl(l.url) !== "#");
  if (!has(s.email) && !ctx.resume && !links.length) return "";
  return `<footer class="contact" id="contact">
    ${c.robot === false ? "" : ROBOT}
    <div class="wrap contact-inner">
      <h2>${esc(c.heading || "say hi.")}</h2>
      ${has(c.text) ? `<p>${esc(c.text)}</p>` : ""}
      <div class="hero-actions" style="margin-top:32px">
        ${has(s.email) ? `<a class="btn btn-butter" href="mailto:${esc(s.email)}">${esc(s.email)}</a>` : ""}
        ${ctx.resume ? `<button type="button" class="btn btn-outline" data-resume style="background:var(--bg);border-color:var(--text)">${esc(ui("viewResume"))}</button>` : ""}
      </div>
      <div class="foot">
        <div class="foot-links">${links.map(l => `<a class="navlink" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>
        <span>${esc(s.name || "")}, ${new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>`;
}

const ROBOT = `<div class="peek" aria-hidden="true"><div class="peek-tilt">
  <div style="left:-6px;top:6px;width:104px;height:72px">
    <svg width="104" height="72" viewBox="0 0 104 72" fill="none" style="left:0;top:0"><path d="M27 2 H71 C85.4 2 97 13.6 97 28 C97 42.4 85.4 54 71 54 H68 C72 61 80 66 92 69 C76 70 63 65 55 54 H27 C12.6 54 1 42.4 1 28 C1 13.6 12.6 2 27 2 Z" fill="#7ED4BC"/></svg>
    <div style="left:1px;top:2px;width:96px;height:52px;display:grid;place-items:center;color:#15161D;font-weight:800;font-size:22px">hi!</div>
  </div>
  <div style="left:80px;top:160px;width:24px;height:56px;border-radius:12px;background:#F2D27C"></div>
  <div style="left:204px;top:64px;width:6px;height:40px;border-radius:3px;background:#C9A7F5"></div>
  <div style="left:196px;top:48px;width:22px;height:22px;border-radius:50%;background:#F2D27C"></div>
  <div style="left:96px;top:100px;width:230px;height:180px;border-radius:76px;background:#8F9CFF"></div>
  <div style="left:120px;top:124px;width:186px;height:128px;border-radius:52px;background:#15161D"></div>
  <div class="eye" style="left:150px;top:158px;width:30px;height:38px;border-radius:50%;background:#7ED4BC"><div style="left:4px;top:7px;width:10px;height:10px;border-radius:50%;background:#F1F0F5"></div><div style="left:15px;top:22px;width:4px;height:4px;border-radius:50%;background:#F1F0F5"></div></div>
  <div class="eye" style="left:222px;top:158px;width:30px;height:38px;border-radius:50%;background:#7ED4BC"><div style="left:4px;top:7px;width:10px;height:10px;border-radius:50%;background:#F1F0F5"></div><div style="left:15px;top:22px;width:4px;height:4px;border-radius:50%;background:#F1F0F5"></div></div>
  <div style="left:136px;top:212px;width:24px;height:12px;border-radius:50%;background:#FF8FB1;opacity:.85"></div>
  <div style="left:240px;top:212px;width:24px;height:12px;border-radius:50%;background:#FF8FB1;opacity:.85"></div>
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style="left:186px;top:212px"><path d="M4 4 Q16 15 28 4" stroke="#7ED4BC" stroke-width="4" stroke-linecap="round"/></svg>
</div></div>`;
const SHAPES = [
  { eng: [156, 13, 212, 410, "36px", 0, "#22242E", 3, "#8F9CFF"],  art: [110, 26, 150, 150, "50%", 0, "#8F9CFF", 0, "#8F9CFF"] },
  { eng: [174, 40, 174, 40, "12px", 0, "#F2D27C", 0, "#F2D27C"],   art: [10, 273, 196, 78, "39px", -14, "#F2D27C", 0, "#F2D27C"] },
  { eng: [174, 97, 48, 48, "50%", 0, "#7ED4BC", 3, "#F1F0F5"],     art: [280, 150, 210, 210, "62% 38% 55% 45% / 48% 60% 40% 52%", 8, "#7ED4BC", 6, "#F1F0F5"] },
  { eng: [174, 167, 174, 128, "16px", 0, "#F3A684", 0, "#F3A684"], art: [390, 9, 116, 116, "0 100% 0 0", 0, "#F3A684", 0, "#F3A684"] },
  { eng: [237, 112, 112, 14, "7px", 0, "#C9A7F5", 0, "#C9A7F5"],   art: [330, 395, 118, 14, "7px", -18, "#C9A7F5", 0, "#C9A7F5"] },
  { eng: [186, 179, 52, 52, "10px", 0, "#FFF3E6", 0, "#FFF3E6"],   art: [196, 200, 56, 56, "50%", 0, "rgba(0,0,0,0)", 3, "#8F9CFF"] },
  { eng: [222, 405, 80, 5, "3px", 0, "#F1F0F5", 0, "#F1F0F5"],     art: [31, 53, 30, 30, "50%", 0, "#F1F0F5", 0, "#F1F0F5"] }
];
let AVATAR = { engineer: "", artist: "" };
function paintShapes(mode) {
  const stage = document.getElementById("stage");
  if (!stage) return;
  if (!stage.children.length) SHAPES.forEach((_, i) => {
    const el = document.createElement("div"); el.className = "shape";
    if (i === 2) {
      el.style.overflow = "hidden";
      ["engineer", "artist"].forEach(m => {
        if (!AVATAR[m]) return;
        const img = document.createElement("img");
        img.className = "shape-img"; img.dataset.for = m; img.alt = ""; img.src = AVATAR[m];
        img.onload = () => { img.classList.add("ready"); paintShapes(document.body.dataset.mode); };
        img.onerror = () => { img.remove(); paintShapes(document.body.dataset.mode); };
        el.appendChild(img);
      });
    }
    stage.appendChild(el);
  });
  stage.querySelectorAll(".shape-img").forEach(img => img.classList.toggle("on", img.dataset.for === (mode === "artist" ? "artist" : "engineer")));
  if (stage.children[0]) stage.children[0].classList.toggle("pulse-thin", mode !== "artist" && !stage.classList.contains("zoom"));
  const live = stage.querySelector(".shape-img.on");
  if (stage.children[2]) stage.children[2].classList.toggle("loading", !!live && !(live.complete && live.naturalWidth));
  [...stage.children].forEach((el, i) => {
    const zoomed = i === 2 && mode !== "artist" && stage.classList.contains("zoom");
    const [l, t, w, h, r, rot, bg, bw, bc] = zoomed ? [130, 90, 260, 260, "50%", 0, "#8F9CFF", 4, "#F1F0F5"] : SHAPES[i][mode === "artist" ? "art" : "eng"];
    clearTimeout(el._z);
    if (zoomed) el.style.zIndex = 10;
    else if (el.style.zIndex) el._z = setTimeout(() => { el.style.zIndex = ""; }, 800);
    Object.assign(el.style, { left: l + "px", top: t + "px", width: w + "px", height: h + "px", borderRadius: r, transform: `rotate(${rot}deg)`, backgroundColor: bg, borderWidth: bw + "px", borderColor: bc });
  });
}
function fitStage() {
  const fit = document.getElementById("stageFit"), stage = document.getElementById("stage");
  if (!fit || !stage) return;
  const k = Math.min(1, fit.clientWidth / 520);
  stage.style.transform = `scale(${k})`;
  fit.style.height = 440 * k + "px";
}
let MODE_LAYOUTS = { engineer: [], artist: [] };
function setMode(mode) {
  const st = document.getElementById("stage"); if (st) st.classList.remove("zoom");
  const fitEl = document.getElementById("stageFit"); if (fitEl) fitEl.classList.remove("zoomed");
  document.body.dataset.mode = mode;
  document.querySelectorAll(".switch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
  const both = document.querySelector(".switch");
  document.querySelectorAll(".hero-line").forEach(p => { p.hidden = both ? p.dataset.for !== mode : false; });
  paintShapes(mode);
  if (mode !== "artist") { const cue = document.getElementById("scrollCue"); if (cue) cue.hidden = true; }

  const list = MODE_LAYOUTS[mode] || MODE_LAYOUTS.engineer;
  const pos = (keys) => Math.min(...keys.split(" ").map(k => { const i = list.indexOf(k); return i < 0 ? 999 : i; }));
  document.querySelectorAll("[data-key]").forEach(el => {
    const p = pos(el.dataset.key);
    el.hidden = p === 999;
    el.style.order = p;
  });
  document.querySelectorAll('a[href="#art"]').forEach(a => { const art = document.querySelector('[data-key="art"]'); a.hidden = !art || art.hidden; });
}
function render(d) {
  d = obj(d);
  const s = obj(d.site);
  UI = { ...UI_DEFAULTS, ...obj(d.ui) };
  document.body.dataset.mode = location.hash.toLowerCase() === "#artist" || s.startMode === "artist" ? "artist" : "engineer";
  const ctx = { resume: resumeLinks(str(s.resumeUrl)), art: [] };
  const DEFAULT = ["hero", "about", "work", "projects", "art", "education", "recognition", "contact"];
  const layout = arr(d.layout).map(str).filter(has).length ? arr(d.layout).map(str).filter(has) : DEFAULT;
  const artistLayout = arr(d.artistLayout).map(str).filter(has).length ? arr(d.artistLayout).map(str).filter(has) : layout;
  MODE_LAYOUTS = { engineer: layout, artist: artistLayout };
  const all = [...layout, ...artistLayout.filter(k => !layout.includes(k))];

  const probes = { about: renderAbout, work: renderWork, projects: renderProjects, art: (x) => renderArt(x, { art: [] }), contact: (x) => renderContact(x, ctx) };
  ctx.visible = all.filter(k => probes[k] ? safe(probes[k], d) !== "" : true);

  const navItems = ctx.visible.filter(k => navLabel(k)).map(k => `<a class="navlink" data-key="${k}" href="#${k}">${esc(navLabel(k))}</a>`).join("");
  ctx.nav = `<nav class="nav" aria-label="Main">
    <button type="button" class="brand" data-top aria-label="Back to top"><i></i>${esc(s.shortName || s.name || "")}</button>
    <div class="nav-links">${navItems}${ctx.resume ? `<button type="button" class="btn btn-butter btn-small nav-resume" data-resume style="order:999">${esc(ui("resume"))}</button>` : ""}
      <button type="button" class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu"><span></span><span></span><span></span></button>
    </div>
    <div class="nav-menu" id="navMenu" hidden>${ctx.visible.filter(k => navLabel(k)).map(k => `<a data-key="${k}" href="#${k}">${esc(navLabel(k))}</a>`).join("")}${ctx.resume ? `<button type="button" data-resume style="order:99">${esc(ui("resume"))}</button>` : ""}</div>
  </nav>`;

  const hero = safe(renderHero, d, ctx);
  const out = [`<div class="topbar" id="topbar"><div class="wrap">${ctx.nav}</div></div>`, hero ? `<div class="wrap">${hero}</div>` : ""];

  const main = [];
  for (let i = 0; i < all.length; i++) {
    const k = all[i];
    if (k === "hero" || k === "contact") continue;
    if (k === "education" || k === "recognition") {
      const keys = [], blocks = [];
      while (i < all.length && (all[i] === "education" || all[i] === "recognition")) {
        const b = safe(all[i] === "education" ? blockEducation : blockRecognition, d);
        if (b) { keys.push(all[i]); blocks.push(b); }
        i++;
      }
      i--;
      if (blocks.length) main.push(`<div data-key="${keys.join(" ")}"><section class="section"><div class="duo">${blocks.join("")}</div></section></div>`);
      continue;
    }
    const fn = { about: renderAbout, work: renderWork, projects: renderProjects, art: renderArt }[k];
    if (fn) { const html = safe(fn, d, ctx); if (html) main.push(`<div data-key="${k}">${html}</div>`); }
  }
  if (main.length) out.push(`<main class="wrap">${main.join("")}</main>`);
  if (all.includes("contact")) { const c = safe(renderContact, d, ctx); if (c) out.push(`<div data-key="contact">${c}</div>`); }

  const empty = !document.createRange().createContextualFragment(out.join("")).querySelector(".hero, main, footer");
  document.getElementById("app").innerHTML = empty ? `<div class="state">${esc(ui("comingSoon"))}</div>` : out.join("");
  const title = str(s.title) || str(s.name) || "Portfolio";
  document.title = title;
  const meta = (sel, attr, val) => { const el = document.querySelector(sel); if (el && has(val)) el.setAttribute(attr, val); };
  meta('meta[name="description"]', "content", str(s.description));
  meta('meta[property="og:title"]', "content", title);
  meta('meta[property="og:description"]', "content", str(s.description));

  try { wire(d, ctx); } catch (e) { console.warn("Interaction setup skipped:", e); }
  if (!location.hash || !document.getElementById(location.hash.slice(1))) scrollTo(0, 0);
  const artUrls = ctx.art.map(thumbOf);
  prefetch(artUrls);
}

function wire(d, ctx) {
  const smooth = () => matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  document.querySelectorAll("[data-top]").forEach(b => b.addEventListener("click", () => {
    scrollTo({ top: 0, behavior: smooth() });
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }));
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", (e) => {
    const el = document.getElementById(a.getAttribute("href").slice(1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: smooth() });
  }));
  const menuBtn = document.getElementById("menuBtn"), menu = document.getElementById("navMenu");
  const setMenu = (open) => {
    if (!menu || !menuBtn) return;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuBtn.classList.toggle("open", open);
  };
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", (e) => { e.stopPropagation(); setMenu(menu.hidden); });
    menu.addEventListener("click", (e) => { if (e.target.closest("a, button")) setMenu(false); });
    document.addEventListener("click", (e) => { if (!menu.hidden && !e.target.closest("#navMenu")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    matchMedia("(min-width: 761px)").addEventListener("change", () => setMenu(false));
  }
  const bar = document.getElementById("topbar");
  const cue = document.getElementById("scrollCue");
  let cueArmed = false;
  const hideCue = () => { if (cue) cue.hidden = true; cueArmed = false; };
  const onScroll = () => {
    bar && bar.classList.toggle("scrolled", scrollY > 8);
    if (!cue || cue.hidden) return;
    if (scrollY < 40) cueArmed = true;
    else if (cueArmed && scrollY > 120) hideCue();
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (cue) cue.addEventListener("click", () => {
    hideCue();
    document.getElementById("art")?.scrollIntoView({ behavior: smooth() });
  });

  const pic = (u, w) => { const s = imgSrc(str(u), w); return s === "#" ? "" : s; };
  const doodle = pic(obj(d.site).doodleUrl, 600);
  AVATAR = { engineer: doodle || pic(obj(d.site).photoUrl, 300), artist: doodle };
  const start = location.hash.toLowerCase() === "#artist" ? "artist" : obj(d.site).startMode === "artist" ? "artist" : "engineer";
  setMode(start);
  if (document.getElementById("stage")) {
    fitStage();
    addEventListener("resize", fitStage);
  }
  document.querySelectorAll(".switch button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  document.querySelectorAll("[data-explore]").forEach(b => b.addEventListener("click", () => {
    setMode("artist");
    if (cue) { cue.hidden = false; cueArmed = true; }
    scrollTo({ top: 0, behavior: "instant" });
  }));
  const artCfg = obj(obj(d.art));
  const limitOf = (v) => { const n = parseInt(v, 10); return Number.isFinite(n) && n >= 0 ? n : 6; };
  const artLimits = { desktop: limitOf(artCfg.previewDesktop), mobile: limitOf(artCfg.previewMobile) };
  const phone = matchMedia("(max-width: 760px)");
  const applyArtLimit = () => {
    const n = phone.matches ? artLimits.mobile : artLimits.desktop;
    document.querySelectorAll(".art-btn").forEach((el, i) => el.classList.toggle("art-extra", i >= n));
    const more = document.querySelector("[data-explore]");
    if (more) more.hidden = ctx.art.length <= n;
  };
  applyArtLimit();
  phone.addEventListener("change", applyArtLimit);
  const peek = document.querySelector(".peek"), contactActions = document.querySelector(".contact .hero-actions");
  const placeRobot = () => {
    if (!peek || !contactActions) return;
    if (!phone.matches) { peek.style.top = ""; return; }
    peek.style.top = (contactActions.getBoundingClientRect().bottom - peek.parentNode.getBoundingClientRect().top - 12) + "px";
  };
  placeRobot();
  addEventListener("resize", placeRobot);
  phone.addEventListener("change", placeRobot);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeRobot);
  const jobs = jobsOf(d), view = document.getElementById("job-view");
  const showJob = (n) => {
    const j = jobs[n], hl = arr(j.highlights).map(obj).filter(x => has(str(x.label)) || has(str(x.headline)));
    const pts = arr(j.points).map(str).filter(has);
    const meta = [j.role && `<strong>${esc(j.role)}</strong>`, j.company && `at ${esc(j.company)}`].filter(Boolean).join(" ");
    view.innerHTML = `${meta || has(j.period) ? `<p class="sub">${meta}${has(j.period) ? `, ${esc(j.period)}` : ""}</p>` : ""}
      ${hl.length ? `<div class="work-box">
        <div class="tabs" role="tablist" aria-label="Experience highlights">
          ${hl.map((x, i) => `<button type="button" class="tab" role="tab" id="tab-${i}" aria-controls="work-panel" aria-selected="${i === 0}" data-tab="${i}"><i style="background:${COLORS[i % COLORS.length]}"></i>${esc(x.label || x.headline)}</button>`).join("")}
        </div>
        <div class="panel" id="work-panel" role="tabpanel"></div>
      </div>` : pts.length ? `<div class="work-box"><div class="panel" id="work-panel"><ul>${pts.map(p => `<li><i style="background:${COLORS[0]}"></i><span>${rich(p)}</span></li>`).join("")}</ul></div></div>` : ""}`;
    document.querySelectorAll(".job").forEach(b => b.setAttribute("aria-selected", String(+b.dataset.job === n)));
    const panel = document.getElementById("work-panel");
    const showTab = (i) => {
      document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(+t.dataset.tab === i)));
      const x = hl[i], c = COLORS[i % COLORS.length];
      panel.setAttribute("aria-labelledby", "tab-" + i);
      panel.innerHTML = `<h3 style="color:${c}">${esc(x.headline || x.label)}</h3>
        ${has(arr(x.points).map(str).filter(has)) ? `<ul>${arr(x.points).map(str).filter(has).map(p => `<li><i style="background:${c}"></i><span>${esc(p)}</span></li>`).join("")}</ul>` : ""}`;
    };
    if (panel && hl.length) {
      showTab(0);
      const tabs = [...document.querySelectorAll(".tab")];
      tabs.forEach(t => {
        t.addEventListener("click", () => showTab(+t.dataset.tab));
        t.addEventListener("keydown", (e) => {
          const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
          if (!dir) return;
          e.preventDefault();
          const k = (+t.dataset.tab + dir + tabs.length) % tabs.length;
          tabs[k].focus(); showTab(k);
        });
      });
    }
  };
  if (view && jobs.length) {
    showJob(0);
    document.querySelectorAll(".job").forEach(b => b.addEventListener("click", () => showJob(+b.dataset.job)));
  }
  const lb = document.getElementById("lightbox");
  let cur = 0;
  const showArt = (i) => {
    const items = ctx.art; if (!items.length) return;
    cur = (i + items.length) % items.length;
    delete lb.dataset.single;
    const x = items[cur], meta = [x.medium, x.year].filter(has).map(esc).join(", ");
    lb.innerHTML = `<div class="lb-stage"><img src="${esc(thumbOf(x))}" alt="${esc(x.title || "Artwork")}" onload="this.classList.add('loaded')" onerror="this.classList.add('loaded')"></div>
      <div class="lb-bar">
        <div>${has(x.title) ? `<div class="lb-title">${esc(x.title)}</div>` : ""}${meta ? `<div class="lb-meta">${meta}</div>` : ""}</div>
        <div class="lb-btns">
          ${items.length > 1 ? `<button type="button" class="round" data-step="-1" aria-label="Previous artwork"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
          <button type="button" class="round" data-step="1" aria-label="Next artwork"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>` : ""}
          <button type="button" class="btn btn-butter" data-close>${esc(ui("close"))}</button>
        </div>
      </div>`;
    upgrade(lb.querySelector(".lb-stage img"), imgSrc(x.image, 1600));
  };
  document.querySelectorAll("[data-photo]").forEach(photoBtn => photoBtn.addEventListener("click", () => {
    const src = imgSrc(str(obj(d.site).photoUrl), 700);
    lb.dataset.single = "1";
    lb.innerHTML = `<div class="lb-stage"><img src="${esc(src)}" alt="${esc(obj(d.site).name || "Photo")}" onload="this.classList.add('loaded')" onerror="this.classList.add('loaded')"></div>
      <div class="lb-bar"><div>${has(obj(d.site).name) ? `<div class="lb-title">${esc(obj(d.site).name)}</div>` : ""}</div>
        <div class="lb-btns"><button type="button" class="btn btn-butter" data-close>${esc(ui("close"))}</button></div></div>`;
    upgrade(lb.querySelector(".lb-stage img"), imgSrc(str(obj(d.site).photoUrl), 1600));
    lb.showModal();
  }));
  document.querySelectorAll("[data-art]").forEach(b => b.addEventListener("click", () => { showArt(+b.dataset.art); lb.showModal(); }));
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest("[data-close]")) return lb.close();
    const step = e.target.closest("[data-step]"); if (step) showArt(cur + +step.dataset.step);
  });
  lb.addEventListener("keydown", (e) => { if (lb.dataset.single) return; if (e.key === "ArrowRight") showArt(cur + 1); if (e.key === "ArrowLeft") showArt(cur - 1); });
  const stageEl = document.getElementById("stage");
  const stageBox = document.querySelector(".stage-box");
  const setZoom = (on) => {
    if (document.body.dataset.mode === "artist") return;
    if (on) { const img = stageEl.querySelector(".shape-img.on"); if (img && !img.classList.contains("ready")) return; }
    const fitEl = document.getElementById("stageFit");
    stageEl.classList.toggle("zoom", on);
    fitEl.classList.toggle("zoomed", on);
    paintShapes("engineer");
  };
  if (stageBox) {
    const area = document.getElementById("stageFit");
    const inside = (e) => {
      const r = area.getBoundingClientRect(), k = Math.min(1, r.width / 520);
      const x = (e.clientX - r.left) / k, y = (e.clientY - r.top) / k;
      const onPhone = x >= 156 && x <= 368 && y >= 13 && y <= 423;
      const onCircle = stageEl.classList.contains("zoom") && Math.hypot(x - 260, y - 220) <= 130;
      return onPhone || onCircle;
    };
    area.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const on = inside(e);
      if (on !== stageEl.classList.contains("zoom")) setZoom(on);
    });
    area.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") setZoom(false); });
    let lastType = "", tapped = false, downAt = null;
    const toggleTap = (e) => {
      if (stageEl.classList.contains("zoom")) return setZoom(false);
      if (inside(e)) setZoom(true);
    };
    stageBox.addEventListener("pointerdown", (e) => { lastType = e.pointerType; downAt = [e.clientX, e.clientY]; });
    stageBox.addEventListener("pointerup", (e) => {
      if (e.pointerType === "mouse" || !downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 12) return;
      tapped = true;
      toggleTap(e);
      setTimeout(() => { tapped = false; }, 400);
    });
    stageBox.addEventListener("click", (e) => {
      if (tapped || lastType === "mouse") return;
      toggleTap(e);
    });
  }
  let touched = false;
  ["pointerdown", "pointermove", "keydown"].forEach(ev => addEventListener(ev, () => { touched = true; }, { once: true, passive: true }));
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const started = Date.now();
    const tryHint = () => {
      if (touched || document.body.dataset.mode === "artist" || Date.now() - started > 16000) return;
      const img = stageEl.querySelector(".shape-img.on.ready");
      if (!img || Date.now() - started < 350) return setTimeout(tryHint, 100);
      setZoom(true);
      setTimeout(() => { if (!touched) setZoom(false); }, 1500);
    };
    setTimeout(tryHint, 350);
  }
  const vw = document.getElementById("viewer");
  if (ctx.resume) {
    document.querySelectorAll("[data-resume]").forEach(b => b.addEventListener("click", () => {
      vw.innerHTML = `<div class="viewer-head"><strong>${esc((d.site || {}).name || "")}, ${esc(ui("resumeTitle"))}</strong>
        <div class="acts">
          <a class="btn btn-butter btn-small" href="${esc(ctx.resume.download)}" target="_blank" rel="noopener">${esc(ui("downloadPdf"))}</a>
          <a class="btn btn-outline btn-small" href="${esc(ctx.resume.open)}" target="_blank" rel="noopener">${esc(ui("openNewTab"))}</a>
          <button type="button" class="btn btn-outline btn-small" data-close>${esc(ui("close"))}</button>
        </div></div>
        <div class="viewer-body"><div class="sp-wrap" aria-hidden="true"><div class="sp-shapes"><i class="sp-a"></i><i class="sp-b"></i><i class="sp-c"></i><i class="sp-d"></i></div><div class="sp-bar"><b></b></div><span>${esc(ui("loading"))}</span></div><iframe src="${esc(ctx.resume.view)}" title="Resume" onload="this.classList.add('loaded')"></iframe></div>`;
      vw.showModal();
    }));
    vw.addEventListener("click", (e) => { if (e.target === vw || e.target.closest("[data-close]")) vw.close(); });
    vw.addEventListener("close", () => { vw.innerHTML = ""; });
  }
}

const load = (url) => fetch(url, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
const OVERRIDE = new URLSearchParams(location.search).get("data");
(OVERRIDE ? load(OVERRIDE) : Promise.resolve(DATA))
  .then(render)
  .catch(() => {
    document.getElementById("app").innerHTML = `<div class="state">${UI_DEFAULTS.loadError}</div>`;
  });
