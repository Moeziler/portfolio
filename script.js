const services = [
  { name: "Business Development", detail: "Open new markets. Build a pipeline that moves." },
  { name: "Growth Marketing", detail: "Find the audience. Turn attention into action." },
  { name: "Market Research", detail: "Understand the landscape before making your move." },
  { name: "Financial Consulting", detail: "Bring clarity to the numbers behind the strategy." },
  { name: "Business Consulting", detail: "Connect your ambition to a practical plan." },
  { name: "Public Relations", detail: "Build relationships that strengthen your brand." },
  { name: "HR Consulting", detail: "Align people, opportunities and business goals." },
  { name: "Customer Service", detail: "Turn a first impression into a lasting relationship." },
];

const wins = [
  { value: "$150K", label: "Contract secured via targeted email marketing", where: "Baaraku" },
  { value: "$140K+", label: "Additional deals closed, 300% lift in qualified leads", where: "Baaraku" },
  { value: "₦16M", label: "Contract won through local client acquisition", where: "Quales Consulting" },
  { value: "3", label: "Enterprise deals from GTM strategy in 2 months", where: "Soundyaad" },
  { value: "2 / qtr", label: "International clients onboarded on average", where: "Quales Consulting" },
  { value: "6000%", label: "Follower growth and 1M TikTok views", where: "Fashioniversal" },
];

