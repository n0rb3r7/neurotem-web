(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.venobox').venobox();
    $('.owl-carousel').owlCarousel({
      items:5,
      merge:true,
      loop:true,
      margin:30,
      video:true,
      nav: true,
      navText: ["<i class='material-icons'>arrow_back</i>", "<i class='material-icons'>arrow_forward</i>"],
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
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space

