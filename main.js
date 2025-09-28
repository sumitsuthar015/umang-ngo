const showBtn = document.getElementById("showFormBtn");
const form = document.getElementById("contactForm");
const overlay = document.getElementById("contactFormOverlay");
const closeBtn = document.getElementById("closeFormBtn");

// Prevent jump on Contact Us link and toggle popup
showBtn.onclick = function (e) {
  e.preventDefault(); // Prevent default anchor jump

  const isVisible = form.style.display === "block";
  form.style.display = isVisible ? "none" : "block";
  overlay.style.display = isVisible ? "none" : "block";
};

// Close popup on close button
closeBtn.onclick = function () {
  form.style.display = "none";
  overlay.style.display = "none";
};

// Close popup on overlay click
overlay.onclick = function () {
  form.style.display = "none";
  overlay.style.display = "none";
};

// Initialize EmailJS (replace key with your own)
(function () {
  emailjs.init("cZN2EFBTJxqDEaSUF");
})();

// Submit handler with debug logs and preventDefault
document.getElementById("contactFormEl").addEventListener("submit", function (e) {
  console.log("Submit event fired");

  e.preventDefault(); // MUST be first to prevent page jump

  console.log("Default prevented");

  emailjs.sendForm("service_3ucyoj4", "template_5fo8csq", this)
    .then(function () {
      alert("✅ Message sent successfully!");
      document.getElementById("contactFormEl").reset();
      form.style.display = "none";
      overlay.style.display = "none";
    }, function (error) {
      alert("❌ Failed to send message: " + JSON.stringify(error));
    });
});







// main section


const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slides > div');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = (i + slideItems.length) % slideItems.length;
  slides.style.transform = `translateX(${-index * 100}vw)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(index + 1), 5000);







