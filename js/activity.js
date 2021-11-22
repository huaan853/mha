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
	case 	2020:
		cnt=11;			
		break;
	case 	2021:
		cnt=4;
		break;	
	}
	return cnt;
}
//
//	活動入口
//
function activity(year)
{
	debugger;
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

//	2020.10.13
//
function singleActivity(url,pic,h)
{
	var cs=document.currentScript;
	var curParent=cs.parentNode;
	var div1 = document.createElement('div');
	div1.className="col-md-4";
	var div2 = document.createElement('div');
	div2.className="card mb-4 box-shadow";
	var anchor = document.createElement('a');
	anchor.href="activity/" + url +".html";
	var img = document.createElement('img');
	img.className="card-img-top";
	var imsrc="img/photo/w450/" + pic + ".jpg";
	img.src=imsrc;
	img.style="width: 100%; display: block;";
	img.alt=h;
	var div3 = document.createElement('div');
	div3.className="card-body";
	var p = document.createElement('p');
	p.className="card-text";
	
	
	
}
//	
function mainActivity(url,h,d)
{
	var cs=document.currentScript;
	var curParent=cs.parentNode;
	var anchor = document.createElement('a');
	anchor.className="list-group-item list-group-item-action flex-column align-items-start";
	anchor.href="activity/" + url +".html";
	var div = document.createElement('div');
	div.className="d-flex w-100 justify-content-between";
	var h6 = document.createElement('h6');
	h6.className="mb-1";
	h6.textContent=h;
	div.appendChild(h6);
	var p = document.createElement('p');
	p.className="mb-1";
	p.textContent=d;
	anchor.appendChild(div);
	anchor.appendChild(p);
	curParent.appendChild(anchor);	
	
}