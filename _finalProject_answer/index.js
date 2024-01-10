  // Trigger
  $('.trigger').on("click",function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').on("click",function(){
    $('.gnb, .trigger').removeClass('active')
  })
  
  // Sliding jQuery
  // $('.gnb a, .gototop').on("click",function(e){
  //   $.scrollTo(0, 800);
  // })
  
  // Header Scroll Change
  $(window).on("scroll",function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    }
    else {
      $('header, .gototop').removeClass('active')
    }    
  })


$('.myslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay : true, // 자동 스크롤 사용 여부
  autoplaySpeed : 1000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
  pauseOnHover : true, // 마우스 가져되면 멈춤 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
