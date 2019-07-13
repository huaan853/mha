// JavaScript Document
function MenuItem(fileName,desc)
{
	this.fileName=fileName;
	this.desc=desc;
}
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
//	由於button屬性不能被chrome接受，不能設置button全部屬性
//	只好在html保留button
function menu(active)
{
	var a=document.getElementsByTagName("nav");
	var na=a[0];
	var index= new MenuItem("index","首頁");	
	var constitution= new MenuItem("constitution","聯盟章程");
	var about= new MenuItem("about","聯盟簡介");
	var news= new MenuItem("news","聯盟動態");
	var activity= new MenuItem("activity","活動花絮");
	var research= new MenuItem("research","研究成果");
	var healthKnowledge= new MenuItem("healthKnowledge","健康教育");
	var register= new MenuItem("register","會員登記");
	var items =[index,constitution,about,news,activity,research,healthKnowledge,register];
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
			var span1 = document.createElement('span');
			span1.className="sr-only";
			span1.text='(current)';
			a.appendChild(span1);
		}
		li.appendChild(a);
		ul.appendChild(li);
	}
	div.appendChild(ul);
	na.appendChild(div);
}
