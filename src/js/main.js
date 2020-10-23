$(function(){

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 5,
    mousewheel: true,
    direction: 'vertical',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1367: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      1921: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
    }
    
  });

  $('.color__item').on('click', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

});

