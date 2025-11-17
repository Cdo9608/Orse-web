const words = ["Creando", "Diseñando"];
let index = 0;

const rotating = document.getElementById("rotating-word");

setInterval(() => {
  rotating.style.transform = "translateY(20px)";
  rotating.style.opacity = "0";

  setTimeout(() => {
    index = (index + 1) % words.length;
    rotating.textContent = words[index];
    rotating.style.transform = "translateY(-20px)";
  }, 400);

  setTimeout(() => {
    rotating.style.opacity = "1";
    rotating.style.transform = "translateY(0)";
  }, 700);

}, 2500);
