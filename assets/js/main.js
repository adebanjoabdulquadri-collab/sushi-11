/*=============== SHOW & CLOSE MENU (Mobile Navigation) ===============*/
// Grab the menu container, the open button (toggle), and the close button from the HTML
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show: When the hamburger/toggle button is clicked, add the "show-menu" class to slide or show the menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden: When the close button is clicked, remove the "show-menu" class to hide the menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE (Close menu when clicking a link) ===============*/
// Grab all navigation links inside the menu
const navLink = document.querySelectorAll(".nav__link");

// Function that hides the menu when called
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
// Loop through every link so that when a user clicks any of them, the menu automatically closes
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER STYLES (Add background when scrolling) ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // If the user scrolls down 50 pixels or more, add the "bg-header" class (like a background color or shadow). Otherwise, remove it.
  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
// Listen for the window scroll event
window.addEventListener("scroll", scrollHeader);

/*=============== MENU TABS (Switching content categories) ===============*/
const menuButtons = document.querySelectorAll(".menu__button"),
  menuContents = document.querySelectorAll(".menu__content");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the target content section using the data-target attribute on the button
    const target = document.querySelector(button.dataset.target);

    // First, hide all menu contents and remove the active state from all buttons
    menuContents.forEach((content) => content.classList.remove("show-content"));
    menuButtons.forEach((btn) => btn.classList.remove("active-menu"));

    // Then, show the specific target content and highlight the clicked button
    target.classList.add("show-content");
    button.classList.add("active-menu");
  });
});

/*=============== SHOW SCROLL UP (Back to top button) ===============*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  // If the user scrolls down 350 pixels or more, show the scroll-up button. Otherwise, hide it.
  window.scrollY >= 350
    ? scrollUpBtn.classList.add("show-scroll")
    : scrollUpBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// When the user clicks the scroll-up button, smoothly scroll back to the very top of the page
document.getElementById("scroll-up").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/*=============== SCROLL SECTIONS ACTIVE LINK (Highlight nav items as you scroll) ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58, // Offset slightly to trigger early
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]",
      );

    if (!sectionsClass) return;

    // If the current scroll position is inside this section, highlight its corresponding nav link
    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? sectionsClass.classList.add("active-link")
      : sectionsClass.classList.remove("active-link");
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION (Animate elements into view) ===============*/
// Set up global settings for the ScrollReveal library (how animations start, how long they take, etc.)
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true, // Uncomment this if you want animations to repeat every time you scroll past them
});

// Apply the animation to specific classes with custom configurations
sr.reveal(".home__data, .about__data, .new__data, .contact__newsletter");
sr.reveal(".home__images, .about__images, .new__images", {
  origin: "bottom",
  delay: 500,
});
sr.reveal(".menu__buttons", { delay: 500 });
sr.reveal(".contact__content", { interval: 100 });
sr.reveal(".footer__container", { origin: "bottom", delay: 200 });
