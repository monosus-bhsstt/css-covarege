var wwwDomain	= "www.sonysonpo.co.jp";
var sHalfNum	= "0123456789";
var sHalfEng	= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sHalfKana	= "±\²\³\´\µ\¶\·\¸\¹\º\»\¼\½\¾\¿\À\Á\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ë\Ì\Í\Î\Ï\Ð\Ñ\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\Û\Ü\¦\Ý\§\¨\©\ª\«\¬\­\®\¯\Þ\ß\°\¥\¡\¤\¢\£";
var sHalfOther1	= "-.@!#$%^&*?'+''/'_";
var gstrAllowHNum	= "1234567890";
var gstrAllowHAlp	= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var gstrAllowHAlNum	= "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var wk_spritkbn	= "";
var wk_TestDir	= "";
var rewriteCookies = new Array("CampId", "LpCd", "MbCd", "CampUseLmt", "Route", "MbCdType","MbCdDispType", "EstSaveLmt", "RouteClass");
var deprecatedCookies = new Array("BCookie", "SNK", "Refere", "strEntranceID");
var ocKey = "oc";

cookieEventAttach();
function cookieEventAttach() {
	if(getContextFilePath(document.URL).match(/^\/SONYGP\//)){
		setCampCookie_sonygp();
	}else{
		setCampCookie();
	}
	fnSetUID();
	fnChkURL();
	replaceOc();
}
var winStyle = new Array();
winStyle['win800']			= 'toolbar=1,menubar=1,location=1,directories=0,width=800,height=600,status=1,scrollbars=1,resizable=1';
winStyle['win600']			= 'toolbar=0,menubar=0,location=0,directories=0,width=600,height=580,status=1,scrollbars=1,resizable=1';
winStyle['win610']			= 'toolbar=0,menubar=0,location=0,directories=0,width=610,height=600,status=1,scrollbars=1,resizable=1';
winStyle['win780']			= 'toolbar=1,menubar=1,location=1,directories=0,width=780,height=560,status=1,scrollbars=1,resizable=1';
winStyle['BRGwinNew610']	= 'toolbar=0,menubar=0,location=0,directories=0,width=610,height=560,status=1,scrollbars=1,resizable=1';
winStyle['win200']			= 'toolbar=0,menubar=0,location=0,directories=0,width=200,height=450,status=1,scrollbars=1,resizable=1';
winStyle['win550']			= 'toolbar=0,menubar=0,location=0,directories=0,width=590,height=600,status=1,scrollbars=1,resizable=1';
winStyle['openNewWindow']	= 'toolbar=1,menubar=1,location=1,directories=1,width=780,height=575,status=1,scrollbars=1,resizable=1';
winStyle['winFAQ_thanks']	= 'toolbar=0,menubar=0,location=0,directories=0,width=590,height=400,status=1,scrollbars=1,resizable=1';
winStyle['winNew1']			= 'toolbar=0,menubar=0,location=0,directories=0,width=795,height=520,status=1,scrollbars=1,resizable=1';
winStyle['winNew540']		= 'toolbar=0,menubar=0,location=0,directories=0,width=520,height=600,status=1,scrollbars=1,resizable=1';
winStyle['winForm']			= 'toolbar=0,menubar=0,location=0,directories=0,width=640,height=675,top=1,left=1,status=1,scrollbars=1,resizable=1';
winStyle['winFAQ_800x600']	= 'toolbar=0,menubar=0,location=0,directories=0,width=800,height=600,top=0,left=0,status=1,scrollbars=1,resizable=1';
winStyle['winFAQ']			= 'toolbar=0,menubar=0,location=0,directories=0,width=590,height=520,status=1,scrollbars=1,resizable=1';
winStyle['fnSubmit2']		= 'toolbar=1,menubar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1';
function win800(theURL,winName){winOpenAction(theURL, winName, winStyle['win800']);}
function win600(theURL,winName){winOpenAction(theURL, winName, winStyle['win600']);}
function win780(theURL,winName){winOpenAction(theURL, winName, winStyle['win780']);}
function win200(theURL,winName){winOpenAction(theURL, winName, winStyle['win200']);}
function win550(theURL,winName){winOpenAction(theURL, winName, winStyle['win550']);}
function winNew1(theURL,winName){winOpenAction(theURL, winName, winStyle['winNew1']);}
function openNewWindow(theURL,winName){winOpenAction(theURL, winName, winStyle['openNewWindow']);}
function winNew540(theURL,winName){	winOpenAction(theURL, winName, winStyle['winNew540']);}
function MM_openBrWindow(theURL,winName,features){window.open(theURL,winName,features);}
function winFAQ_800x600(theURL){winOpenAction(theURL, 'winFAQ_800x600', winStyle['winFAQ_800x600']);}
function win610(theURL,winName){
	var retWin = winOpenAction(theURL, winName, winStyle['win610']);
	retWin.window.focus();
}
function BRGwinNew610(theURL,winName){
	self.focus();
	winOpenAction(theURL, "winBrgCamp2", winStyle['BRGwinNew610']);
}
function winFAQ(theURL,Contract,winName){
	var wk_url = "";
	var strBackURL = document.referrer;
	if(strBackURL.indexOf("www.nttif",0) > 0 ){
		wk_url = "https://"+wwwDomain;
	}else if(strBackURL.indexOf("www1.nttif",0) > 0 ){
		wk_url = "https://"+wwwDomain;
	}
	if(theURL.indexOf("#",0) > 0 ){
		theURL = wk_url + theURL;
	}else{
		theURL = wk_url + theURL + '?strISCheckFlg=1&strContract=' + Contract;
	}
	winOpenAction(theURL, winName, winStyle['winFAQ']);
}
function MM_preloadImages(){
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function winOpenSslon(strRd, route){
	route = route || '';
	beginProcAction('strRd', strRd, route, '', 'snkwin01');
}
function MainCtrl(theURL){
	if(!window.opener || window.opener.closed){
		winOpenAction(theURL);
	}else{ 
		window.opener.location.href = theURL;
		opener.focus();
	}
}
function winOpenBang(patarn,inetID){
	var theURL;
	theURL = '/redirect/proc/?strRd=' + patarn;
	theURL = theURL + "&strInetID=" + inetID;
	window.open(theURL, 'snkwin01');
}
function winOpenSure(patarn){winOpenAction('/redirect/proc/?strRd=' + patarn, '_self');}
function winOpenSureSim(){
	var theURL;
	var lintLeft,lintTop;
	var lstrOption;
	theURL = 'https://'+wwwDomain+'/redirect/proc/?PageId=PSR00010';
	lintLeft = screen.availLeft;
	lintTop = screen.availTop;
	lstrOption = "width=980,height=700,";
	lstrOption = lstrOption + "left=" + lintLeft + ",";
	lstrOption = lstrOption + "top=" + lintTop + ",";
	lstrOption = lstrOption + "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes";
	var retWin = winOpenAction(theURL, 'subSim', lstrOption);
	retWin.focus();
}
function arrayToUpper(arg){
	var upper = new Array();
	for (var key in arg) {
		upper[key] = arg[key].toString().toUpperCase();
	}
	return upper;
}
function replaceCookies(){
	var tk;
	var tv;
	var flg;
	var ucKey;
	var ucTKey;
	var ucRwt = arrayToUpper(rewriteCookies);
	var cookies = GetCookies();
	for(var i = 0; i < rewriteCookies.length; i++){
		tk = rewriteCookies[i];
		tv = getCookie(tk);
		flg = false;
		for (var key in cookies) {
			ucKey = key.toUpperCase();
			ucTKey = tk.toUpperCase();
			if ((ucKey == ucTKey) && (fnIndexOf(ucRwt, ucKey) != -1)){
				delCookie(key);
				flg = true;
			}
		}
		if (flg && tv) {
			setCookie(tk, tv);
		}
	}
}
function setCampCookie(){
	var qCampID;
	var cCampID;
	var qRouteClass;
	var ucKey;
	var ucRwt = arrayToUpper(rewriteCookies);
	var ucDpr = arrayToUpper(deprecatedCookies);
	var ucDlt = ucRwt.concat(ucDpr);
	var queries = retrieveGETParams();
	var cookies = GetCookies();
	qCampID = queries["Camp_ID"] || "";
	qRouteClass = queries["RouteClass"] || "";
	if (qCampID != "") {
		for (var key in cookies) {
			ucKey = key.toUpperCase();
			if (fnIndexOf(ucDlt, ucKey) != -1){delCookie(key);}
		}
		setCookie("CampId", qCampID);
		if (qRouteClass != "") {setCookie("RouteClass", qRouteClass);}
		return;
	} else {
		cCampID = getCookie("CampId");
		if (cCampID == "") {
			for (var key in cookies) {
				ucKey = key.toUpperCase();
				if (fnIndexOf(ucDlt, ucKey) != -1){delCookie(key);}
			}
			setCookie("CampId", getDirectCampId());
			return;
		}
	}
	replaceCookies();
}
function setCampCookie_sonygp(){
	var ucKey;
	var cCampID = getCookie("CampId");
	var cRoute = getCookie("Route");
	var ucRwt = arrayToUpper(rewriteCookies);
	var ucDpr = arrayToUpper(deprecatedCookies);
	var ucDlt = ucRwt.concat(ucDpr);
	var cookies = GetCookies();
	if(cCampID == "" || cRoute != "1"){
		for (var key in cookies) {
			ucKey = key.toUpperCase();
			if (fnIndexOf(ucDlt, ucKey) != -1){delCookie(key);}
		}
		setCookie("CampId", "S99WEB");
		setCookie("Route", "1");
		return;
	}
	replaceCookies();
}
function getCookie(argKey, strictOption) {
	var cookies = GetCookies();
	if (cookies[argKey]) {
		return cookies[argKey];
	} else {
		if (!strictOption) {
			for (var key in cookies) {
				if (key.toUpperCase() == argKey.toUpperCase()) {
					if (cookies[key]) return cookies[key];
				}
			}
		}
		return "";
	}
}
function setCookie(key, value, expire){
	expire = expire || '';
	if(expire != ''){
		document.cookie = key + "=" + value + "; path=/; expires = " + expire + ";";
	}else{
		document.cookie = key + "=" + value + "; path=/;";
	}
}
function setCookie2(key, value) {
	delCookie(key);
	setCookie(key, value);
}
function delCookie(key){
	var expire = new Date();
	expire.setTime(expire.getTime()-60*60*24*1000);
	setCookie(key, '', expire.toGMTString());
}
function fngetLpCode(){
	var Naviflg;
	Naviflg = getCookie("Naviflg");
	if(Naviflg.substring(0,1) == "1" || Naviflg.substring(0,1) == "2"){
		location.href="/inq/N0010100.html";
		return;
	}else{
		if(getCookie("LpCd") == ""){
			location.href="/inq/n0010000.html";
			return;
		}else{
			location.href="/inq/n0010000_lp.html";
			return;
		}
	}
}
function fngetLpCodeT(){
	var Naviflg;
	Naviflg = getCookie("Naviflg");
	if(Naviflg.substring(0,1) == "1" || Naviflg.substring(0,1) == "2"){
		location.href="/inq/n0010100.html#tel";
		return;
	}else{
		if(getCookie("LpCd") == ""){
			location.href="/inq/n0010000.html#tel";
			return;
		}else{
			location.href="/inq/n0010000_lp.html#tel";
			return;
		}
	}
}
function fngetCookieSpr(aCookieName){
	lintStart = 0;
	lwk_cookie = document.cookie + ";";
	aCookieName = aCookieName + "=";
	lintStart = lwk_cookie.indexOf(aCookieName);
	if (lintStart != -1){
		lintEnd = lwk_cookie.indexOf(";" , lintStart);
		return lwk_cookie.substring(lintStart + aCookieName.length,lintEnd);
	}
	return "";
}
function fngetCookieSpr2(aCookieName1,aCookieName2){
	lintStart = 0;
	lwk_cookie = document.cookie + ";";
	aCookieName = aCookieName1 + "=";
	lintStart = lwk_cookie.indexOf(aCookieName);
	if (lintStart != -1){
		lintEnd = lwk_cookie.indexOf(";" , lintStart);
		lwk_cookie2 = lwk_cookie.substring(lintStart + aCookieName.length,lintEnd);
		aCookieName2 = aCookieName2 + "=";
		lintStart2	 = lwk_cookie2.indexOf(aCookieName2);
		if (lintStart2 != -1){
			lintEnd21 = "99";
			lintEnd22 = "99";
			lintEnd21 = lwk_cookie2.indexOf(";" , lintStart2);
			if (lintEnd21 == "-1"){lintEnd21 = "99";}
			lintEnd22 = lwk_cookie2.indexOf("&" , lintStart2);
			if (lintEnd22 == "-1"){lintEnd22 = "99";}
			if (lintEnd21 > lintEnd22){
				return unescape(lwk_cookie2.substring(lintStart2 + aCookieName2.length,lintEnd22));
			}else{
				return unescape(lwk_cookie2.substring(lintStart2 + aCookieName2.length,lintEnd21));
			}
		}
	}
	return "";
}
function fnSpritTest(){
	wk_TestDir ="/";
	if(navigator.userAgent.toUpperCase().indexOf("GOOGLEBOT") > -1){
		wk_spritkbn = "CNT";
	}else{
		if(fngetCookieSpr("CampId").substring(0, 1) == "N"){
			if(fngetCookieSpr2("SCNT","919").toUpperCase().indexOf("CNT") >-1 || fngetCookieSpr2("SCNT","919").toUpperCase().indexOf(wk_TestDir) >-1){
				if(fngetCookieSpr2("SCNT","919") == wk_TestDir){
					wk_spritkbn = wk_TestDir;
				}else{
					wk_spritkbn = "CNT";
				}
			}else if(fngetCookieSpr2("SCNT","919") != ""){
				if(fngetCookieSpr2("SCNT","919") == wk_TestDir){
					wk_spritkbn = wk_TestDir;
				}else{
					wk_spritkbn = "CNT";
				}
			}else{
				lwk_date = new Date();
				lwk_minute = lwk_date.getMinutes();
				if(lwk_minute%2 != 0) {
					wk_spritkbn = wk_TestDir;
					document.cookie = "SCNT=919=" + wk_TestDir + "; path=/;";
				}else{
					wk_spritkbn = "CNT";
					document.cookie = "SCNT=919=CNT; path=/;";
				}
			}
		}else{
			wk_spritkbn = "CNTT99";
			document.cookie = "SCNT=919=CNTT99; path=/;";
		}
	}
}
function fnChkURL(){
	lstrOKURL = new Array(5);
	lstrOKURL[0] ="/PROD/N2000000.HTML";
	lstrOKURL[1] ="/PROD/MED/N2020000.HTML";
	lstrOKURL[2] ="/PROD/AUTO/N2010000.HTML";
	lstrOKURL[3] ="/PROD/D2000000.HTML";
	for (i = 0; i < lstrOKURL.length-1; i ++){
		if(lstrOKURL[i] == getContextFilePath(document.URL)){fnSpritTest();}
	}
}
function fillingZero(arg, dig){
	str = arg.toString();
	var i = dig - str.length;
	if (i) {
		str = new Array(i + 1).join("0") + str;
	}
	return str;
}
function fnSetUID(){
	var _uid = getCookie("UID", true);
	var expire = new Date();
	if (!_uid) {
		var arr = new Array();
		var _year   = fillingZero(expire.getFullYear(), 4);
		var _month  = fillingZero(expire.getMonth() + 1, 2);
		var _day    = fillingZero(expire.getDate(), 2);
		var _hour   = fillingZero(expire.getHours(), 2);
		var _minute = fillingZero(expire.getMinutes(), 2);
		var _second = fillingZero(expire.getSeconds(), 2);
		var _random = fillingZero(Math.floor(Math.random() * 999) + 1, 3);
		var arr = new Array(_year, _month, _day, _hour, _minute, _second, _random);
		_uid = arr.join("");
	}
	expire.setTime(expire.getTime() + (60*60*24*60*1000));
	setCookie('UID', _uid, expire.toGMTString());
}
function fnChkTMCamp(){
	var wkjcamp;
	wkjcamp = getCookie("CampId");
	if (wkjcamp.substring(0,2).toUpperCase() == "C_"){
		wkjcamp = wkjcamp.substring(2).toUpperCase();
	}else{
		wkjcamp = wkjcamp.toUpperCase();
	}
	if(( wkjcamp.substring(0,1) == "T" ) || 
	   ( wkjcamp.substring(0,4) == "WFAS" )){
		return "false";
	}else{
		switch ( wkjcamp.substring(0,3) ) {
			case "170":	case "A13":	case "A23":	case "A24":	case "A26":	case "A29":
			case "A30":	case "A32":	case "A33":	case "A36":	case "A42":	case "A44":
			case "A45":	case "A51":	case "A54":	case "A60":	case "A62":	case "A73":
			case "A75":	case "A80":	case "J13":	case "J14":	case "J25":	case "J39":
			case "J40":	case "J42":	case "J43":	case "J44":	case "J46":	case "J50":
			case "J51":	case "J52":	case "J53":	case "J56":	case "J61":	case "J62":
			case "J65":	case "J85":	case "J89":	case "J93":	case "J96":	case "JAB":
			case "JAM":	case "JCA":	case "JCB":	case "JFA":	case "JRS":	case "P89":
			case "S40":	case "U12":	case "U14":	case "U16":	case "U17":	case "U19":
			case "U20":	case "U23":	case "U25":	case "U26":	case "U2N":	case "U2S":
			case "U2U":	case "U2V":	case "U33":	case "U34":	case "U49":	case "U62":
			case "U67":	case "U69":	case "U6L":	case "U6M":	case "U6U":	case "U72":
			case "U75":	case "UA4":	case "UA5":	case "UA6":	case "UA7":	case "UA8":
			case "UAC":	case "UAF":	case "UAH":	case "UAK":	case "UAM":	case "UAO":
			case "WJ1":	case "WWM":	case "WWY":	case "XZF":	case "Y02":	case "Y08":
			case "Y10":	case "Y12":	case "Y16":	case "Y18":	case "Y21":	case "Y26":
			case "Y31":	case "Y33":	case "Y37":	case "Y38":	case "Y40":	case "Y42":
			case "Y46":	case "Y50":	case "Y56":	case "Y60":	case "Y65":	case "Y69":
			case "Y71":	case "YA8":	case "YA9":	case "YAB":	case "YP2":	case "YP6":
			case "YPF":	case "YPR":	case "YPU":	case "YPX":
				return "false";
				break;
			default:
				return "false";
				break;
		}
	}
}
function fnChkDMCamp(){
	var wkjcamp;
	wkjcamp = getCookie("CampId");
	if (wkjcamp.substring(0,2).toUpperCase() == "C_"){
		wkjcamp = wkjcamp.substring(2).toUpperCase();
	}else{
		wkjcamp = wkjcamp.toUpperCase();
	}
	if(( wkjcamp == "NEP001" )	|| 
	   ( wkjcamp == "NEO002" )){
		return "false";
	}
	if(( wkjcamp.substring(0,1) == "N" )	|| 
	   ( wkjcamp.substring(0,1) == "K" )	|| 
	   ( wkjcamp.substring(0,1) == "R" )	|| 
	   ( wkjcamp.substring(0,1) == "H" )	|| 
	   ( wkjcamp.substring(0,1) == "G" )	|| 
	   ( wkjcamp.substring(0,1) == "F" )	|| 
	   ( wkjcamp.substring(0,1) == "P" )	|| 
	   ( wkjcamp == "Z15A01" )	|| 
	   ( wkjcamp == "Z15E03" )	|| 
	   ( wkjcamp == "Z15E04" )	|| 
	   ( wkjcamp == "Z15E05" )	|| 
	   ( wkjcamp == "Z15E07" )	|| 
	   ( wkjcamp == "Z15E09" )	|| 
	   ( wkjcamp == "Z15E12" )	|| 
	   ( wkjcamp == "Z15E13" )	|| 
	   ( wkjcamp == "Z16A01" )	|| 
	   ( wkjcamp == "Z16A02" )	|| 
	   ( wkjcamp == "Z16A11" )	|| 
	   ( wkjcamp == "Z16000" )	|| 
	   ( wkjcamp == "Z25A01" )	|| 
	   ( wkjcamp == "Z25A07" )	|| 
	   ( wkjcamp == "Z40A01" )	|| 
	   ( wkjcamp == "Z40A03" )	|| 
	   ( wkjcamp == "Z16A03" )	|| 
	   ( wkjcamp == "Z16A04" )	|| 
	   ( wkjcamp == "Z16A05" )	|| 
	   ( wkjcamp == "Z16A06" )	|| 
	   ( wkjcamp == "Z16105" )	|| 
	   ( wkjcamp == "Z16106" )	|| 
	   ( wkjcamp == "Z16107" )	|| 
	   ( wkjcamp == "Z16108" )){
		return "true";
	}
}
function fnChkTMCode(){
	var wkjcamp;
	wkjcamp = getCookie("CampId");
	if (wkjcamp.substring(0,2).toUpperCase() == "C_"){
		wkjcamp = wkjcamp.substring(2).toUpperCase();
	}else{
		wkjcamp = wkjcamp.toUpperCase();
	}
	if( wkjcamp.substring(0,1) == "T" ){return "true";}
}
function winForm(strId, strParam, route){
	route = route || '';
	strParam = strParam || '';
	var reqParams = 'strId='+strId;
	if(strParam != ''){reqParams = reqParams + '&strParam='+strParam;}
	beginProcAction('PageId', 'PEF00010', route, reqParams, 'snask01');
}
function winOpenAction(URL, NAME, STYLE){
	NAME = NAME || '';
	STYLE = STYLE || '';
	if(!URL){
		return false;
	}else{
		var ret = window.open(URL, NAME, STYLE);
		return ret;
	}
}
function certifyFormSelf(PageId, viewType, dispFlag, route, reqParams){
	route = route || '';
	dispFlag = dispFlag || '';
	certifyFormAction(PageId, route, viewType, dispFlag, '', reqParams);
}
function certifyForm(PageId, viewType, dispFlag, route, reqParams){
	route = route || '';
	dispFlag = dispFlag || '';
	certifyFormAction(PageId, route, viewType, dispFlag, 'snkwin01', reqParams);
}
function certifyFormAction(PageId, route, viewType, dispFlag, target, reqParams){
	target = target || '';
	reqParams = reqParams || '';
	if(reqParams != ''){
		reqParams = reqParams + '&certifyViewType='+viewType;
	}else{
		reqParams = 'certifyViewType='+viewType;
	}
	if(dispFlag != ''){reqParams = reqParams + '&certifyDispFlag='+dispFlag;}
	beginProcAction('PageId', PageId, route, reqParams, target);
}
function beginProcSelf(PageId, route, reqParams){
	route = route || '';
	reqParams = reqParams || '';
	beginProcAction('PageId', PageId, route, reqParams);
}
function beginProcNew(PageId, route, reqParams){
	route = route || '';
	reqParams = reqParams || '';
	beginProcAction('PageId', PageId, route, reqParams, 'snkwin01');
}
function beginProcBlank(PageId, route, reqParams){
	route = route || '';
	reqParams = reqParams || '';
	beginProcAction('PageId', PageId, route, reqParams, '_blank');
}
function winOpenSslonSelf(strRd, route){
	route = route || '';
	beginProcAction('strRd', strRd, route, '');
}
function beginProcBang(inetId){
	var reqParams = 'strInetID='+inetId;
	beginProcAction('strRd', '23', '', reqParams);
}
function beginProcAction(idKey, id, route, reqParams, target){
	reqParams = reqParams || '';
	if(id != ''){
		var qsParams = new Array();
		qsParams[idKey] = id;
		if(route == 1 || route == '1'){qsParams["Route"] = 1;}
		if(reqParams != ''){
			var paramsArray = explodeParams(reqParams);
			if(typeof paramsArray != ''){
				for (var key in paramsArray) {
					if(key != 'pageId' && key != 'Route' && key != 'strRd'){
						qsParams[key] = paramsArray[key];
					}
				}
			}
		}
		var procUrl = '/redirect/proc/';
		var procParams = generateGetParams(qsParams);
		if(procParams){
			procUrl += ('?' + procParams);
		}
		if(!target){
			target = '_self';
		}
		var ret = winOpenAction(procUrl, target);
		ret.focus();
		return ret;
	}else{
		return false;
	}
}
function appendFormItem(formElem, name, value){
	var e = window.document.createElement('input');
	e.setAttribute('name', name);
	e.setAttribute('type', 'hidden');
	e.setAttribute('value', value);
	formElem.appendChild(e);
}
function explodeParams(reqParams){
	reqParams = reqParams.split("&");
	var paramsArray = new Array();
	var key;
	var value;
	for(i=0; i<reqParams.length; i++){
		spParam = reqParams[i].split("=");
		key = spaceTrim(spParam[0]);
		value = spaceTrim(spParam[1]);
		if(value!=''){paramsArray[key] = value;}
	}
	return paramsArray;
}
function getDomain(){
	var url = document.URL;
	var Domain = url.replace(/\/\//g,"/");
	var siteDom = Domain.split("/");
	return siteDom[1];
}
function retrieveGETParams() {
	var params = new Array();
	var _url = document.URL;
	var qp = _url.indexOf('?');
	if (0 < qp) {
		var query;
		query = _url.substring(qp + 1);
		if (query) {
			var queries = query.split('&');
		}
		for (var i = 0; i < queries.length; i++) {
			var ep = queries[i].indexOf('=');
			var key;
			var value;
			if (0 < ep) {
				key   = queries[i].substring(0, ep);
				value = queries[i].substring(ep + 1);
			} else if (0 > ep) {
				key   = queries[i];
				value = '';
			}
			if (key) {
				params[key] = value;
			}
		}
	}
	return params;
}
function generateGetParams(args){
	var reqParams = new Array();
	var loopCnt = 0;
	for (var keyString in args) {
		reqParams[loopCnt] = keyString +"="+ args[keyString];
		loopCnt++;
	}
	if(reqParams.length >= 1){
		return(reqParams.join('&'));
	}else{
		return(null);
	}
}
function GetCookies(){
	var result = new Array();
	var stringCookies = document.cookie;
	var keys;
	keys = new Array();
	if( stringCookies != '' ){
		var cookies = stringCookies.split( ';' );
		for( var i = 0; i < cookies.length; i++ ){
			var stringCookie = spaceTrim(cookies[i]);
			var ep = stringCookie.indexOf('=');
			var key;
			var value;
			if (0 < ep) {
				key   = spaceTrim(decodeURIComponent(stringCookie.substring(0, ep)));
				value = spaceTrim(decodeURIComponent(stringCookie.substring(ep + 1)));
			} else if (0 > ep) {
				key   = spaceTrim(decodeURIComponent(stringCookie));
				value = '';
			}
			if (key) {
				if (0 > fnIndexOf(keys, key)) {
					result[key] = value;
					keys.push(key);
				}
			}
		}
	}
	return result;
}
function addEvent(e, i, f){
	if (e.addEventListener){
		e.addEventListener(i, f, false);
	}else if(e.attachEvent){
		e.attachEvent('on' + i, f);
	}
}
function fnIndexOf(array, search, from){
	var len = array.length;
	from = from || 0;
	from += (from < 0) ? len : 0;
	for (; from < len; ++from){
		if (array[from] === search){return from;}
	}
	return -1;
}
function spaceTrim(strParam){
	strParam = strParam.replace(/(^\s+)|(\s+$)/g, "");
	return strParam;
}
function getDirectCampId(){
	var nowday = new Date();
	var lstrYY = nowday.getYear();
	var lstrMM;
	var strCampId;
	lstrYY = String(lstrYY);
	if(lstrYY.length == 4){
		lstrYY = lstrYY.substring(2);
	}else if(lstrYY.length == 3){
		lstrYY = lstrYY.substring(1);
	}
	lstrMM = nowday.getMonth()+1;
	lstrMM = lstrMM.toString(16);
	lstrMM = lstrMM.toUpperCase();
	strCampId = "NZ0" + lstrYY + lstrMM;
	return (strCampId);
}
function getContextFilePath(URL){
	return "/" + (URL).replace(/^.+:\/\/.+?(\/|$)|#.*|\?.*/g , "").toUpperCase();
}

function setOc(){
	var qCampID;
	var queries = retrieveGETParams();
	qCampID = queries[ocKey] || "";
	if (qCampID != "") {
		setCookie(ocKey, qCampID);
		return;
	}
}

function getOc(){
	return getCookie(ocKey);
}


function replaceOc(){
	var cCampID;
	cCampID = getCookie(ocKey) || "";
	if (cCampID != "") {
		setCookie2(ocKey, cCampID);
		return;
	}
}

function isGp(){
	return getCookie("Route")==1;
}

function certifyFormSelfGp(PageId, viewType, dispFlag, reqParams){
	certifyFormSelf(PageId, viewType, dispFlag, getCookie("Route"), reqParams);
}

function certifyFormGp(PageId, viewType, dispFlag, reqParams){
	certifyForm(PageId, viewType, dispFlag, getCookie("Route"), reqParams);
}

function beginProcSelfGp(PageId, reqParams){
	beginProcSelf(PageId, getCookie("Route"), reqParams);
}

function beginProcNewGp(PageId, reqParams){
	beginProcNew(PageId, getCookie("Route"), reqParams);
}

function beginProcBlankGp(PageId, reqParams){
	beginProcBlank(PageId, getCookie("Route"), reqParams);
}

function openInquiry(){
	if (getCookie("LpCd") != "") {
		window.open('/inq/n0010000_lp.html', '_blank');
		return;
	} else if (isGp()) {
		window.open('/sonygp/inq/n0010000_gp.html', '_blank');
		return;
	}else{
		window.open('/inq/n0010000.html', '_blank');
		return;
	}
}
