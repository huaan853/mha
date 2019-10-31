// JavaScript Document
function newsItem(newsurl,newstitle,newsdate,newsabstract)
{
	this.newsurl=newsurl;
	this.newstitle=newstitle;
	this.newsdate=newsdate;
	this.newsabstract=newsabstract;
}
//	每次追加新聞需要在最前面加。
//
function getNewsItems()
{
	var NewsItems= new Array();
	var i=0;
	NewsItems[i++]= new newsItem("news-2019-3","慶祝中國高血壓日活動","2019.9.28","為慶祝中國高血壓日活動，由澳門高血壓聯盟主辦的「高血壓診治新進展研討會」於2019年9月28日晚假澳門皇冠假日酒店舉行舉行。");
	NewsItems[i++]= new newsItem("news-2019-1","團體關注高血壓教心肺復甦","2019.5.28","澳門高血壓聯盟今年繼續響應\"世界高血壓日\"，由澳門基金會支持，以\"澳門特區成立二十周年暨邁向全民血壓健康社區培訓系列活動\"為主題於日前假高士德宣道堂舉行\"澳門高血壓聯盟急救推廣系列活動\"。");
	NewsItems[i++]= new newsItem("news-2019-2","醫生倡三招防治高血壓","2019.5.21","世界衛生組織數據顯示，全球每年有九百四十萬例因高血壓引致死亡個案，全球大約有四成二十五歲及以上成人被診斷患有高血壓，患病總人數從一九八○年的六億大幅增加至二○○八年的十億。一六年的《澳門健康調查》已顯示，高血壓的粗患病率為百分之廿五點五，即平均約每四個人就有一個人患有高血壓，其死亡率僅次於癌症和心臟病，近年常踞於十大死因的第三位。");

	return NewsItems;
	
}
function newsIndex()
{
	var cs=document.currentScript;
	var newsParent=cs.parentNode;
	var newsItems=getNewsItems();
	var i;
	for(i=0;i<newsItems.length;i++){
		var anchor = document.createElement('a');
		anchor.className="list-group-item list-group-item-action flex-column align-items-start";
		anchor.href="news/"+newsItems[i].newsurl+".html";
		var div = document.createElement('div');
		div.className="d-flex w-100 justify-content-between";
		var h6 = document.createElement('h6');
		h6.className="mb-1";
		h6.textContent=newsItems[i].newstitle;
		var dat="("+newsItems[i].newsdate +")";
		var p = document.createElement('p');
		p.className="mb-1";
		p.textContent=dat + newsItems[i].newsabstract;
		anchor.appendChild(div);
		anchor.appendChild(p);
		newsParent.appendChild(anchor);
	}
	
}
function news()
{
	var cs=document.currentScript;
	var newsParent=cs.parentNode;
	var newsItems=getNewsItems();
	var i;
	for(i=0;i<newsItems.length;i++){
		var anchor = document.createElement('a');
		anchor.className="list-group-item list-group-item-action flex-column align-items-start";
		anchor.href="news/"+newsItems[i].newsurl+".html";
		var div = document.createElement('div');
		div.className="d-flex w-100 justify-content-between";
		var h6 = document.createElement('h6');
		h6.className="mb-1";
		h6.textContent=newsItems[i].newstitle;
		var small = document.createElement('small');
		small.textContent=newsItems[i].newsdate;
		div.appendChild(h6);
		div.appendChild(small);
		var p = document.createElement('p');
		p.className="mb-1";
		p.textContent=newsItems[i].newsabstract;
		anchor.appendChild(div);
		anchor.appendChild(p);
		newsParent.appendChild(anchor);
	}
}
