// JavaScript Document
function MenuItem(fileName,desc)
{
	this.fileName=fileName;
	this.desc=desc;
}
function menu(active)
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
    document.write("<ul class='navbar-nav mr-auto justify-content-between' style='width:100%'>");
	for(i=0;i<items.length;i++){
        document.write("<li class='nav-item'> <a class='nav-link");
		if(items[i].fileName==active){
			document.write(" active");	
		}
		document.write("' href='../");
		document.write(items[i].fileName);
		document.write(".html'>");
		document.write(items[i].desc);
		if(items[i].fileName==active){
			document.write("<span class='sr-only'>(current)</span>");	
		}
		document.write("</a> </li>");
	}
    document.write("</ul>");	
}
