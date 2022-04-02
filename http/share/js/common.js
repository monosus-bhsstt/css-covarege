function getPropType() {
    var fullpath = window.location.pathname;
    var path_list = fullpath.split("/");
    var idx = 0;
    var x = new Array();
    x[idx] = new Array(); x[idx][0] = "/cst/";                  x[idx][1] = "";		    x[idx][2] = "CST";      idx++;
    x[idx] = new Array(); x[idx][0] = "/auto/";		            x[idx][1] = "";			x[idx][2] = "AUTO";     idx++;
    x[idx] = new Array(); x[idx][0] = "/md/";            		x[idx][1] = "";			x[idx][2] = "SURE";     idx++;
    x[idx] = new Array(); x[idx][0] = "/overseas/";      		x[idx][1] = "";			x[idx][2] = "TRAVEL";	idx++;
    x[idx] = new Array(); x[idx][0] = "/pet/";      			x[idx][1] = "";			x[idx][2] = "PET";		idx++;
    x[idx] = new Array(); x[idx][0] = "/prod/fire/";   			x[idx][1] = "";			x[idx][2] = "FIRE";     idx++;
    x[idx] = new Array(); x[idx][0] = "/medcom/";      			x[idx][1] = "";			x[idx][2] = "MEDCOM";	idx++;
    x[idx] = new Array(); x[idx][0] = "/company/";              x[idx][1] = "";         x[idx][2] = "company";  idx++;
 

    /** reserved(from) **/
    x[idx] = new Array(); x[idx][0] = "from.sonysonpo.co.jp/hyoka/";		x[idx][1] = "";		    x[idx][2] = "hyoka";    idx++;
    x[idx] = new Array(); x[idx][0] = "from.sonysonpo.co.jp/voice/";		x[idx][1] = "";         x[idx][2] = "voice";    idx++;
    x[idx] = new Array(); x[idx][0] = "from.sonysonpo.co.jp/zero/";			x[idx][1] = "";         x[idx][2] = "zero";     idx++;
    x[idx] = new Array(); x[idx][0] = "from.sonysonpo.co.jp/promenade/";	x[idx][1] = "";         x[idx][2] = "sbs";      idx++;
    x[idx] = new Array(); x[idx][0] = "from.sonysonpo.co.jp/ftd/";          x[idx][1] = "";         x[idx][2] = "yourvoice";  idx++;


    var key = "";
    for(i=0; i<x.length; i++){
        if(fullpath.indexOf(x[i][0]) == 0){
			if(x[i][1] == ""){
                key = x[i][2];
                break;
			} else {
            	if(path_list[path_list.length-1].indexOf(x[i][1]) == 0){
                	key = x[i][2];
                	break;
				}
            }
        }
    }
    return key;
}

function getPageIdFromFileName() {
    var fullpath = window.location.pathname;
    /** if last character is '/' then add default.htm to fullpath **/
	if (fullpath.charAt(fullpath.length -1) == '/') {
		fullpath = fullpath.concat("default.htm");
	}
	
    var path_list = fullpath.split("/");
    /** Directory **/
    if(path_list[path_list.length-1] == "default.htm" || path_list[path_list.length-1] == "pop.htm"){
        if(path_list.length >= 2){
            return path_list[path_list.length-2];
        } else {
            return "";
        }
    }

    /** normal **/
    if(path_list[path_list.length-1] == ""){
        path_list[path_list.length-1] = "index.html";
    }
    var filename = path_list[path_list.length-1].replace(".html", "");
	    filename = filename.replace(".htm", "");
	    filename = filename.replace(".asp", "");
	    filename = filename.replace(".php", "");
    return filename;
}

function printSB() {
	
	var code = '<form name="search_form" action="https://search.sonysonpo.co.jp" onsubmit="return mysearch(this);"><fieldset><legend>ÉTÉCÉgì‡åüçı</legend><input type="text" class="input-text" id="i_search_input" name="kw" value=""><input type="hidden" name="ie" value="s"><input type="hidden" name="temp" value="official"><input type="submit" value="åüçı"></fieldset></form><script type="text/javascript"><!--jQuery.noConflict();//--></script><script type="text/javascript" src="https://i25.dga.jp/ssonpo/i_search_assist.js" charset="UTF-8"></script><script type="text/javascript" src="https://i25.dga.jp/ssonpo/search_tool.js" charset="UTF-8"></script>';
	document.write(code);

}

function printSBSony() {
}

function printSBF(){
	var code = '<form name="search_form" action="https://search.sonysonpo.co.jp" onsubmit="return mysearch_word(this);" id="search-site"><fieldset><legend>FAQì‡åüçı</legend><p><input id="i_search_input" class="search-text" type="text" name="kw" value="" /><input type="hidden" name="ie" value="s" /><input type="hidden" name="temp" value="faq" /><input type="hidden" name="domain" value="faq" /><input type="submit" value="åüçı" /></p></fieldset></form><script type="text/javascript" src="https://search.sonysonpo.co.jp/common/js/jquery.js"></script><script type="text/javascript"><!--jQuery.noConflict();//--></script><script type="text/javascript" src="https://search.sonysonpo.co.jp/common/js/sa/i_search_assist.js" charset="UTF-8"></script><script type="text/javascript" src="https://search.sonysonpo.co.jp/common/js/search_tool.js" charset="UTF-8"></script>';
	document.write(code);
}

function printSBFSony(){
	var code = '<form name="search_form" action="https://search.sonysonpo.co.jp" onsubmit="return mysearch_word(this);" id="search-site"><fieldset><legend>FAQì‡åüçı</legend><p><input id="i_search_input" class="search-text" type="text" name="kw" value="" /><input type="hidden" name="ie" value="s" /><input type="hidden" name="temp" value="faq" /><input type="hidden" name="domain" value="faq" /><input type="submit" value="åüçı" /></p></fieldset></form><script type="text/javascript" src="https://search.sonysonpo.co.jp/common/js/jquery.js"></script><script type="text/javascript"><!--jQuery.noConflict();//--></script><script type="text/javascript" src="https://search.sonysonpo.co.jp/common/js/sa/i_search_assist.js" charset="UTF-8"></script><script type="text/javascript" src="https://search.sonysonpo.co.jp/common/js/search_tool.js" charset="UTF-8"></script>';
	document.write(code);
}

window.onload = function()
{
	function getFileName() {
 	   return window.location.href.split('/').pop();
	}
	var elements = document.getElementsByTagName('a'),
		defURL = "/auto/quote/",
		textToAdd01 = "?wn_",
		textToAdd02 = "ID=";
		for(var i=0; i<elements.length; i++){
			if(elements[i].getAttribute('class') == 'btm'){
				var defHref = elements[i].getAttribute('href'),
				newText =  defHref + textToAdd01 + textToAdd02 +getFileName() + "_quote_btm";
				elements[i].setAttribute('href', newText);
			}
			if(elements[i].getAttribute('class') == 'sid'){
				var defHref = elements[i].getAttribute('href'),
				newText =  defHref + textToAdd01 + textToAdd02 +getFileName() + "_quote_sid";
				elements[i].setAttribute('href', newText);
			}
		}
};
