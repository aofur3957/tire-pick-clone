$(function () {
  const $btnBar = $('.btn-bar');
  const $mGnb = $('.m-gnb');
  const $btnClose = $('.btn-close');

  // 모바일메뉴
  function showMGnb(){
    $mGnb.show();
  }
  function hideMGnb(){
    $mGnb.hide();
  }
  function watchMGnb(){
    $btnBar.on('click', showMGnb);
    $btnClose.on('click', hideMGnb);
  }
  watchMGnb();

  // 모바일 메뉴 반응형 제어
  function resizeMGnb(){
    $(window).on('resize', removeMGnb);
  }
  function removeMGnb(){
    const $width = $(window).width();
    if ($width > 768){
      hideMGnb();
    }
  }
  resizeMGnb();
});