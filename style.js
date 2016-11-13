/*Carousel */
$(document).ready(function() {
 
  $("#slider").owlCarousel({
 
      
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
      autoHeight : true,
      transitionStyle : "fade"
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});




/*POP OVER*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


/*MIX IT UP FILTER*/
$(function(){
  $('#Container').mixItUp();
});




