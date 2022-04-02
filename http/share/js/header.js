/*
* header.js
*
*/
//ヘッダー用関数
var global_HEADER = global_HEADER || {};
/*
* document.ready.functions
*
*/
$(function() {
  global_HEADER.scrollHeader();

  global_HEADER.smMenuAccordion();

  global_HEADER.smMenuButton();

  global_HEADER.serviceBalloon();

  if ($('body').hasClass('no-fixed-header')) {
    global_HEADER.scrolllHeader = function () {
      return false;
    };
  }

  global_HEADER.smSearchButton();

  global_HEADER.gnNavigationActivePc();

  global_HEADER.gnNavigationActiveSp();

  global_HEADER.gnHoverAction();

});
/*
* window.onload.functions
*
*/
$(window).load(function(){
  global_HEADER.topicPath();
});
/* ---
 service_balloon
   --- */
global_HEADER.serviceBalloon = function(){
  var itemDrowFlag = 0;
  $(".service_balloon_trigger").click(function(){
    if(itemDrowFlag == 0){
      var pos = $(this).offset().left;
      $("#service_balloon").css("left", pos + "px").fadeIn(200);
      itemDrowFlag = 1;
    }else{
      var pos = $(this).offset().left;
      $("#service_balloon").css("left", pos + "px").fadeOut(200);
      itemDrowFlag = 0;
    }
    return false;
  });
  $('#service_balloon').find('a').each(function () {
    if($(this).attr('href') === GL_NV.currentCategory) {
      $(this).find('span').attr('class', $(this).find('span').attr('class') + '_on');
    }
  });
  $('.container').on('click', function () {
    if ($('#service_balloon').is(':visible')) {
      $('.service_balloon_trigger').trigger('click');
    } else {
      event.stopPropagation();
    }
  });
};

/* ---
 topicpath
   --- */
global_HEADER.topicPath = function(){
  var obj = $('#js-topicpath').width();
  $('.box-topicpath').scrollLeft(obj);
};

/* ---
 smMenuButton
   --- */
global_HEADER.smMenuButton = function(){
  $("#hamburger").click(function(){
    if($("body").hasClass("has-sp-menu")){
      $("body").removeClass("has-sp-menu");
      $(".global_navigation_sp").fadeOut();
    }else{
      $("body").addClass("has-sp-menu");
      $(".global_navigation_sp").fadeIn();
    }
    return false;
  });
};
/* ---
 smSearchButton
   --- */
global_HEADER.smSearchButton = function() {
  //スマホのナビゲーション
  var headSearchFlag = 0;
  $("#head_search").click(function(){
    if(headSearchFlag == 0){
      $(".search_navigation_sp").fadeIn();
      $("body").addClass('has-sp-search');
      headSearchFlag = 1;
    }else{
      $(".search_navigation_sp").fadeOut();
      $("body").removeClass('has-sp-search');
      headSearchFlag = 0;
    }
  });

};
/* ---
 scrollHeader
   --- */
global_HEADER.scrollHeader = function(){
  $(window).on('load',function (){
    var startPos = 0;
    $(window).scroll(function(){
      if($('body').hasClass('has-sp-menu')) { return; }
      if($('body').hasClass('has-sp-search')) { return; }
      var headerHeight = $(".header").outerHeight()+2;
      var currentPos = $(this).scrollTop();
      if( window.matchMedia('(max-width:640px)').matches ){
        if (currentPos > startPos) { //下にスクロールする場合
          if($(window).scrollTop() >= 25) {
            $(".header").css("top", "-" + headerHeight + "px");
            $('.header-pagetext').hide();
          }
        } else { //上にスクロールする場合
          $(".header").css("top", 0 + "px");
        }
        startPos = currentPos;
      }
    });
  });
};

global_HEADER.smMenuAccordion = function(){
  $('[data-js-view = "smHeaderNav-accordion"]').on('click', function(){
    if($(this).hasClass("active")){
      $(this).next("ul").slideToggle();
      $(this).removeClass("active");
    }else{
      $(this).next("ul").slideToggle();
      $(this).addClass("active");
    }
  });
};

