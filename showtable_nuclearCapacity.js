var groupID;
var ip;
var nodeid;
var uname;
var language;
var startyear;
var smonth;
var endyear;
var emonth;
var lasttime;
var gtimesuccess;
var tinit;
var jlen;
var bolean = false;
var balea = false;
var tempID;
var baselect = 1;
var HisData = new Array();
var chardt = new Array();
var cdata = new Array();
var battterryNum = new Array();
var hightcbtNum = new Array();
var selecttt = new Array();
var testddid = new Array();
var pageNO;
var orgname;
var telnum;
var logo;
var a;
var optionArr1;
var optionArr2;
var yearChoose;
var monthChoose;

var pageArr = [];

var firstDay;
$(document).ready(function() {
	ip = getUrlParam('ip');
	userid = getUrlParam("userid");
	nodeid = getUrlParam("nodeid");
	language = getUrlParam("language");
	groupID = getUrlParam("groupID");
	var ipFalse = "http://pite-bms.cn:8011/bms"
	if(ip == ipFalse) {
		ip = "http://pite-bmcp.cn:8011/bms";
	}
	$("#two").click(function(e){
		e=window.event||e;
	    if(document.all){  //只有ie识别
	        e.cancelBubble=true;
	    }else{
	        e.stopPropagation();
	    }
		$(".select").hide(200)
		$(".selectFx").hide(200)
	})
});

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;
}

function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if(c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function checkCookie() {
	username = getCookie('username');
	password = getCookie('password');
	if(username != null && username != "") {
		init();
	} else {
		document.location.href = "../BMSLogin.html";
	}

}

/*初始化界面*/
//var timedata = new Array();

function init() {
	CEnglish();
	jQuery.support.cors = true;
	$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
		if(options.crossDomain) {
			options.url = ip + "/rest/get_Nucapdata/" + groupID + "/" + language; //http://203.191.147.81:8080/bms/rest/getFirstPageData     
			options.crossDomain = true;
		}
	});
	$.ajax({
		type: "get",
		crossDomain: true,
		async: true,
		dataType: "json",
		success: function(data) {
//			firstDay = data.Rang.Data[0].Time.split(" ")[0];
			loadXMLDoc();
//			timedata = data.Rang.Data;
			$("#time")[0].value=data.DisCharL;
			$("#groupVoltage")[0].value=data.groupvoltage;
			$("#singleVoltage")[0].value=data.voltage;
		},
		error: function() {
			alert("fail");
		}
	});
}


function loadXMLDoc(testID, jst, jinit) {
//	var j = new Array();
//	$("#zhi").show();
//	$("#zhexian").hide();

	cc(testID, jst, jinit);
}
function cc(testID, jst, jinit) {
	$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
		if(options.crossDomain) {
//			var ipFalse = "http://pite-bms.cn:8011/bms"
//			if(ip == ipFalse) {
//				ip = "http://pite-bmcp.cn:8011/bms";
//			}
			options.url = ip + "/rest/ get_Nucapdata/" + groupID + "/" + language; //http://203.191.147.81:8080/bms/rest/getFirstPageData                                       
			options.crossDomain = true;
		}
	});
	$.ajax({
		type: "get",
		crossDomain: true,
		async: true,
		dataType: "json",
		success: function(dat) {
			createShowTable(dat);
//			initselect(jst, jinit);//(!close)
//			dchart(dat.HisData);
			HisData = dat.HisData;
		},
		error: function() {
			alert("fail");
		}
	});
}
function createShowTable(item) {
	//  将item[0].ACI转换成num
//	item[0].ACI = parseFloat(item[0].ACI)
	
	var tableStr = "<table  style='background-color:rgb(205,210,220);bodercolor:#000000;width:100%;' cellpadding='0' cellspacing='1' border='0'>";
	tableStr = tableStr + "<tr><td style='width:100px;text-align:center'><font size='2'>站名</font></td><td>";
	tableStr = tableStr + "<input type='text'  readonly='readonly' value='" + item.nodename + "'/></td><td style='width:100px;text-align:center'><font size='2'>投运年限</font></td><td><input type='text' readonly='readonly' value='" + item.runTime + "'/></td>";
	tableStr = tableStr + "<td style='width:100px;text-align:center'><font size='2'>电池厂家</font></td><td ><input type='text'  readonly='readonly'  value='" + item.factoryname + "'/></td></tr><tr><td style='width:100px;text-align:center'><font size='2'>组名</font></td><td ><input type='text'  readonly='readonly' value='" + item.groupname + "'/></td>";
	tableStr = tableStr + "<td style='width:100px;text-align:center'><font size='2'>内阻标准</font></td><td ><input type='text'  readonly='readonly'  value='" + item.nominalR + "mΩ'/></td><td style='width:100px;text-align:center'><font size='2'>电池类型</font></td><td><input type='text' readonly='readonly' value='" + item.batterytypeName + "'/></td></tr>";
	tableStr = tableStr + "<tr class='pageChoose'><td style='width:100px;text-align:center'><font>主机选择</font></td><td><select onchange='chooseHcid(this)'><option>--请先选择日期--</option></select></td><td style='width:100px;text-align:center'><font>组号</font></td><td><select onchange='chooseGroupid(this)><option>--请先选择日期--</option></select></td>"
	tableStr = tableStr + "<td style='width:100px;text-align:center'><font size='2'>节数</font></td><td><input type='text' readonly='readonly' value='" + item.Gcount + "'/></td></tr>"
	tableStr = tableStr + "</table>";
	$("#table").html("");
	$("#table").html(tableStr);
	CEnglish();
//	getHeight();//(!close)
	getPage(firstDay,1)
}

