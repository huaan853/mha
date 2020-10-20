// JavaScript Document
//	2020.10.20修改
//	把footer加入
//
function header()
{
	var header = document.createElement('header');
	header.className="blog-header py-3";
	var div = document.createElement('div');
	div.className="row flex-nowrap justify-content-between align-items-center";
	var div1 = document.createElement('div');
	div1.className="col-12 text-center";
	var rel=getRefPath();
	var a = document.createElement('a');
	a.className="blog-header-logo text-dark";
	a.href=rel + 'index.html';
	var img = document.createElement('img');
	img.src=rel + "img/logo_h180.png";
	img.alt="澳門高血壓聯盟";
	img.style="height:90px;";
	a.appendChild(img);
	div1.appendChild(a);
	div.appendChild(div1);
	header.appendChild(div);
	var cs=document.currentScript;
	var navParent=cs.parentNode;
	navParent.appendChild(header);	
	
}
//	菜單
//	定義結構
function MenuItem(fileName,desc)
{
	this.fileName=fileName;
	this.desc=desc;
}
//	定義菜單
function getMenuItems()
{
	var index= new MenuItem("index","首頁");	
	var constitution= new MenuItem("constitution","聯盟章程");
	var about= new MenuItem("about","聯盟簡介");
	var news= new MenuItem("news","聯盟動態");
	var activity= new MenuItem("activity","活動花絮");
	var research= new MenuItem("research","研究成果");
	var healthKnowledge= new MenuItem("healthKnowledge","健康教育");
	var register= new MenuItem("register","會員登記");
	var items =[index,constitution,about,news,activity,research,healthKnowledge,register];
	return items;
}
//	判斷html相對位置
function getRefPath()
{
	var cref=document.URL;
	var js=document.scripts;
	var jsPath=js[0].src.substring(0,js[0].src.lastIndexOf("/"));;
	var root=jsPath.substring(0,jsPath.lastIndexOf('/'));
	var path=cref.substring(0,cref.lastIndexOf('/'));
	var rel='';
	if(root != path){
		rel='../';
	}
	return rel;
}
//	
function menubutton()
{
	var btn = document.createElement('button');
	btn.className="navbar-toggler collapsed";
	btn.type="button";
	btn.setAttribute("data-toggle","collapse");
	btn.setAttribute("data-target","#navbarsExampleDefault");
	btn.setAttribute("aria-controls","aria-controls");
	btn.setAttribute("aria-expanded","false");
	btn.setAttribute("aria-label","Toggle navigation");
	var span = document.createElement('span');
	span.className="navbar-toggler-icon";
	btn.appendChild(span);
	return btn;
}

function menudiv(active)
{
	var items =getMenuItems();
	var div = document.createElement('div');
	div.className="navbar-collapse collapse";
	div.id="navbarsExampleDefault";
	div.style='';
 	var ul = document.createElement('ul');
	ul.className="navbar-nav mr-auto justify-content-between";
	ul.style="width:100%";
	var rel=getRefPath();
	for(i=0;i<items.length;i++){
		var li = document.createElement('li');
		var a = document.createElement('a');
		li.className="nav-item";
		a.className="nav-link";
		a.href=rel + items[i].fileName + '.html';
		a.textContent=items[i].desc;
		if(items[i].desc == active){
			li.className +=" active";
			var span = document.createElement('span');
			span.className="sr-only";
			span.text='(current)';
			a.appendChild(span);
		}
		li.appendChild(a);
		ul.appendChild(li);
	}
	div.appendChild(ul);
	return div;
}

function menu(active)
{
	var cs=document.currentScript;
	var navParent=cs.parentNode;
	var nav = document.createElement('nav');
	nav.className = "navbar navbar-expand-sm navbar-light";
	var btn=menubutton();
	var div=menudiv(active);
	nav.appendChild(btn);
	nav.appendChild(div);
	navParent.appendChild(nav);
}

//	根據當前時間自動更改版權年份
//	版權符號在html為&copy;
//	在javascript需要直接寫unicode，\u00A9
function footer()
{
	var cs=document.currentScript;
	var myDate = new Date();
	var year= myDate.getFullYear();
	var ftp=cs.parentNode;
	var footer=document.createElement("footer");
	footer.className='footer';
	footer.textContent="\u00A9" + year.toString() +" 澳門高血壓聯盟";
	ftp.appendChild(footer);
	
//	tohttps();
}
//
//	強迫轉為https
var	trytimes=0;
function tohttps()
{
	if(trytimes>0)
		return;
	var url = window.location.href;
    if (url.indexOf("https") < 0) {
        url = url.replace("http:", "https:");
        window.location.replace(url);
    }
	trytimes ++;
}

