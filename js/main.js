$(function () {
  const $btnBar = $('.btn-bar');
  const $mGnb = $('.m-gnb');
  const $btnClose = $('.btn-close');
  const $btnBrand = $('.btn-all');
  const $listBrand = $('.brand__list li');

  function init(){
    watchEvent();
    excuteMainSlide();
    excuteReviewSlide();
  }

  // 이벤트 감지
  function watchEvent(){
    $btnBar.on('click', showMGnb);
    $btnClose.on('click', hideMGnb);
    $btnBrand.on('click', showBrand);
    $btnBrand.on('click', activeBtnBrand);
    $(window).on('resize', removeMGnb);
  }

  // 모바일메뉴
  function showMGnb(){
    $mGnb.show();
  }
  function hideMGnb(){
    $mGnb.hide();
  }

  // 모바일 메뉴 반응형 제어
  function removeMGnb(){
    const $width = $(window).width();
    if ($width > 768){
      hideMGnb();
    }
  }

  //슬라이드 
  function excuteMainSlide(){
    $paging = ['OH월에도 할인', '엔진오일 런칭 혜택', '체험단 모집', '타이어펑크수리 무료', '토스페이 캐시백', '친구 초대 이벤트', '앱 설치 혜택'];

    const swiperBullets = new Swiper('.visual-slide', {
      loop: true,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + ($paging[index]) + '</span>';
        }
      }
    })

    const swiperFraction = new Swiper('.visual-slide', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-mobile',
        type: 'fraction',
      }
    })

    swiperBullets.controller.control = swiperFraction;
  };

  // 브랜드
  function showBrand(){
    $listBrand.each(function(idx, item){
      if(idx > 7) $(item).toggleClass('on');
    });
  }

  function activeBtnBrand(){
    $btnBrand.toggleClass('active');
  }

  // 리뷰
  function excuteReviewSlide(){
    const swiper = new Swiper('.review-slide', {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      },
      on: {
        afterInit: function (swiper){
          const $btnPrev = $(swiper.navigation.prevEl);
          $btnPrev.addClass('off');
        },
        activeIndexChange: function (swiper){
          const length = swiper.slides.length - 3;
          const activeIndex = swiper.activeIndex;
          const $btnPrev = $(swiper.navigation.prevEl);
          const $btnNext = $(swiper.navigation.nextEl);
          
          if (activeIndex === 0) {
            $btnPrev.addClass('off');
            $btnNext.removeClass('off');
          }
          else if (activeIndex === length) {
            $btnNext.addClass('off');
            $btnPrev.removeClass('off');
          }
          else {
            $btnPrev.removeClass('off');
            $btnNext.removeClass('off');
          }
        }
      }
    }); 
  }

  init();
});