function getPage(day,flag){
//	var val;
//	if (flag == 1) {
//		val = day
//	}else{
//		val = $(".ipt_start").val().replaceAll("-","")
//	}
	function ajax1(){
		var nodeid;
		nodeid = getUrlParam("nodeid")
		$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
			if(options.crossDomain) {
				options.url = ip + "/rest/get_page2/"+ nodeid + "/" + language;                                       
				options.crossDomain = true;
			}
		});
		$.ajax({
			type: "get",
			crossDomain: true,
			async: true,
			dataType: "json",
			success: function(dat) {
				var hcidShow = $("<option>"+dat.hciddata[0].hcid+"</option>");
				var groupidShow = $("<option>"+dat.hciddata[0].groupid+"</option>");
				var arr1 = dat.hciddata;
				$(".pageChoose select").eq(0).empty();
//				$(".pageChoose select").eq(0).append(hcidShow);
				$(".pageChoose select").eq(1).append(groupidShow);
				for (var i =0;i<arr1.length;i++) {
					var str = arr1[i].groupid
//					if (str[str.length-1]==",") {
//						str = str.substring(0,str.length-1)
//					}
					var opt = $("<option>"+arr1[i].hcid+"</option>")
					$(".pageChoose select").eq(0).append(opt);
					var obj = {
						"hcid":arr1[i].hcid,
						"groupid":str
					}
					pageArr.push(obj)
				}
			},
			error: function() {
				alert("fail");
			}
		});
	}
	ajax1();

}
//年
function chooseHcid(obj){
	if (obj.value == "") {
		return
	}
	var groupidStr;
//	var weekStr;
	for (var i=0;i<pageArr.length;i++) {
		if (obj.value == pageArr[i].hcid) {
			groupidStr = pageArr[i].groupid
		}
	}
//	weekStr = timeArr[1].week
//	var groupidArr = groupidStr.split(",")
	$(".pageChoose select").eq(1).empty()
//	var opt = $("<option>月</option>")
//	$(".pageChoose select").eq(1).append(opt);
	for (var i = 0; i< pageArr.length; i++) {
		var opt = $("<option>"+pageArr[i].groupid+"</option>")
		$(".pageChoose select").eq(1).append(opt);
	}
//	var weekArr = weekStr.split(",")
//	$(".timeQuChoose select").eq(2).empty()
//	var opt = $("<option>周</option>")
//	$(".timeQuChoose select").eq(2).append(opt);
//	for (var i = 0; i< weekArr.length; i++) {
//		var opt = $("<option>"+weekArr[i]+"</option>")
//		$(".timeQuChoose select").eq(2).append(opt);
//	}
//	pageSeach(obj.value)
//	timeSeachWeek(obj.value)
}
//月
function chooseGroupid(obj){
	var month = obj.value;
	if (obj.value == "月") {
		return
	}
	if (obj.value.length == 1) {
		month = "0"+month;
	}
	var year = $(".pageChoose select").eq(0).val();
//	pageSeach(year,month)
}

//点击开始放电按钮
function startAjax(){
	
}


//	ajax2();
//	function ajax2(){
//		var nodeid;
//		nodeid = getUrlParam("nodeid")
//		$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
//			if(options.crossDomain) {
//				options.url = ip + "/rest/get_page2/"+ nodeid + "/" + language;                                       
//				options.crossDomain = true;
//			}
//		});
//		$.ajax({
//			type: "get",
//			crossDomain: true,
//			async: true,
//			dataType: "json",
//			success: function(dat) {
//				var arr1 = dat.rootBatterySectionPage.title.data;
//				for (var i =0;i<arr1.length;i++) {
//					var str = arr1[i].values
//					if (str[str.length-1]==",") {
//						str = str.substring(0,str.length-1)
//					}
//					var opt = $("<option>"+arr1[i].year+"</option>")
//					$(".timeQuChoose select").eq(0).append(opt);
//					var obj = {
//						"year":arr1[i].year,
//						"month":str
//					}
//					timeArr.push(obj)
//				}
//			},
//			error: function() {
//				alert("fail");
//			}
//		});
//	}