var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*==== window scroll ====*/
window.onscroll = () => {

    if (window.scrollY > 0){
      document.querySelector('.header .bottom').classList.add('scroll');
    }else{
      document.querySelector('.header .bottom').classList.remove('scroll');
    }
}

/*==== navigation toggle bar ====*/
let closeBtn = document.querySelector('#closeBtn');
let menuBtn = document.querySelector('#menuBar');
let navLink = document.querySelector('.navLinks');

menuBtn.onclick = () => {
    navLink.classList.add('active');
}

closeBtn.onclick = () => {
    navLink.classList.remove('active');
}

/*==== service section start ====*/
var swiper = new Swiper(".myServices", {

  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
  }
});

/*==== customer section start ====*/

/*==== service section start ====*/
var swiper = new Swiper(".MyCustomer", {

  centeredSlides: true,
  loop:true,
  spaceBetween: 40,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
  }
});