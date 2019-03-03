
$('.bunner').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
});

$('.wy_modus_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows:false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


$('.our_clients_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          