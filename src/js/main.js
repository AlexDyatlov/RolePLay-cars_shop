$(function(){

  $('.car__items').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-arrows slider-arrows__right"><img src="images/icons/arrow-up.svg" alt=""></button>',
    nextArrow: '<button class="slider-arrows slider-arrows__left"><img src="images/icons/arrow-down.svg" alt=""></button>',
    infinite: false,
    vertical: true
  });

});

