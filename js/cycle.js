// JavaScript Document
//	顯示實心圓數字
var	cycleNo =1;
function cycle()
{
	var h6=document.getElementsByTagName('h6');
	var i;
	for(i=0;i<h6.length;i++){
		var span = document.createElement('span');
		span.className='badge badge-danger badge-pill';
		span.textContent=cycleNo.toString();
		cycleNo+=1;
		var n=h6[i].childNodes[0];
		h6[i].insertBefore(span,n);
	}
}
//	2022.5.15
//	
function navpage(curPage)
{
	var a=document.getElementsByTagName("nav");
	var na=a[1];
	var hrels=new Array();
	hrels[0]="news";
	hrels[1]="news/news-p2";
	hrels[2]="news/news-p3";
	hrels[3]="news/news-p4";
	hrels[4]="news/news-p4";
	var nav=document.createElement("nav");
	nav.setAttribute('aria-label','Page navigation example');
	var ul=document.createElement("ul");
	ul.className="pagination justify-content-end";
	var rel=getRefPath();
	var i;
	for(i=0;i<hrels.length+2;i++){
		var ui=document.createElement("ui");
		ui.className="page-item";
		if(i== curPage){
			ui.className ="page-item active";
		}
		var a=document.createElement("a");
		a.className="page-link";
		if(i==0){
			a.href="";
			a.textContent="前一頁";
			if(curPage == 1){
				ui.className ="page-item disabled";	
			}else {
				var k=curPage-2;
				a.href=rel + hrels[curPage-2]+".html?p="+k;		
			}
		}else if(i==hrels.length+1){
			a.href="";
			a.textContent="下一頁";
			if(curPage == hrels.length ){
				ui.className ="page-item disabled";	
			}else {
				a.href=rel + hrels[curPage]+".html?p="+curPage;				
			}
		}else {
			var k=i-1;
			a.href=rel + hrels[i-1]+".html?p="+k;
			a.textContent=i.toString();
		}
		ui.appendChild(a);
		ul.appendChild(ui);
	}
	nav.appendChild(ul);
	var cs=document.currentScript;
	var navParent=cs.parentNode;
	navParent.appendChild(nav);
		
}