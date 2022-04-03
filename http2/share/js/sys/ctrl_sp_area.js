spEventAttach();

function spEventAttach() {
	addEvent(window, "load", decisionDevice);
}

function decisionDevice(){
	if (sysp$(".spArea").size()>=1){
		var device = getCookie("device");
		if (device.length > 0) {
			showSPOnly(device == "SP");
		} else {
			sysp$.ajax({type:"Post", url:"/is_sp_device.php", dataType:"json",
				success:function(retVal){
					showSPOnly(retVal.type == 1);
				},
				error:function(){}
			});
		}
	}
}

function showSPOnly(flg){
	if(flg){
		sysp$(".spArea").addClass("showSpArea");
		sysp$(".spArea").removeClass("hideSpArea");
	}
}

function chgModeLink(hrefTo){
	changeModeCookie(isOpenSpPage());
	
	var args = retrieveGETParams();
	var reqParams = generateGetParams(args);
	if(reqParams !== null){
		hrefTo += ('?' + reqParams);
	}
	location.href = hrefTo;
}

function isOpenSpPage(){
	
	var pathName = document.URL.split(getDomain());

	pathName = pathName[1];

	if(pathName.search(RegExp("^/smp/.*")) !== -1){
		return true;
	}else{
		return false;
	}
}

function changeModeCookie(isSp){
	if(isSp == true){
		setCookie("flgPcView", 1);
	}else{
		delCookie("flgPcView");
	}
}