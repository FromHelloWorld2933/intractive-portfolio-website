gsap.from(".hero-title span", {
  y: 120,
  opacity: 0,
  stagger: 0.15,
  duration: 1.2,
  ease: "power4.out",
});

gsap.from(".hero-sub", {
  y: 40,
  opacity: 0,
  delay: 0.6,
  duration: 1,
  ease: "power3.out",
});

document.querySelector("h1").addEventListener("mouseover", function () {
  gsap.to("h1", {
    textShadow: "0px 0px 5px white",
  });
});
document.querySelector("h1").addEventListener("mouseout", function () {
  gsap.to("h1", {
    textShadow: "0px 0px 0px white",
  });
});

const g = document.querySelector(".glow");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const s = window.scrollY / h;

  const y = s * (window.innerHeight - 1000);
  g.style.top = y + "px";

  const r = Math.floor(237 * (1 - s) + 56 * s);
  const gc = Math.floor(39 * (1 - s) + 189 * s);
  const b = Math.floor(54 * (1 - s) + 248 * s);

  g.style.background = `
    radial-gradient(
      circle,
      rgba(${r}, ${gc}, ${b}, 0.6) 0%,
      rgba(${r}, ${gc}, ${b}, 0.3) 40%,
      rgba(${r}, ${gc}, ${b}, 0.05) 65%,
      transparent 70%
    )
  `;
});
