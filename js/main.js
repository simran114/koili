$(".banner-section .owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayhoverpause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".activites-slider .owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  margin: 50,
  dots: false,
  autoplay: true,
  autoplayhoverpause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Responsive Header
$(".navigation  ul > li.has-submenu").append('<i class="fa-solid fa-angle-down"></i>');

$(".burger-menu").on("click", function () {
  $("body").addClass("show-menu");
});

$(".overlay-header").on("click", function () {
  $("body").removeClass("show-menu");
});
