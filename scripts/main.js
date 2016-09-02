//console.log('\'Allo \'Allo!');
$(document).ready(function () {



  $('.moblie-menu').on('click',function () {
    $('.blurBG').css('display','block');
    $('.header').addClass('header-active');
    setTimeout(function () {
      $('.blurBG').addClass('blurBG-active');
    },2);


    $('.link').on('click', function () {
      $('.link-son').css({
        'opacity': '0',
        'background': '#00bfff',
        '-webkit-transform': 'translate(-100%, -200%)',
        'transform': 'translate(-100%, -200%)'
      });
      $(this).find('.link-son').css({
        'opacity': '1',
        'background': '#00bfff',
        '-webkit-transform': 'translate(100%, -200%)',
        'transform': 'translate(100%, -200%)'
      });
    });


  })




$('.blurBG').on('click',function () {
  $('.blurBG').removeClass('blurBG-active');
  $('.link-son').css({
    'opacity': '0',
    'background': '#00bfff',
    '-webkit-transform': 'translate(-100%, -200%)',
    'transform': 'translate(-100%, -200%)'
  });
  setTimeout(function () {
    $('.blurBG').css('display','none');
  },400);
  $('.header').removeClass('header-active');
})







})