global_HEADER.gnNavigationActivePc = function(){
  //GNのアクティブ処理
  var bodyID = $("body").attr("id");
  var $rootGN = $(".global_navigation > ul");
  $rootGN.find("a.active").removeClass("active");
  if(GL_NV.currentCategory === "/auto/") {
    switch(bodyID){
      case "mrt":
        $rootGN.children("li:nth-child(2)").children("a").addClass("active");
        break;
      case "bsc":
        $rootGN.children("li:nth-child(3)").children("a").addClass("active");
        break;
      case "gde":
        $rootGN.children("li:nth-child(4)").children("a").addClass("active");
        break;
      case "cov":
        $rootGN.children("li:nth-child(5)").children("a").addClass("active");
        break;
      case "con":
        $rootGN.children("li:nth-child(6)").children("a").addClass("active");
        break;
      case "faq":
        $rootGN.children("li:nth-child(7)").children("a").addClass("active");
        break;
      default:
        $rootGN.children("li:nth-child(1)").children("a").addClass("active");
        break;
    }
  }
  else if(GL_NV.currentCategory === "/md/") {
    switch(bodyID){
      case "mrt":
        $rootGN.children("li:nth-child(2)").children("a").addClass("active");
        break;
      case "cvr":
        $rootGN.find('a[href*="cvr"]').addClass("active");
        break;
      case "cse":
        $rootGN.find('a[href*="cse"]').addClass("active");
        break;
      case "rcm":
        $rootGN.find('a[href*="rcm"]').addClass("active");
        break;
      case "cla":
        $rootGN.find('li:nth-child(4)').children("a").addClass("active");
        break;
      case "gde":
        $rootGN.find('li:nth-child(5)').children("a").addClass("active");
        break;
      case "sim":
        $rootGN.find('li:nth-child(6)').children("a").addClass("active");
        break;
      case "faq":
        $rootGN.find('a[href*="qa000"]').addClass("active");
        break;
      default:
        $rootGN.children("li:nth-child(1)").children("a").addClass("active");
        break;
    }
  }
  else if(GL_NV.currentCategory === "/fire/") {
    switch(bodyID){
      case "mrt":
        $rootGN.children("li:nth-child(2)").children("a").addClass("active");
        break;
      case "bsc":
        $rootGN.children("li:nth-child(3)").children("a").addClass("active");
        break;
      case "gde":
        $rootGN.children("li:nth-child(4)").children("a").addClass("active");
        break;
      case "cov":
        $rootGN.children("li:nth-child(5)").children("a").addClass("active");
        break;
      case "con":
        $rootGN.children("li:nth-child(6)").children("a").addClass("active");
        break;
      case "faq":
        $rootGN.children("li:nth-child(7)").children("a").addClass("active");
        break;
      default:
        $rootGN.children("li:nth-child(1)").children("a").addClass("active");
        break;
    }
  }
  else {
    $rootGN.children("li:nth-child(1)").children("a").addClass("active");
  }
};

global_HEADER.gnHoverAction = function(){
  $(".global_navigation>ul>li").mouseenter(function(){
    $(".global_navigation").find("a.active").removeClass("active");
    $(this).find(".gn_over_contents").css('display', 'block');
    $(this).children("a").addClass("active");
  });
  $(".global_navigation>ul>li").mouseleave(function(){
    $(this).find(".gn_over_contents").css('display', 'none');
    global_HEADER.gnNavigationActivePc();
  });

  $(".gn_left_contents li a").mouseover(function(){
    var dataContent = $(this).data("link-id");
    $("li[data-content-id=" + dataContent + "]").show();
  }).mouseout(function(){
    var dataContent = $(this).data("link-id");
    $("li[data-content-id=" + dataContent + "]").hide();
  });
};

global_HEADER.gnNavigationActiveSp = function(){
  var getMenuArray = new Array("mrt","bsc","gde","cov","con");
  var setMenuArray = new Array("mrt_image","bsc_image","gde_image","cov_image","con_image");
  $.each(setMenuArray, function(i, record){
    if($("."+record).length > 0){
      var target = $(".global_navigation_sp #"+getMenuArray[i]).children(".toggle_menu");
      target.next().show();
      target.addClass("active");
      return false;
    }
  });
};
