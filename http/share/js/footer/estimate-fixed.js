jQuery(function ($) {
  // estimate-fixed
  var setHeight,checkHeight;
  if( $('.js-estimate-fixed') ) {
    var setHeight = $('.js-estimate-fixed').innerHeight();
    $('body').css('paddingBottom', setHeight+'px');
    $(window).resize(function() {
      var checkHeight = $('.js-estimate-fixed').innerHeight();
      if( setHeight !== checkHeight ) {
        $('body').css('paddingBottom', checkHeight+'px');
        var setHeight = checkHeight;
      }
    });
  }
});