$(function () {
  const $btnBar = $('.btn-bar');
  const $mGnb = $('.m-gnb');
  const $btnClose = $('.btn-close');
  const $btnBrand = $('.btn-all');
  const $listBrand = $('.brand__list li');

  function init(){
    watchEvent();
    excuteSlide();
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
  function excuteSlide(){
    $paging = ['ERS 출동 서비스', '4월에도 할인', '토스페이 캐시백', '친구 초대 이벤트', '브리지스톤 할인', '리뷰 이벤트', '앱 설치 혜택', '피렐리 무상교환', '삼성화재 이벤트', '자동세차 100원'];

    const swiperBullets = new Swiper('.visual-slide', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + ($paging[index]) + "</span>";
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

  init();
});