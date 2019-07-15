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