$(function () {
  /**
  * Animation on scroll
  */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  // ================================================
  //  NAVBAR BEHAVIOR
  // ================================================
  $(window).on('scroll load', function () {
    if ($(window).scrollTop() > 5) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }

    if ($(window).scrollTop() > 1000) {
      $('#scrollTop').addClass('active');
    } else {
      $('#scrollTop').removeClass('active');
    }
  });


  // ================================================
  //  TESTIMONIALS SLIDER
  // ================================================
  $('.testimonials-slider').owlCarousel({
    items: 1,
    dots: true
  });

  // ================================================
  //  MODAL VIDEO
  // ================================================
  new ModalVideo('.js-modal-btn');

  // ================================================
  //  PLAY AUDIO
  // ================================================
  document.addEventListener('play', function (e) {
    var allAudios = document.getElementsByTagName('audio');
    for (var i = 0; i < allAudios.length; i++) {
      if (allAudios[i] != e.target) {
        allAudios[i].pause();
      }
    }
  }, true);


  // ================================================
  // Move to the top of the page
  // ================================================
  $('#scrollTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  // ================================================
  // Preventing URL update on navigation link click
  // ================================================
  $('.link-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });


  // ================================================
  // Scroll Spy
  // ================================================
  $('body').scrollspy({
    target: '#navbarSupportedContent',
    offset: 80
  });
});
