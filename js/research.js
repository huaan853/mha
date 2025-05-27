// JavaScript Document
//	2025.5.27
//

function getNode()
{
	var cs=document.currentScript;
	var curParent=cs.parentNode;
	return curParent;
}

function createAnchor(url)
{
	var anchor = document.createElement('a');
	anchor.className="list-group-item list-group-item-action flex-column align-items-start";
	anchor.href=url;
	return anchor;
}

function createH6(title)
{
	var h6 = document.createElement('h6');
	h6.className="mb-1";
	h6.textContent=title;
	return h6;
}

function createDiv(child)
{
	var div = document.createElement('div');
	div.className="d-flex w-100 justify-content-between";
	div.appendChild(child);
	return div;
}

function createPara(content)
{
	var p = document.createElement('p');
	p.className="mb-1";
	p.textContent=content;
	return p;
}

function showItem(title,content,url)
{
	var curParent=getNode();
	var anchor = createAnchor(url);
	var h6 = createH6(title);
	var div = createDiv(h6);
	var p = createPara(content);

	anchor.appendChild(div);
	anchor.appendChild(p);
	curParent.appendChild(anchor);
		
}

var researItems=[
	{title:"Vitamin D Status and Hypertension: A Review",
	 content:"2015.4.8",
	 url:"research/20150408_VitaminDStatusHypertension.html"},
	{title:"Vitamin D and Parathyroid Hormone Status in a Representative Population Living in Macau, China",
	 content:"2015.1.23",
	 url:"research/20150123_VitaminDParathyroid.html"},
	{title:"Prevalence, Awareness, Treatment and Control of Hypertension in Macau: Results From a Cross-Sectional Epidemiological Study in Macau, China",
	 content:"2014.7.25",
	 url:"research/20140725_PrevalenceAwarenessTreatment.html"},
	{title:"Modifiable Risk Factors including Sunlight Exposure and Fish Consumption are Associated with Risk of Hypertension in a Large Representative Population from Macau",
	 content:"2013.11.1",
	 url:"research/20131101_ModifiableRiskFactors.html"}
	
	
];
function researchIndex()
{
	var len = researItems.length;
	for(i=0;i<len;i++){
		item=researItems[i];
		showItem(item.title,item.content,item.url);
	}
}
