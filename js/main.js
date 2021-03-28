(function() {
  // ** gnb 실행 **
  toggleGnb();
  // ** 서브 실행 **
  subAni();

  function toggleGnb(){
    // gnb 열기
    $('#header .btn_menu').on('click', function() {
      $('header .gnb_wrap').addClass('on');
    });
    // gnb 닫기
    $('#header .btn_close').on('click', function() {
      $('header .gnb_wrap').removeClass('on');
        $('#header .search_wrap').removeClass('on');
      // gnb 초기화
      $('#header .gnb>li').removeClass('on');
      setTimeout(function() {
        $('#header .gnb .depth2').slideUp();
      }, 500);
    });
    // gnb 아코디언 동작
    $('#header .gnb>li>a').on('click', function() {
      $(this).parent().toggleClass('on').siblings().removeClass('on');
        $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').stop().slideUp();
    });
    $('#header .gnb .depth2 a').on('click', function() {
      $(this).addClass('on');
    });

    // 검색모달
    $('#header .btn_search').on('click', function(){
      $('#header .search_wrap').addClass('on')
    });
  };

  // 메인 슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 메인 하이라이트 섹션 슬라이더
  var highSlider = new Swiper('.high_slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
  });

  // news 섹션 스크롤
  if($('#container .main_news').length) {
    var posY = $('#container .main_news').offset().top - 500;
    $(window).scroll(function() {
       _scrollTop = $(this).scrollTop();
      if(_scrollTop >= posY) {
        $('#container .main_news .news_list').addClass('on');
      };
    }).trigger('scroll');
  };

  // 서브 lnb
  $('.lnb .btn_lnb').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('.list_lnb').stop().slideUp();
    } else {
      $(this).addClass('active').siblings('.list_lnb').stop().slideDown().siblings('.list_lnb_right').stop().slideUp().siblings('.btn_lnb_right').removeClass('active');
    };
  });
  $('.lnb .btn_lnb_right').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('.list_lnb_right').stop().slideUp();
    } else {
      $(this).addClass('active').siblings('.list_lnb_right').stop().slideDown().siblings('.list_lnb').stop().slideUp().siblings('.btn_lnb').removeClass('active');
    };
  });


  // 서브_회사 소개 페이지
  function subAni(){
    if($('.about_page .intro_wrap').length) {
      var introPos = $('.about_page .intro_wrap').offset().top - 600;
      var miPos = $('.about_page .mi_box').offset().top - 700;
      var buildfirstPos = $('.about_page .build_first').offset().top - 700;
      var buildsecondPos = $('.about_page .build_second').offset().top - 700;
      var buildthirdPos = $('.about_page .build_third').offset().top - 700;

      $(window).scroll(function() {
        var _scrollTop = $(this).scrollTop();
        var miTop = $(this).scrollTop();
        var buildTop = $(this).scrollTop();

        // 인사말 섹션
        if(_scrollTop >= introPos) {
          $('.about_page .intro_txt').addClass('on');
          $('.about_page .intro_visual_txt').addClass('on');
        };

        // mi 섹션
        if(miTop >= miPos) {
          $('.about_page .mi').addClass('on');
          $('.about_page .sig').addClass('on');
        };

        // 건축소개 섹션
        if(buildTop > buildfirstPos) {
          $('.about_page .build_first .build_txt_wrap').addClass('on');
          $('.about_page .build_first img').addClass('on');
        };
        if(buildTop > buildsecondPos) {
          $('.about_page .build_second .build_txt_wrap').addClass('on');
          $('.about_page .build_second img').addClass('on');
        };
        if(buildTop > buildthirdPos) {
          $('.about_page .build_third .build_txt_wrap').addClass('on');
          $('.about_page .build_third img').addClass('on');
        };
      }).trigger('scroll');
    };
  };

  // top 버튼
  $(window).scroll(function () {
    var btnTop = $(window).scrollTop();
    if (btnTop > 0) {
      $('.btn_top').fadeIn(300);
    } else {
      $('.btn_top').fadeOut(200);
    }
  });

  $('.btn_top a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({'scrollTop': 0});
  });

})();