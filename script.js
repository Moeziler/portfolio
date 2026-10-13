const projects = [
  { title: "Project One", description: "Short description of what it does, the problem it solves, and your role.",
    tags: ["React", "Node.js", "MongoDB"], image: "https://picsum.photos/seed/p1/600/340", live: "#", code: "#" },
  { title: "Project Two", description: "Another project. Mention a measurable result if you can (users, speed, etc.).",
    tags: ["Python", "Flask", "PostgreSQL"], image: "https://picsum.photos/seed/p2/600/340", live: "#", code: "#" },
  { title: "Project Three", description: "A fun side project or open-source contribution you're proud of.",
    tags: ["JavaScript", "CSS", "API"], image: "https://picsum.photos/seed/p3/600/340", live: "#", code: "#" },
];

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "Git", "Figma"];

document.getElementById("project-list").innerHTML = projects.map(p => `
  <article class="card">
    <div class="thumb" style="background-image:url('${p.image}')"></div>
    <div class="body">
      <h4>${p.title}</h4>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="links">
        <a href="${p.live}" target="_blank" rel="noopener">Live ↗</a>
        <a href="${p.code}" target="_blank" rel="noopener">Code ↗</a>
      </div>
    </div>
  </article>`).join("");

document.getElementById("skill-list").innerHTML = skills.map(s => `<li>${s}</li>`).join("");
document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;
document.getElementById("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", root.dataset.theme);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
