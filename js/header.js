// JavaScript Document
//	網站標題
function header()
{
	var cs=document.currentScript;
	var headerParent=cs.parentNode;
	var header = document.createElement('header');
	header.className="blog-header py-3";
	var div = document.createElement('div');
	div.className="row flex-nowrap justify-content-between align-items-center";
	var div1 = document.createElement('div');
	div1.className="col-12 text-center";
	var a = document.createElement('a');	
	var rel=getRefPath();
	a.className="blog-header-logo text-dark";
	a.href=rel + "index.html";
	var img = document.createElement('img');	
	img.src=rel + "img/logo_h180.png";
	img.alt="澳門高血壓聯盟";
	img.style="height:90px;";
	a.appendChild(img);
	div1.appendChild(a);
	div.appendChild(div1);
	header.appendChild(div);
	headerParent.appendChild(header);
}