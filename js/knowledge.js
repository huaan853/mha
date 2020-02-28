// JavaScript Document
function KnowledgeItem(itemurl,itemtitle,itemabstract)
{
	this.itemurl=itemurl;
	this.itemtitle=itemtitle;
	this.itemabstract=itemabstract;
}
function getKnowledgeItems()
{
	var knowledgeItems= new Array();
	var i=0;
	knowledgeItems[i].dir='guideline';
	knowledgeItems[i++]=new KnowledgeItem("guideline","高血壓管理指南","國際機構、中國相關部門根據高血壓情況及時發佈新的高血壓指南");
	knowledgeItems[i++]=new KnowledgeItem("01_XueYa","血壓","人的血液輸送到全身各部位需要一定的壓力，即心臟的收縮、舒張交替進行，推動血液在心髒和血管組成的密閉循環系統內持續流動，血液在血管內流動時對管壁造成的單位面積血管壁的側壓力，即壓強。此壓強叫血壓。血管分動脈、毛細血管和靜脈，所以，也就有動脈血壓、毛細血管壓和靜脈血壓。通常所說的血壓是指動脈血壓。當血管擴張時，血壓下降；血管收縮時，血壓升高。");
	return knowledgeItems;
}
function knowledge()
{
	var cs=document.currentScript;
	var itemParent=cs.parentNode;
	var knowledgeItems=getKnowledgeItems();
	var i;
	for(i=0;i<knowledgeItems.length;i++){

	}
}



