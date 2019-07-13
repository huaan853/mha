// JavaScript Document
function getParams(key)
{
	var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r !=null){
		return unescape(r[2]);
	}
	return null;
}

function yearCount(year)
{
	var cnt=0;
	switch(year){
	case	2012:
		cnt=8;
		break;
	case	2013:
		cnt=10;
		break;
	case	2018:
		cnt=6;
		break;
	case 2019:
		cnt=2;
		break;
	}
	return cnt;
}
function activity(year)
{
	var cnt=yearCount(year);
	for(var i=0;i < cnt; i++)
	{
		index= i+1;
		fn = "/" + year +"_" + index;
		document.write("<div class='col-md-4'>");
		document.write("<div class='card mb-4 box-shadow'>");
		document.write("<a href='../img/photo/w1200" + fn +".jpg' target='_blank'>");
		document.write("<img class='card-img-top' src='../img/photo/w450" + fn + "_450.jpg' style='width: 100%; display: block;' alt='" + year +"年世界高血壓日'>");
		document.write("</a> </div></div>");		
	}
}
