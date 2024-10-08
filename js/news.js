// JavaScript Document
function newsItem(newsurl,newstitle,newsdate,newsabstract)
{
	this.newsurl=newsurl;
	this.newstitle=newstitle;
	this.newsdate=newsdate;
	this.newsabstract=newsabstract;
}
//	每次追加新聞需要在最前面加。
//	然後在後面減

var NewsItems;
function getNewsItems()
{
	if(typeof NewsItems === "undefined"){
		NewsItems= new Array();
	}
	if(NewsItems.length>0){
		return NewsItems;
	}
	NewsItems= new Array();
	var i=0;
//	2024
	NewsItems[i++]= new newsItem("news-2024-3","防治高血壓講座倡健康生活","2024.10.05","澳門高血壓聯盟與婦聯總會頤康中心舉辦社區活動");
	NewsItems[i++]= new newsItem("news-2024-4","澳粵交流-東莞之行","2024.10.05","澳門高血壓聯盟參觀東莞東華醫院");
	NewsItems[i++]= new newsItem("news-2024-1","高血壓防治研討會順利舉行","2024.5.19","為慶祝世界高血壓日，由澳門高血壓聯盟主辦、大灣區心臟研究學會及澳門急重症醫學會協辦，澳門基金會贊助的澳門高血壓聯盟年會暨高血壓防治研討會二○二四日前假雅辰酒店舉行。");	
	NewsItems[i++]= new newsItem("news-2024-2","高血壓研討會分享科研成果","2024.5.19","澳門高血壓聯盟年會暨高血壓防治研討會二○二四。");	
//	2023
	NewsItems[i++]= new newsItem("news-2023-5","高血壓防治研討會昨舉行","2023.5.21","澳門高血壓聯盟主辦、大灣區心臟研究學會及澳門急重症醫學會協辦，澳門基金會贊助的“澳門高血壓聯盟年會暨國際高血壓防治研討會二○二三”昨日假雅辰酒店舉行。");
	NewsItems[i++]= new newsItem("news-2023-4","國際高血壓防治研討會雅辰酒店舉行","2023.5.20","國際高血壓防治研討會雅辰酒店舉行 倡高血壓患者平穩降壓保護心腦腎功能");
	NewsItems[i++]= new newsItem("news-2023-3","團體九澳護養院教心肺復甦","2023.5.20","由澳門基金會資助，澳門高血壓聯盟主辦，澳門急重症醫學會協辦教心肺復甦");	
	NewsItems[i++]= new newsItem("news-2023-meeting","澳門高血壓聯盟年會暨國際高血壓診治新進展研討會2023","2023.5.10","澳門高血壓聯盟年會暨國際高血壓診治新進展研討會將於2023年5月20日假雅辰酒店舉行。");	
	NewsItems[i++]= new newsItem("news-2023-1","心臟學會高血壓聯盟參觀國安展","2023.4.20","澳門心臟學會和澳門高血壓聯盟近30人於今日參觀國家安全教育展。");	
	NewsItems[i++]= new newsItem("news-2023-2","心臟學會、高血壓聯盟參觀國安展","2023.4.20","澳門心臟學會和澳門高血壓聯盟近30人於今日參觀國家安全教育展。");	
//	2022
	NewsItems[i++]= new newsItem("news-2022-1","2022世界高血壓大會聯合論壇暨澳門高血壓聯盟年會","2022.5.14","由世界高血壓聯盟、澳門高血壓聯盟等主辦“2022 WHL第五屆世界高血壓大會暨亞洲心臟病學會、中國大灣區心臟協會、澳門高血壓病聯盟年會、大灣區高血壓聯盟成立大會聯合論壇”");
	
//	2021
	
	NewsItems[i++]= new newsItem("news-2021-3","高血壓聯盟訪中聯辦及衛局","2021.6.2","世界高血壓聯盟主席張新華以及澳門高血壓聯盟主席馮秀華上月卅一日率領成員及心血管疾病專家拜訪中聯辦和衛生局，分別受到中聯辦宣文部長萬速成及衛生局副局長郭昌宇熱情接待。");
	NewsItems[i++]= new newsItem("news-2021-2","研討會探高血壓診療新技術","2021.5.31","澳門高血壓聯盟年會暨國際高血壓診治新進展研討會昨日假皇都酒店舉行，吸引二百人現場及近千人線上參與。");
	NewsItems[i++]= new newsItem("news-2021-1","澳門衛生局局長羅奕龍在澳門高血壓聯盟年會接受澳門電臺訪問","2021.5.30","調整接種新冠疫苗血壓指標有科學依據");
	NewsItems[i++]= new newsItem("news-2021-0","澳門高血壓聯盟年會暨國際高血壓診治新進展研討會","2021.5.10","澳門高血壓聯盟將於2021年5月30日在皇都酒店舉辦澳門高血壓聯盟年會暨國際高血壓診治新進展研討會2021");
	NewsItems[i++]= new newsItem("news-2021-4","澳門高血壓聯盟與急重症醫學會訪川交流","2021.4.29","由澳門急重症醫學會以及澳門高血壓聯盟發起，國家衛健委和中聯辦組織與安排下...");

//	2020
	
	NewsItems[i++]= new newsItem("news-2020-5","高血壓聯盟教授心肺復甦術","2020.12.13","澳門高血壓聯盟於十一月二十八日下午假濠江中學禮堂舉行了一場心肺復甦課程");
	NewsItems[i++]= new newsItem("news-2020-4","高血壓聯盟研討會倡預防","2020.12.3","澳門高血壓聯盟於上月二十八日假皇都酒店聯同專業團體綫上線下舉辦澳門高血壓聯盟十周年系列活動暨高血壓新進展研討會二○二○。");
	NewsItems[i++]= new newsItem("news-2020-3","精准测量 有效控制 健康长寿","2020.10.17","2020年世界高血压日主题活动");

	NewsItems[i++]= new newsItem("news-2020-2","高血壓聯盟學術研討倡預防","2020.10.15","為慶祝中國及世界高血壓日活動，澳門高血壓聯盟於本月九日假皇都酒店舉辦澳門高血壓聯盟十周年系列活動暨二○二○高血壓診治新進展學術研討會。");
	NewsItems[i++]= new newsItem("news-2020-1","控制情緒防高血壓","2020.5.15","馮秀華接受澳門日報專訪");
	NewsItems[i++]= new newsItem("news-2020-6","澳門國際醫療隊赴非洲抗疫","2020.5.14","澳門國際應急醫療隊5名隊員13日下午飛往重慶聯同重慶醫療專家組，出發前往非洲國家阿爾及利亞執行抗疫任務。");
	
	NewsItems[i++]= new newsItem("news-2019-4","高血壓聯盟赴粵交流","2019.11.15","聯盟組織會員到廣州參觀廣東省人民醫院、廣東省心血管病研究所及廣東高血壓研究基地。");

	NewsItems[i++]= new newsItem("news-2019-3","慶祝中國高血壓日活動","2019.9.28","為慶祝中國高血壓日活動，由澳門高血壓聯盟主辦的「高血壓診治新進展研討會」於2019年9月28日晚假澳門皇冠假日酒店舉行舉行。");
	NewsItems[i++]= new newsItem("news-2019-1","團體關注高血壓教心肺復甦","2019.5.28","澳門高血壓聯盟今年繼續響應\"世界高血壓日\"，由澳門基金會支持，以\"澳門特區成立二十周年暨邁向全民血壓健康社區培訓系列活動\"為主題於日前假高士德宣道堂舉行\"澳門高血壓聯盟急救推廣系列活動\"。");
	NewsItems[i++]= new newsItem("news-2019-2","醫生倡三招防治高血壓","2019.5.21","世界衛生組織數據顯示，全球每年有九百四十萬例因高血壓引致死亡個案，全球大約有四成二十五歲及以上成人被診斷患有高血壓，患病總人數從一九八○年的六億大幅增加至二○○八年的十億。一六年的《澳門健康調查》已顯示，高血壓的粗患病率為百分之廿五點五，即平均約每四個人就有一個人患有高血壓，其死亡率僅次於癌症和心臟病，近年常踞於十大死因的第三位。");
	NewsItems[i++]= new newsItem("news-2018-1","團體關注高血壓教心肺復甦","2018.5.22","高血壓聯盟今年繼續響應“世界高血壓日”，由澳門基金會支持以“知曉你的血壓”社區推廣活動為主題，於五月十二日下午五時假菜農合群社康年之家舉行了“高血壓預防與心肺復甦術推廣活動”。透過焦點式的培訓讓市民大眾預防高血壓及了解心肺復甦術的技術。");

	NewsItems[i++]= new newsItem("news-2018-2","三成半澳門人有高血壓","2018.3.10","澳門高血壓聯盟、中國高血壓聯盟、廣東省高血壓專委會、澳門介入心血管病學會、中國心力衰竭學會、澳門兒科學會、澳門執業西醫公會、台灣高血壓學會理事長、香港心臟學會、香港結構性心臟病學會、天津高血壓病學會、廣東省介入性心臟病學會、廣東省中西醫結合學會的專家結集本澳，進行研討");

	NewsItems[i++]= new newsItem("news-2017-2","團體辦講座關注高血壓","2017.5.21","由澳門高血壓聯盟聯同鏡湖醫院、澳門心臟學會、澳門介入心血管病學會及救世軍（澳門）合辦，並由澳門基金會支持的「知曉你的血壓」世界高血壓日社區活動於昨日舉行，特邀心內科專家講解高血壓成因、種類及預防措施等，其中特別講解膳食及鹽與高血壓之間的關係以及高血壓會帶來中風的風險，與數百居民共同關注高血壓。");
	NewsItems[i++]= new newsItem("news-2017-1","醫學界籲低鹽防高血壓","2017.5.21","由澳門高血壓聯盟聯同鏡湖醫院、澳門心臟學會、澳門介入心血管病學會及救世軍（澳門）合辦，並由澳門基金會支持的「知曉你的血壓」世界高血壓日社區活動於昨日舉行，特邀心內科專家講解高血壓成因、種類及預防措施等，其中特別講解膳食及鹽與高血壓之間的關係以及高血壓會帶來中風的風險，與數百居民共同關注高血壓。");

	NewsItems[i++]= new newsItem("news-2016-01","兩團體辦社區活動倡關注高血壓","2016.5.25","由澳門高血壓聯盟與工聯台山社區中心合辦的「知曉你的血壓」世界高血壓日社區活動於二零一六年五月二十一日舉行，特邀心內科專家講解高血壓成因、種類及預防措施等，其中特別強調詳細講解膳食以及鹽與高血壓之間的關係，與數百居民共同關注高血壓。");

	NewsItems[i++]= new newsItem("news-2015-01","澳近半數市民患高血壓","2015.5.10","為響應世界高血壓日，推廣市民對高血壓疾病防治知識，澳門高血壓聯盟主辦的2015年世界高血壓日「知曉您的血壓」專題專業講座於昨邀請有關專家為市民介紹高血壓流行現況及相關研究成果。");
	NewsItems[i++]= new newsItem("news-2014-01","團體辦講座關注高血壓","2014","由澳門高血壓聯盟主辦，鏡湖護理學院、街總協辦的“知曉你的血壓”世界高血壓社區活動昨舉行，特邀心內科專家講解高血壓成因、種類及預防措施等，與數百居民共同關注高血壓。");

	NewsItems[i++]= new newsItem("news-2012-1","高血壓危險因素調查科研專案","2012.8.6","澳門高血壓聯盟連同澳門鏡湖護理學院以及澳門街坊聯合總會將會開展一項名為「高血壓的危險因素﹕中國澳門地區大型橫斷面流行病學調查」的科研專案。");

	NewsItems[i++]= new newsItem("news-2011-01","高血壓聯盟訪澳基會","2011.5.28","高血壓聯盟主席馮建章一行四人日前拜訪澳門基金會，受到行政委員會主席吳志良博士的熱情接待，雙方就目前高血壓聯盟的工作情況進行了親切座談。");
	
	NewsItems[i++]= new newsItem("news-2010-05","高血壓聯盟辦研討會訪特首","201012.31","新成立的澳門高血壓聯盟於本月三至五日舉行了首屆“澳門高血壓學術交流研討會”，期間該會負責人及與會的專家學者拜訪了行政長官崔世安。崔世安勉勵澳門高血壓聯盟開展高血壓防治等相關研究與工作，為澳門的醫療、公共衛生及國內外交流合作作更多貢獻。");

	NewsItems[i++]= new newsItem("news-2010-01","祝賀澳門高血壓聯盟成立","2010","澳門高血壓聯盟正式成立及獲世界高血壓聯盟接納為會員並獲澳門特別行政區行政長官崔世安博士接見。");

	NewsItems[i++]= new newsItem("news-2010-02","祝賀澳門高血壓聯盟成立","2010","在我國，高血壓患病的人數甚多,據測可能在2億以上。高血壓患者早期的自覺症狀不多，往往被患者或醫生所忽視，使病情持續隱藏地發展，引起併發症，如卒中、心衰、腎臟受損等。");

	NewsItems[i++]= new newsItem("news-2010-03","最新資訊","","6月13日一15日，中國高血壓聯盟在北京召開第十二屆會議。本刊主編馮建章教授應邀參加會議,並主持會議中有關如何開展社區防治高血壓的工作及交流各地防治的經驗。");
	NewsItems[i++]= new newsItem("news-2010-04","高血壓危險因素調查科研專案","","根據有關資料顯示，澳門近十餘年來心腦血管病的發病率、患病率以及死亡率一直處於較高水平，糖尿病及腦卒中(中風)病人數目不斷增加。而當中高血壓是最為常見的心血管疾病，據統計高血壓病已成為澳門單一疾病的頭號殺手，並有年輕化趨勢。因此，澳門高血壓聯盟連同澳門鏡湖護理學院以及澳門街坊聯合總會將會開展一項名為「高血壓的危險因素﹕中國澳門地區大型橫斷面流行病學調查」的科研專案。");

	NewsItems[i++]= new newsItem("news-2009-01","高血壓無聲的殺手","","根據二零零八年統計局資料顯示，本澳因心血管系統疾病致死者，居死亡數字第二位。而由高血壓病及高血壓心臟病而導致死亡，佔心血管疾病的死亡率百分之四十五，從數據上反映出，高血壓是誘發心血管疾病病發的主要原因之一，可知高血壓對人體健康影響甚大。");

	NewsItems[i++]= new newsItem("news-2009-02","澳十三萬人患高血壓","","慢性疾病、隱性疾病，是現社會人們最易患上而又容易忽略的疾病，對人體健康做成很大的影響，據資料顯示；近十多年來，澳門心血管病的病發率、患病率、以及腦卒中（中風）的病患者數字不斷增加，該些疾病的誘發原因，多是病者患有隱性疾病，例如糖尿病或高血壓，其中又以高血壓為大多數，高血壓病已成為澳門單一疾病的頭號殺手。");

	return NewsItems;
	
}
function itemGroup(items,start)
{
	var nItems= new Array();
	var idx;
	for(idx=0;idx<10;idx++)
		nItems[idx]=items[idx+start];
	return nItems;
}

