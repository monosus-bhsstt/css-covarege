$(function(){
	
	var getMenuArray = new Array("mrt","bsc","gde","cov","gde-2021","con");
	var setMenuArray = new Array("mrt_image","bsc_image","gde_image","cov_image","gde-2021_image","con_image");
	$.each(setMenuArray, function(i, record){
		if($("."+record).length > 0){
			var target = $(".global_navigation_sp #"+getMenuArray[i]).children(".toggle_menu");
			target.next().show();
			target.addClass("active");
			return false;
		}
	});
	
	
	gnNavigationActive();
	$(".global_navigation>ul>li").mouseenter(function(){
		$(".global_navigation").find("a.active").removeClass("active");
		$(this).find(".gn_over_contents").fadeIn(150);
		$(this).children("a").addClass("active");
	});
	$(".global_navigation>ul>li").mouseleave(function(){
		$(this).find(".gn_over_contents").fadeOut(150);
		gnNavigationActive();
	});
	
	$(".gn_left_contents li a").mouseover(function(){
		var dataContent = $(this).data("link-id");
		$("li[data-content-id=" + dataContent + "]").show();
	}).mouseout(function(){
		var dataContent = $(this).data("link-id");
		$("li[data-content-id=" + dataContent + "]").hide();
	});
	
	
	
	//スマ�?��?�ナビゲーション
	$("#hamburger").click(function(){
		if($(this).hasClass("ham_batsu")){
			$(this).removeClass("ham_batsu");
			$(".global_navigation_sp").fadeOut();
		}else{
			$(this).addClass("ham_batsu");
			$(".global_navigation_sp").fadeIn();
		}
	});
	var headSearchFlag = 0;
	$("#head_search").click(function(){
		if(headSearchFlag == 0){
			$(".search_navigation_sp").fadeIn();
			headSearchFlag = 1;
		}else{
			$(".search_navigation_sp").fadeOut();
			headSearchFlag = 0;
		}
	});
	
	$(".toggle_menu").click(function(){
		if($(this).hasClass("active")){
			$(this).next("ul").slideToggle();
			$(this).removeClass("active");
		}else{
			$(this).next("ul").slideToggle();
			$(this).addClass("active");
		}
	});
	
	$('#mitsumori_ok .conversion_orange').click(function(){
		if($('#mitsumori_ok').hasClass('active')){
			modalFunc('#mitsumoti_modal_with_confirm');
		}else{
			return false;
		}
	});
	
	
	//カンタン見積もりAB�?スト含�?挙動の変更
	//見積計算モジュールが存在する場合�??高さを調整する
	var mainFlag = 0;
	var $mainVisual = $(".main_visual");
	if(!$mainVisual.hasClass("pt_b") && !$mainVisual.hasClass("pt_c") && !$mainVisual.hasClass("pt_d")){
		if(!$mainVisual.hasClass("pt_e")){
			//繝代ち繝ｼ繝ｳA
			//$(".price_area").next().hide();
			//$(".price_area").next().next().hide();
			//$(".price_area").next().next().next().hide();
			//$(".mitsumoti_inner").css({height:"280px"});
			//$(".mitsumori_area").css({height:"302px"});
			mainFlag = 1;
		}else{
			//パターンE
			$(".top_conversion_e").hide();
		}
	}
	
	
	//カンタン見積も�?
	//$("#price").text(getEasyPrice($("#preficture").val(), $("#uwamono").val(), $("#menseki").val()));
	$("#preficture, #uwamono, #menseki").change(function(){
		var price = getEasyPrice($("#preficture").val(), $("#uwamono").val(), $("#menseki").val(),mainFlag);
		var priceY = separateNum(price["year"]);
		var priceM = separateNum(price["month"]);
		
		$("#price").html(separateNum(price["year"]));
		$("#price2").html(separateNum(price["month"]));
	});
	
	//バルーン非表示
	$(".balloon_close").click(function(){
		$(this).parent().fadeOut(200);
	});
	
	
	
});

