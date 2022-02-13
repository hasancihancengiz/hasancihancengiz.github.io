$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        dots:false
        
    });
    $(".hamburger").click(function(){
        $(".menu").slideToggle();
        $(".hamburger").toggleClass("open");
        
        

      });
  });