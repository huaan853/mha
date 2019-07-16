// JavaScript Document
//	根據當前時間自動更改版權年份
//	版權符號在html為&copy;
//	在javascript需要直接寫unicode，\u00A9
function footer()
{
	debugger;
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
