// Typing effect
const text = "Ignoring me hurts more than punishment... but I just want your smile back 💕";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
window.onload = typeWriter;

// Button playfulness
const btn = document.getElementById("forgiveBtn");
btn.addEventListener("mouseover", () => {
  btn.style.transform = "translateX(40px)";
  setTimeout(() => btn.style.transform = "translateX(0)", 300);
});

btn.addEventListener("click", () => {
  document.getElementById("finalMsg").style.display = "block";
  btn.style.display = "none";
});