function gnNavigationActive(){
	//GNのアク�?ィブ�?��?
	var bodyID = $("body").attr("id");
	var $rootGN = $(".global_navigation > ul");
	$rootGN.find("a.active").removeClass("active");
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
		case "gde-2021":
			$rootGN.children("li:nth-child(6)").children("a").addClass("active");
			break;
		case "con":
			$rootGN.children("li:nth-child(7)").children("a").addClass("active");
			break;
		case "faq":
			$rootGN.children("li:nth-child(8)").children("a").addClass("active");
			break;
		default:
			$rootGN.children("li:nth-child(1)").children("a").addClass("active");
			break;
	}
}

function getEasyPrice(pref, uwamono, menseki, mainFlag){

	var p = price_js();
	
	
	
	if(pref != "" && uwamono != "" && menseki != ""){
		var aSpeed = 280;
		$(".price_area").addClass("price_active");
		//$("#balloon_obj").fadeIn(aSpeed);
		$("#mitsumori_ok").addClass("active");
		if(mainFlag > 0){
			$(".price_area").next().fadeIn(aSpeed);
			//$(".price_area").next().next().fadeIn(aSpeed);
			//$(".price_area").next().next().next().fadeIn(aSpeed);
			//$(".mitsumoti_inner").css({height:"440px"});
			//$(".mitsumori_area").css({height:"462px"});
		}
		if($(".top_conversion_e").length > 0){
			$(".top_conversion_e").fadeIn(aSpeed);
		}
		var selectPY = p["pref_"+pref][uwamono]["m_"+menseki]["year"];
		var selectPM = p["pref_"+pref][uwamono]["m_"+menseki]["month"];
		var selectP = {};
		selectP["year"] = selectPY;
		selectP["month"] = selectPM;

		//sendAA
		try {
			s.clearVars();
			s.eVar147 = selectPY + ':' + selectPM + ':' + pref + ':' + uwamono + ':' + menseki;
			s.events = 'event106';
			void(s.t());
		} catch(e) {
			console.log(e);
		}
		
		return selectP;
	}else{
		$(".price_area").removeClass("price_active");
		//$("#balloon_obj").fadeOut(200);
		$("#mitsumori_ok").removeClass("active");
		var selectP = {};
		selectP["year"] = "<span class='nulls'></span>";
		selectP["month"] = "<span class='nulls'></span>";
		
		return selectP;
	}
	


/*
	if(uwamono == 0){
		//マンション
		var ma0_1 = 1634;		//火落�?
		var ma0_2 = 1034;		//火落�?
		var ma1_1 = 771;		//風雹雪
		var ma1_2 = 515;		//風雹雪
		var ma2_1 = 1389;		//雑危険
		var ma2_2 = 295;		//雑危険
		var ma3_1 = 96;			//盗難
		var ma3_2 = 680;		//盗難
		var mb0_1 = 789;		//水災
		var mb0_2 = 727;		//水災
		var mb1_1 = 342;		//臨費
		var mb1_2 = 235;		//臨費

		var mmb = 76;			//平米
		var amt = 1000.05;		//建物AMT
		var kamt = 700;			//家財AMT
		var Zkamt = 860;		//家財AMT
	}else{
		//戸建て
		var ma0_1 = 7406;		//火落�?
		var ma0_2 = 2872;		//火落�?
		var ma1_1 = 8728;		//風雹雪
		var ma1_2 = 3442;		//風雹雪
		var ma2_1 = 1332;		//雑危険
		var ma2_2 = 128;		//雑危険
		var ma3_1 = 148;		//盗難
		var ma3_2 = 967;		//盗難
		var mb0_1 = 8203;		//水災
		var mb0_2 = 5707;		//水災
		var mb1_1 = 2240;		//臨費
		var mb1_2 = 1229;		//臨費
		var mmb = 91;			//平米
		var amt = Math.floor(mmb*13.2);	//建物AMT
		var kamt = 1000;			//家財AMT
		var Zkamt = 700;		//家財AMT
	}

	//共�?
	var aa0_1 = Math.floor(amt * 10 * 0.5 * 2.03);
	var aa0_2 = Math.floor(kamt * 10 * 0.5 * 2.0315);
	var aa1_1 = Math.floor(amt * 10 * 0.5 * 2.25);
	var aa1_2 = Math.floor(kamt * 10 * 0.5 * 2.2515);
	var aa2_1 = Math.floor(aa0_1 * 1.2701);
	var aa2_2 = Math.floor(aa0_2 * 1.2701);
	var aa3_1 = Math.floor(aa1_1 * 2.4);
	var aa3_2 = Math.floor(aa1_2 * 2.04);

	var mc0_1 = 1158;		//臨費
	var mc0_2 = 1276;		//臨費


	//計�?
	var Zmmb = menseki;		//平米
	var Zamt = Zmmb * 13.2;	//建物AMT
		Zamt = Math.round(Zamt / 10)*10;
	

	var Zma0_1 = Math.floor(ma0_1 * Zamt / amt);		//火落�?
	var Zma0_2 = Math.floor(ma0_2 * Zkamt / kamt);		//火落�?
	var Zma1_1 = Math.floor(ma1_1 * Zamt / amt);		//風雹雪
	var Zma1_2 = Math.floor(ma1_2 * Zkamt / kamt);		//風雹雪
	var Zma2_1 = Math.floor(ma2_1 * Zamt / amt);		//雑危険
	var Zma2_2 = Math.floor(ma2_2 * Zkamt / kamt);		//雑危険
	var Zma3_1 = Math.floor(ma3_1 * Zamt / amt);		//盗難
	var Zma3_2 = Math.floor(ma3_2 * Zkamt / kamt);		//盗難
	var Zmb0_1 = Math.floor(mb0_1 * Zamt / amt);		//水災
	var Zmb0_2 = Math.floor(mb0_2 * Zkamt / kamt);		//水災
	var Zmb1_1 = Math.floor(mb1_1 * Zamt / amt);		//臨費
	var Zmb1_2 = Math.floor(mb1_2 * Zkamt / kamt);		//臨費

	var Zaa0_1 = Math.round(Zamt * 10 * 0.5 * 2.03 / 10) * 10;
	var Zaa0_2 = Math.round(Zkamt * 10 * 0.5 * 2.03 / 10) * 10;
	var Zaa1_1 = Math.round(Zamt * 10 * 0.5 * 2.25 / 10) * 10;
	var Zaa1_2 = Math.round(Zkamt * 10 * 0.5 * 2.25 / 10) * 10;
	var Zaa2_1 = Math.floor(Zaa0_1 * 1.27);
	var Zaa2_2 = Math.floor(Zaa0_2 * 1.27015);
	var Zaa3_1 = Math.floor(Zaa1_1 * 2.4);
	var Zaa3_2 = Math.floor(Zaa1_2 * 2.04);
	
	var ans = Zma0_1 + Zma0_2 + Zma1_1 + Zma1_2 + Zma2_1 + Zma2_2 + Zma3_1 + Zma3_2 + Zmb0_1 + Zmb0_2 + Zmb1_1 + Zmb1_2 + Zaa0_1 + Zaa0_2 + Zaa1_1 + Zaa1_2 + Zaa2_1 + Zaa2_2 + Zaa3_1 + Zaa3_2;
	
	if(pref != "" && uwamono != "" && menseki != ""){
		var aSpeed = 280;
		$("#balloon_obj").fadeIn(aSpeed);
		if(mainFlag > 0){
			$(".price_area").next().fadeIn(aSpeed);
			$(".price_area").next().next().fadeIn(aSpeed);
			$(".price_area").next().next().next().fadeIn(aSpeed);
			$(".mitsumoti_inner").css({height:"440px"});
			$(".mitsumori_area").css({height:"462px"});
		}
		if($(".top_conversion_e").length > 0){
			$(".top_conversion_e").fadeIn(aSpeed);
		}
		return separateNum(ans);
	}else{
		$("#balloon_obj").fadeOut(200);
		return "-";
	}
	
	*/
}
//数値にカンマを付けて返す?�?1000 = 1,000?�?
function separateNum(num){
	return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

$(function(){
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
});

//2018.08.20追�?�?モー�?ル周�?
function modalFunc(target){
	var wPos = $(window).height();
	$(target).css({"overflow-y":"scroll"});
	$("body").css({"overflow-y":"hidden"});
	$(target).fadeIn();
	$(".moda-close").click(function(){
		$(target).css({"overflow-y":"auto", "max-height":"initial", "max-height":"auto", "max-height":"none"});
		$("body").css({"overflow-y":"auto"});
		$(".modal").fadeOut();
	});
	
	$(".modal-switch").click(function(){
		$(this).parents(".modal").css({"display":"none"});
	});
}

//2019.02.04追�?�?モー�?ル?��枚化対�?
function modalFuncSecond(target){
	var wPos = $(window).height();
	if(wPos <= 618) {
		$(target+" .modal-inner").css('max-height',wPos + 'px');
		$(".moda-close_wrapper.bottom").css('bottom','-113px');
	} else {
		$(".moda-close_wrapper.bottom").css('bottom','20px');
	}
	var oPos = $(target+" .modal-inner:nth-of-type(2)").height();
	var pos = ( wPos - oPos ) / 2;
	$(target+" .modal-inner:nth-of-type(1)").fadeOut(function(){
		if(wPos > 618) {
			if($(window).width() <= 640) {
				$(".modal-inner").css('max-height','378px');
			} else {
				$(".modal-inner").css('max-height','249px');
			}
		}
		$(target+" .modal-inner:nth-of-type(2)").css('top',pos + "px");
		$(target+" .modal-inner:nth-of-type(2)").fadeIn();
	});
	
	$(".moda-close").click(function(){
		$(".modal").fadeOut();
		setTimeout(function(){
			$(target+" .modal-inner:nth-of-type(1)").css({"display":"block","overflow-y":"auto", "max-height":"initial", "max-height":"auto", "max-height":"none"});
			$(target+" .modal-inner:nth-of-type(2)").css({"display":"none","overflow-y":"auto", "max-height":"initial", "max-height":"auto", "max-height":"none"});
		},1000);
	});
}

//ヘッ�?ーをスクロールで消したり出したりす�?
/* !header -------------------------------------------------------------- */
$(function(){
	scrolllHeader();
	footerHidden();
	$(".header").css({
		transition: "0.3s"
	});
});

function footerHidden(){
	var bodyHeight = $("body,html").innerHeight();
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	if(winHeight > winWidth * 1.4){
		$(window).scroll(function(){
			if($(this).scrollTop() > $('.split_content').offset().top - (winHeight * .8)){
				$("#fix_con_box").fadeIn();
			}else{
				$("#fix_con_box").fadeOut();
			}
		});
	}else{
		$(window).scroll(function(){
			if($(this).scrollTop() >= bodyHeight - winHeight){
				$("#fix_con_box").fadeOut();
			}else{
				$("#fix_con_box").fadeIn();
			}
		});
	}
}
// function footerHidden(){
	// var bodyHeight = $("body,html").innerHeight();
	// var winHeight = $(window).height();
	// $(window).scroll(function(){
		// if($(this).scrollTop() >= bodyHeight - winHeight){
			// $("#fix_con_box").fadeOut();
		// }else{
			// $("#fix_con_box").fadeIn();
		// }
	// });
// }
function scrolllHeader() {
	var headerHeight = $(".header").height()+2;
	var startPos = 0;
	$(window).scroll(function(){
		var spmenu = $(".global_navigation_sp").css("display");
		var spsearch = $(".search_navigation_sp").css("display");
		
		if(spsearch.indexOf("none") != -1){
			if(spmenu.indexOf("none") != -1){
				var headerHeight = $(".header").height()+2;
				var currentPos = $(this).scrollTop();
				if( window.matchMedia('(max-width:640px)').matches ){
					if (currentPos > startPos) {
						if($(window).scrollTop() >= 25) {
							$(".header").css("top", "-" + headerHeight + "px");
						}
					}else {
						$(".header").css("top", 0 + "px");
					}
					startPos = currentPos;
				}
			}
		}
	});
};
/*
if($('body').hasClass('no-fixed-header')) {
	scrolllHeader = function() { return false;};
}
*/

$(function(){
	if($('.popup-modal').length > 0){
    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      closeOnBgClick: true,
      fixedContentPos: true,
      modal: true
    });
    $(document).on('click', '.popup-modal-dismiss, .popup-modal-dismiss-button', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
	}
});
