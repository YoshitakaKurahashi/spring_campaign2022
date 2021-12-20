jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  var topBtn = $('.pagetop');
  topBtn.hide();
  var toReserve = $('.toreserve');
  toReserve.hide();
  var topBtnSP = $('.pagetop-sp');
  topBtn.hide();
  var toReserveSP = $('.toreserve-sp');
  toReserve.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
      toReserve.fadeIn();
      topBtnSP.fadeIn();
      toReserveSP.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
      toReserve.fadeOut();
      topBtnSP.fadeOut();
      toReserveSP.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // tab切り替え
  $(function(){
    $('.js-tab-trigger').on('click', function (e) {
        // すべてのタブメニューの'is-active'クラスを削除
        $('.js-tab-trigger').removeClass('is-active');
        // クリックしたタブメニューに'is-active'クラスを追加
        $(this).addClass('is-active');

        // ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
        let currentContent = $('#' + $(this).data('id'));

        // タブコンテンツを非アクティブにする
        $('.js-tab-target').removeClass('is-active');

        // 対象コンテンツ(指定したIDの要素があったら)を表示させる
        if (currentContent.length) {
            currentContent.addClass('is-active');
        }
    });
  });

  // スワイパー1
  var sliderThumbnail = new Swiper('.slider-thumbnail01', {
    slidesPerView: 5,
    spaceBetween: 17,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  //スライダー
  var slider = new Swiper('.slider01', {
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbnail
    }
  });

  // スワイパー2
  var sliderThumbnail = new Swiper('.slider-thumbnail02', {
    slidesPerView: 5,
    spaceBetween: 17,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  //スライダー
  var slider = new Swiper('.slider02', {
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbnail
    }
  });

  // スワイパー3
  var sliderThumbnail = new Swiper('.slider-thumbnail03', {
    slidesPerView: 5,
    spaceBetween: 17,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  //スライダー
  var slider = new Swiper('.slider03', {
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbnail
    }
  });

  // スワイパー4
  var sliderThumbnail = new Swiper('.slider-thumbnail04', {
    slidesPerView: 5,
    spaceBetween: 17,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  //スライダー
  var slider = new Swiper('.slider04', {
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbnail
    }
  });

  // スワイパー5
  var sliderThumbnail = new Swiper('.slider-thumbnail05', {
    slidesPerView: 5,
    spaceBetween: 17,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  //スライダー
  var slider = new Swiper('.slider05', {
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbnail
    }
  });

  $(function(){
    $('select').on('change', function(){
        if($(this).val() == "placeholder"){
            $(this).css('color','#D3D3D3')
        } else {
            $(this).css('color','#707070')
        }
    });
});

});