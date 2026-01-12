let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2000);

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function () {
    const target = this.dataset.target;
    scrollSmooth(target);
  });
});

document.querySelector(".btn-request").addEventListener("click", function () {
  scrollSmooth("#order");
});

function scrollSmooth(selector) {
  const target = document.querySelector(selector);
  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + start - 90;
  const duration = 700;

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const time = currentTime - startTime;
    const progress = Math.min(time / duration, 1);

    // ease in out
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, start + (end - start) * ease);

    if (time < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const occasion = document.getElementById("occasion").value;
  const message = document.getElementById("message").value;

  if (!name || !phone || !email || !occasion || !message) {
    return;
  }

  // Reset fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("occasion").value = "";
  document.getElementById("message").value = "";

  // Show popup
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}