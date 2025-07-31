/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.contains("left-0");



  // Toggle nav menu
  navMenu.classList.toggle("left-0");
  navMenu.classList.toggle("left-[-100%]");



  // Toggle icon
  if (isOpen) {
    hamburger.classList.remove("ri-close-large-line");
    hamburger.classList.add("ri-menu-4-line");
  } else {
    hamburger.classList.remove("ri-menu-4-line");
    hamburger.classList.add("ri-close-large-line");
  }
});



// Close menu when any nav-link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("left-0");
    navMenu.classList.add("left-[-100%]");

    hamburger.classList.remove("ri-close-large-line");
    hamburger.classList.add("ri-menu-4-line");
  });
});



/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("Scroll-up")

  if(this.scrollY >=250) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }
}

window.addEventListener("scroll",scrollUp)



/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("navbar")

  if(this.scrollY >=50) {
    header.classList.add("border-b", "border-yellow-500")
  } else {
    header.classList.remove("border-b", "border-yellow-500")
  }
}

window.addEventListener("scroll",scrollHeader)




/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  spaceBetween: 30,
  autoplay: {
    delay:3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll(".nav-link")
  
  let current = "home"

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach(item => {
    item.classList.remove("active")

    if(item.href.includes(current)){
      item.classList.add("active")

    }
  })
}

window.addEventListener("scroll", activeLink)


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true 
})

sr.reveal(".home_data, .about_top, .popular_top, .review_top , .review_swiper, .footer_icon, .footer_content, .copy_right")
sr.reveal(".home_image", {delay: 500, scale:0.5})

sr.reveal(".service_card , .popular_card", {interval: 100})

sr.reveal(".about_leaf", {delay: 1000, origin: "right"})
sr.reveal(".about_item_1-content, .about_item_2-img", {delay: 1000, origin: "right"})
sr.reveal(".about_item_2-content, .about_item_1-img", {delay: 1000, origin: "left"})

sr.reveal(".review_leaf, footer_floral", {delay: 1000, origin: "left"})