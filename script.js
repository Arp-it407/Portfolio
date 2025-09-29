// Typing Effect
const text = ["Aspiring Data Engineer", "Python • SQL • AWS", "ETL • Data Pipelines • Visualization"];
let index = 0, charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else { setTimeout(erase, 2000); }
}
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 200);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) sec.classList.add("show");
  });
});

// Dark/Light Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  if(document.body.classList.contains("light")) {
    document.body.style.background = "#f8f9fa";
    document.body.style.color = "#111";
  } else {
    document.body.style.background = "linear-gradient(to right, #2c5364, #203a43, #0f2027)";
    document.body.style.color = "#f5f5f5";
  }
}

// Navbar Active Highlight
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 150;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
