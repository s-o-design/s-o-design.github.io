$(function() {

  // トップへ戻る
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '10px' //右から10pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });

  // リスト展開
  $('.list-item').click(function(){
    var $innerList = $(this).find('.inner-list');
    if($innerList.hasClass('open')){
      $innerList.removeClass('open');
      $innerList.slideUp();
      $(this).find('span').text('+');
    }else{
      $innerList.addClass('open');
      $innerList.slideDown();
      $(this).find('span').text('-');
    }
  });
  // リスト子要素イベント打消し
  $('.inner-list li').click(function(event){
    event.stopPropagation();
  })

  // モーダル制御
  $('.open').click(function(){
    $('#mask').removeClass('hidden');
    $('#modal').removeClass('hidden');
  });
  $('#close').click(function(){
    $('#mask').addClass('hidden');
    $('#modal').addClass('hidden');
  });
  $('#mask').click(function(){
    $('#mask').addClass('hidden');
    $('#modal').addClass('hidden');
  });
  
});

$(function(){
  $(".btn-gnavi").on("click", function(){
      // ハンバーガーメニューの位置を設定
      var rightVal = 0;
      if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
      }

      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
  });
});