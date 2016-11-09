/*Carousel arrow*/
var width = $('div.item.active > img').width();

$('#myCarousel').width(width);

$('#myCarousel').on('slide.bs.carousel', function () {
    var width = $('div.item.active > img').width();
    $('#myCarousel').width(width);
});


/*POP OVER*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


/*MIX IT UP FILTER*/
$(function(){
  $('#Container').mixItUp();
});




