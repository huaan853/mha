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
	case	12022:
		cnt=3;
		break;
	case	22022:
		cnt=6;
		break;
	case	12023:
		cnt=5;
		break;
	case	12024:
		cnt=6;
		break;
	case	22024:
		cnt=9;
		break;
	case	32024:
		cnt=7;
		break;
			
	default:
		alert(year + " count not be defined");
		break;
	}
	
	return cnt;
}
//	
//	通用
//
//	活動入口
//	用於世界高血壓日
//
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

function activityOther(year,altShow)
{
	
	var cnt=yearCount(year);
	if(cnt== 0){
		
	}
	var ryear=year%10000;
	var path="/"+ ryear;
	for(var i=0;i < cnt; i++)
	{
		index= i+1;
		fn = "/" + year +"_" + index;
		document.write("<div class='col-md-4'>");
		document.write("<div class='card mb-4 box-shadow'>");
		document.write("<a href='../img/photo/w1200" + path + fn +".jpg' target='_blank'>");
		document.write("<img class='card-img-top' src='../img/photo/w450" + path + fn + "_450.jpg' style='width: 100%; display: block;' alt='" + year +"年世界高血壓日'>");
		document.write("</a> </div></div>");		
	}
	
}

//	2020.10.13
//	2022.5.15完成测试
//
//	在activity.html调用
//	url引用网页
//	pic图片
//	h标题
//	d日期
//
function singleActivity(url,pic,h,d)
{
	var cs=document.currentScript;
	var curParent=cs.parentNode;
	var div1 = document.createElement('div');
	div1.className="col-md-4";
	curParent.appendChild(div1);
	var div2 = document.createElement('div');
	div2.className="card mb-4 box-shadow";
	div1.appendChild(div2);

	var anchor = document.createElement('a');
	anchor.href="activity/" + url +".html";
	div2.appendChild(anchor);
	var img = document.createElement('img');
	img.className="card-img-top";
	var imsrc="img/photo/w450/" + pic + ".jpg";
	img.src=imsrc;
	img.style="width: 100%; display: block;";
	img.alt=h;
	anchor.appendChild(img);
	var div3 = document.createElement('div');
	div3.className="card-body";
	div2.appendChild(div3);
	var p = document.createElement('p');
	p.className="card-text";
	p.textContent = h;
	div3.appendChild(p);
	var div4 = document.createElement('div');
	div4.className="d-flex justify-content-between align-items-center";
	div3.appendChild(div4);
	var button = document.createElement('button');
	button.type='button';
	button.className='btn btn-sm mc_btn_bgRed';
	div4.appendChild(button);
	var ab = document.createElement('a');
	ab.className='mc_btn_link';
	ab.href="activity/" + url +".html";
	ab.textContent='查看活動照片';
	button.appendChild(ab);
	var small = document.createElement('small');
	small.className='text-muted';
	small.textContent = d;
	
	div4.appendChild(small);
	
	
}
//	由index页面调入
//	url表示在活动目录的文件名
//	h表示题目
//	d表示日期
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