const experience = [
  { role: "Business Development Executive", company: "Kardinal Inc (GoKardinal)", period: "Aug 2026 – Present", place: "Lagos · Remote",
    summary: "Driving growth for GoKardinal, an end-to-end corporate travel & expense platform for African businesses.",
    points: ["Prospect and close business-travel clients through research, networking and outreach",
      "Negotiate contracts, pricing and terms; own pipeline reporting and forecasts",
      "Feed market and competitor insights back to product and marketing"],
    tags: ["B2B Sales", "TravelTech", "Pipeline Management"] },
  { role: "Lead Generation Executive", company: "Belema Art House", period: "Jul 2026 – Sep 2026", place: "Dublin, Ireland · Remote",
    summary: "Developed brand partnerships for Serenade, a program embedding art and culture into brand experiences.",
    points: ["Identified and engaged brand and marketing decision-makers", "Refined Serenade's positioning and partnership decks",
      "Managed CRM pipeline from first touch to collaboration"],
    tags: ["Brand Partnerships", "Arts & Culture", "Outreach"] },
  { role: "Business Development Manager", company: "Quales Consulting", period: "Aug 2025 – Present", place: "Lagos · Remote",
    summary: "Leading B2B and B2C business development across Quales Consulting (QA & tech talent network) and Quales Learning (QA/Scrum training).",
    points: ["Onboard an average of 2 international clients per quarter, expanding the company's global footprint",
      "Run multi-channel prospecting with Apollo.io, Brevo, LinkedIn Sales Navigator and CRM systems",
      "Partner with design, marketing, finance and ops for seamless client and learner onboarding"],
    tags: ["Partnerships", "Lead Generation", "CRM"] },
  { role: "Growth Marketing Manager", company: "Soundyaad", period: "Oct 2025 – Present", place: "Lagos · Remote",
    summary: "Growing Soundyaad, the release OS for independent African artists — from Lagos to Nairobi, Accra to Johannesburg.",
    points: ["Closed 3 enterprise deals within 2 months of executing the GTM strategy",
      "Lead SEO, content curation and brand awareness to drive organic discovery",
      "Drive sales expansion, partnership outreach and social media strategy across African markets"],
    tags: ["GTM Strategy", "Music Tech", "SEO"] },
  { role: "Strategic Partnerships", company: "Soundyaad", period: "Mar 2025 – Present", place: "Lagos · Remote",
    summary: "Building partnerships and audience growth for independent African artists.",
    points: ["Support sales expansion and customer relationship management",
      "Develop partnerships, brand awareness and social media marketing initiatives"],
    tags: ["Partnerships", "Music Tech", "Brand Awareness"] },
  { role: "Lead Generation Specialist", company: "Quales Consulting", period: "Feb 2025 – Aug 2025", place: "Lagos · Remote",
    summary: "Sourced and qualified partners for a global network of freelance developers, designers, analysts and PMs.",
    points: ["Secured a ₦16 million contract through local client acquisition",
      "Generated leads that converted into 2 new international clients per quarter",
      "Owned CRM documentation, pipeline reporting and lead-nurture content sequences"],
    tags: ["Lead Generation", "Outreach", "Pipeline Reporting"] },
  { role: "Marketing Co-Founder", company: "Tambari", period: "Jun 2024 – Present", place: "Lagos · Remote",
    summary: "Co-founded a design agency crafting brands, websites and UI/UX that convert for SMEs.",
    points: ["Secured a ₦1 million deal within the first month", "Built and executed go-to-market strategies for SME design services",
      "Direct content, social media and influencer partnerships; track KPIs to optimize ROI"],
    tags: ["GTM Strategy", "Branding", "Digital Marketing"] },
  { role: "Client Service Team Lead", company: "Baaraku", period: "Dec 2022 – Jan 2025", place: "Lagos · Remote",
    summary: "Led client acquisition and B2B pipeline for a recruitment and HR-tech business.",
    points: ["Secured a $150K contract via targeted email marketing and closed $140K+ in additional deals",
      "Drove a 300% increase in qualified leads and revenue with automated cold-email and nurture sequences",
      "Managed the full pipeline in Apollo.io, HubSpot, Salesforce, Zendesk and RecruitCRM"],
    tags: ["B2B Sales", "HR Tech", "Email Automation"] },
  { role: "Marketing Co-Founder", company: "CRY8", period: "Aug 2021 – Nov 2022", place: "Lagos · Remote", earlier: true,
    summary: "Digital transformation and IT strategy consulting for SMEs.",
    points: ["Secured a strategic partnership with Harmony One Blockchain DAO in Nigeria",
      "Ran inbound/outbound GTM customer-acquisition strategies"],
    tags: ["Blockchain", "Consulting", "GTM"] },
  { role: "Sales Development Representative", company: "Fashioniversal", period: "Mar 2021 – Feb 2024", place: "Lagos · Hybrid", earlier: true,
    summary: "Sales and social growth for a fashion brand.",
    points: ["Drove a 6000% increase in followers and 1M views on TikTok",
      "Managed content, influencer partnerships, SEO and CRM-driven customer retention"],
    tags: ["Social Growth", "Fashion", "Influencer Marketing"] },
  { role: "Retail Sales Assistant", company: "EK Suppliers", period: "Nov 2019 – Nov 2020", place: "Benin City · Onsite", earlier: true,
    summary: "Daily sales operations, inventory and customer service.",
    points: ["Supervised a sales team and credit-recovery processes", "Maintained financial and bookkeeping records"],
    tags: ["Retail", "Team Leadership", "Bookkeeping"] },
];

