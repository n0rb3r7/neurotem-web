(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.owl-carousel').owlCarousel({
      items:3,
      merge:true,
      loop:true,
      margin:30,
      video:true,
      lazyLoad:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:8
          }
      }
  })
  }); // end of document ready
})(jQuery); // end of jQuery name space
