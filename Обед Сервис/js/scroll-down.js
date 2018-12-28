 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.nav').offset().top }, 'slow');
      return false;
    });
  });