const certifications = [
  { name: "Financial Modeling & Valuation Analyst (FMVA)®", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/1139b2b8-9f96-4d07-807b-1df080b7f478", featured: true },
  { name: "Travel Industry Fundamentals", issuer: "Amadeus", date: "Aug 2026", url: "https://drive.google.com/file/d/1-Yu9hkKelAU5FKq_GAxgMa086N24MUpw/view?usp=sharing", featured: true },
  { name: "Claude 101", issuer: "Anthropic", date: "May 2026", url: "https://verify.skilljar.com/c/p5vc7tc3pmaq", featured: true },
  { name: "Digital Marketing", issuer: "Udemy", date: "Dec 2025", url: "https://www.udemy.com/certificate/UC-dd5fbb07-abb9-4a4a-bd4a-f1aeb8aed436/", featured: true },
  { name: "Inbound Sales", issuer: "HubSpot Academy", date: "Jun 2024", expires: "2026-07-31", expiryLabel: "Jul 2026", url: "https://app-eu1.hubspot.com/academy/achievements/054qbdpj/en/1/moses-anyanwu/inbound-sales", featured: true },
  { name: "EF SET Certificate (English)", issuer: "EF SET", date: "Jun 2024", url: "https://cert.efset.org/dnLe2K", featured: true },
  { name: "Introduction to Business Intelligence", issuer: "Corporate Finance Institute", date: "Jun 2023", url: "http://credentials.corporatefinanceinstitute.com/ccfc3182-5286-489c-bb56-41771d8060d2" },
  { name: "Business Valuation Modeling Part II", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/5159bd18-daf1-4321-a9df-ce35c11dcf2d" },
  { name: "Budgeting and Forecasting", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/ef298988-0b03-408e-997b-31d4aba64f8a" },
  { name: "PowerPoint & Pitchbooks", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/46752ab5-ef5d-454e-98e2-ed9ad958134d" },
  { name: "Presentation of Financial Information", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/6600f9f2-5b1e-404c-b783-7e30aa12fef1" },
  { name: "Scenario & Sensitivity Analysis", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/3d9fe768-6b2a-4ae7-9b6a-efbd1fd490db" },
  { name: "FP&A Monthly Cash Flow Forecasting", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/29eb385a-26da-4cda-b2c0-0ced55f91e64" },
  { name: "Business Valuation Modeling Part I", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/3b669ba8-22fe-4f0a-ac45-c1a3cef6fb97" },
  { name: "Corporate & Business Strategy", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/17b669c6-b97a-46be-8145-a84e3cfc0671" },
  { name: "Building a 3 Statement Financial Model", issuer: "Corporate Finance Institute", date: "Nov 2022", url: "http://credentials.corporatefinanceinstitute.com/2bbbea71-d2b4-458e-b024-638627ad25bd" },
  { name: "Financial Analysis Fundamentals", issuer: "Corporate Finance Institute", date: "Oct 2022", url: "http://credentials.corporatefinanceinstitute.com/e0f1aa72-7c2d-4bbf-8d64-aef8f0580f9c" },
  { name: "Math for Corporate Finance", issuer: "Corporate Finance Institute", date: "Oct 2022", url: "http://credentials.corporatefinanceinstitute.com/91109d64-a6a2-454f-802e-45486966a88e" },
  { name: "Corporate Finance Fundamentals", issuer: "Corporate Finance Institute", date: "Oct 2022", url: "http://credentials.corporatefinanceinstitute.com/6bcb9d9c-fd40-41d2-b1e9-c3da99fb40ca" },
  { name: "Excel Fundamentals – Formulas for Finance", issuer: "Corporate Finance Institute", date: "Oct 2022", url: "http://credentials.corporatefinanceinstitute.com/88c2e7b9-08c3-4364-9723-218936a5b245" },
  { name: "Professional Ethics", issuer: "Corporate Finance Institute", date: "Sep 2022", url: "http://credentials.corporatefinanceinstitute.com/d8c935aa-9dba-4d3e-97a6-fa2e5550d72f" },
];

const skills = {
  "Sales & Partnerships": ["Business Development", "Strategic Partnerships", "B2B & B2C Sales", "Lead Generation", "Cold Calling", "Negotiation & Deal Closing"],
  "Marketing & Growth": ["Digital Marketing", "SEO", "Social Media Marketing", "Go-to-Market Strategy", "Content Strategy", "A/B Testing"],
  "Finance & Analysis": ["Financial Modeling", "Business Valuation", "FP&A / Forecasting", "Excel", "Pitchbooks & Presentations", "Business Intelligence"],
  "CRM & Outreach": ["Apollo.io", "LinkedIn Sales Navigator", "HubSpot", "Salesforce", "Brevo", "Clay", "Dripify", "RecruitCRM", "Zendesk", "Airtable"],
  "Marketing, Creative & AI": ["Google Analytics", "Ads Manager", "Figma", "Canva", "CapCut", "DaVinci Resolve", "AI Agents & Workflows", "LLMs (Claude)"],
};

const education = [
  { school: "Imo State University", degree: "B.Sc. Accountancy", detail: "Second Class Upper Division", period: "2015 – 2019" },
  { school: "Corporate Finance Institute® (CFI)", degree: "Financial Modeling & Valuation Analyst (FMVA®)", detail: "Accounting & Finance", period: "Sep – Nov 2022" },
];

/** @param {string} id */
const $ = id => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Missing element: ${id}`);
  return element;
};

$("win-list").innerHTML = wins.map(w => `
  <div class="win"><strong>${w.value}</strong><p>${w.label}</p><span>${w.where}</span></div>`).join("");

$("service-list").innerHTML = services.map((s, index) => `
  <li><span class="service-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><h3>${s.name}</h3><p>${s.detail}</p></li>`).join("");

$("experience-list").innerHTML = experience.map(e => `
  <article class="job${e.earlier ? " earlier" : ""}">
    <div class="job-head">
      <div><h3>${e.role}</h3><p class="company">${e.company}</p></div>
      <div class="meta"><span>${e.period}</span><span>${e.place}</span></div>
    </div>
    <p class="summary">${e.summary}</p>
    <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
    <div class="tags">${e.tags.map(t => `<span>${t}</span>`).join("")}</div>
  </article>`).join("");

$("exp-toggle").hidden = false;
$("exp-toggle").addEventListener("click", () => {
  const open = $("experience-list").classList.toggle("show-all");
  $("exp-toggle").textContent = open ? "Hide earlier roles" : "Show earlier roles";
  $("exp-toggle").setAttribute("aria-expanded", String(open));
});

const today = new Date().toISOString().slice(0, 10);
$("cert-list").innerHTML = certifications.map(c => `
  <a class="cert${c.featured ? " featured" : " extra"}" href="${c.url}" target="_blank" rel="noopener">
    <span class="issuer">${c.issuer}</span>
    <h3>${c.name}</h3>
    ${c.expires ? `<span class="credential-status">${today > c.expires ? "Expired" : "Expires"} ${c.expiryLabel}</span>` : ""}
    <span class="date">${c.date} · View credential ↗</span>
  </a>`).join("");
$("stat-certs").textContent = String(certifications.length);
$("cert-toggle").hidden = false;
$("cert-toggle").addEventListener("click", () => {
  const open = $("cert-list").classList.toggle("show-all");
  $("cert-toggle").textContent = open ? "Show fewer" : "Show all certifications";
  $("cert-toggle").setAttribute("aria-expanded", String(open));
});

$("skill-list").innerHTML = Object.entries(skills).map(([group, items]) => `
  <div class="skill-group"><h3>${group}</h3><ul class="skills">${items.map(s => `<li>${s}</li>`).join("")}</ul></div>`).join("");

$("edu-list").innerHTML = education.map(e => `
  <div class="edu-item"><span class="date">${e.period}</span><h3>${e.degree}</h3><p>${e.school} · ${e.detail}</p></div>`).join("");

$("year").textContent = String(new Date().getFullYear());

const root = document.documentElement;
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("theme");
} catch {
  savedTheme = null;
}
if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;

const syncThemeButton = () => {
  const light = root.dataset.theme === "light";
  $("theme-toggle").setAttribute("aria-pressed", String(light));
  $("theme-toggle").setAttribute("aria-label", `Switch to ${light ? "dark" : "light"} theme`);
};
syncThemeButton();
$("theme-toggle").hidden = false;
$("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  syncThemeButton();
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch {
    return;
  }
});

/** @param {boolean} open */
const setMenuOpen = open => {
  $("nav-links").classList.toggle("open", open);
  $("menu-toggle").setAttribute("aria-expanded", String(open));
  $("menu-toggle").textContent = open ? "Close" : "Menu";
};
$("menu-toggle").hidden = false;
$("menu-toggle").addEventListener("click", () => {
  setMenuOpen($("menu-toggle").getAttribute("aria-expanded") !== "true");
});
$("nav-links").addEventListener("click", event => {
  if (event.target instanceof Element && event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && $("menu-toggle").getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    $("menu-toggle").focus();
  }
});
document.addEventListener("click", event => {
  if (event.target instanceof Node && !document.querySelector(".nav")?.contains(event.target)) {
    setMenuOpen(false);
  }
});
document.querySelector(".nav")?.classList.add("navigation-ready");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}
git checkout devin/1791895678-editorial-redesign
git add .
git commit -m "Fix mobile arrow rendering with SVGs or CSS patch"
git push origin devin/1791895678-editorial-redesign
