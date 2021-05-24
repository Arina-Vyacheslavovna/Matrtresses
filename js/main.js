$(document).ready(function(){
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
    });
});

$(function () {
  $(".product_wish_list").click(function () {
    $(".like").toggleClass("active");
  });
});

$(function () {
  $(".product_basket").click(function () {
    $(".basket").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".slide-one").owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 5000,
  autoplayHoverPause: true,
  slideTransition: "linear",
//   items: 1,
  nav: false,
  dots: false,  

  responsive: {
    0: {
      items:1
    },
    480: {
      items:1
    },
    900: {
      items: 2.5
    },
  }
});

$(".slide-two").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  slideTransition: "linear",
//   items: 1,
  nav: false,
  dots: true,  
  
  responsive: {
    0: {
      items:1
    },
    480: {
      items:1.2
    },
    900: {
      items: 3
    },
  }
});