//	在index.html調用
//
function newsIndex()
{
	var cs=document.currentScript;
	var newsParent=cs.parentNode;
	var newsItems=getNewsItems();
	var i;
	var len = newsItems.length;
	if(len > 10){
		len = 10;
	}
	for(i=0;i<len;i++){
		var anchor = document.createElement('a');
		anchor.className="list-group-item list-group-item-action flex-column align-items-start";
		anchor.href="news/"+newsItems[i].newsurl+".html";
		var div = document.createElement('div');
		div.className="d-flex w-100 justify-content-between";
		var h6 = document.createElement('h6');
		h6.className="mb-1";
		h6.textContent=newsItems[i].newstitle;
		div.appendChild(h6);
		var dat="("+newsItems[i].newsdate +")";
		var p = document.createElement('p');
		p.className="mb-1";
		p.textContent=dat + newsItems[i].newsabstract;
		anchor.appendChild(div);
		anchor.appendChild(p);
		newsParent.appendChild(anchor);
	}
	
}
function news_index(index)
{
	var newsItems=getNewsItems();
	var ns=(index-1)*10;
	newsItems = itemGroup(newsItems,ns);
	addNews(newsItems);
}

function news()
{
	var newsItems=getNewsItems();
	newsItems = itemGroup(newsItems,0);
	addNews(newsItems);
}

function news2()
{
	var newsItems=getNewsItems();
	newsItems = itemGroup(newsItems,10);
	addNews(newsItems);
}

function news3()
{
	var newsItems=getNewsItems();
	newsItems = itemGroup(newsItems,20);
	addNews(newsItems);
}

function jsNews(index)
{
	var cs=document.currentScript;
	var newsParent=cs.parentNode;;

	var div = document.createElement('div');
	div.className="list-group";
	newsParent.appendChild(div);
	var newsItems=getNewsItems();
	var ns=(index-1)*10;
	newsItems = itemGroup(newsItems,ns);
	addNews(newsItems,div);
	cycleNo = ns+1;
	cycle();
}

function addNews(newsItems,pn)
{
	var cs=document.currentScript;
	var newsParent;
	if(pn === undefined)
		newsParent =cs.parentNode;
	else 
		newsParent = pn;
	var i;
	var rel=getRefPath();
	for(i=0;i<newsItems.length;i++){
		if(newsItems[i] === undefined)
			break;
		var anchor = document.createElement('a');
		anchor.className="list-group-item list-group-item-action flex-column align-items-start";
		anchor.href=rel + "news/"+newsItems[i].newsurl+".html";
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
