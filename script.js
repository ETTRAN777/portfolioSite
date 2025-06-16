// Highlight nav link based on scroll position
const sections = document.querySelectorAll("section[id], .contact-section");
sections.add(document.getElementById("resume"));
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  let found = false;
  sections.forEach((sec, idx) => {
    const top = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(sec.id)) {
          link.classList.add("active");
        }
      });
      found = true;
    }
  });
  // If at the bottom of the page, highlight Contact
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes("contact")) {
        link.classList.add("active");
      }
    });
  }
});

// Typed.js animation
const typed = new Typed('#typed-text', {
  strings: ['Ethan Tran', 'a Developer', 'a Designer', 'an Innovator'],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 2000,
  startDelay: 500,
  loop: true
});

// Swiper background
new Swiper('.background-slider', {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 1500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  parallax: true,
});

