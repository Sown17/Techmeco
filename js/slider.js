$('.slick-banner').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  });
  $('.feedback-slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-left"></i></button>'
  });
  $('.partner-slick').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-left"></i></button>'
  });