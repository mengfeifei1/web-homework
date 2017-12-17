window.onload=function(){
var picScroll=document.getElementById('picScroll');
var picScroll1=document.getElementById('picScroll1');
var picScroll2=document.getElementById('picScroll2');
var timer;
	timer=setInterval( changeToleft,10);
	picScroll.onmouseover=function(){
		clearInterval(timer);
	}
	picScroll.onmouseout=function(){
		timer=setInterval( changeToleft,10);
	}
	function changeToleft()
	{
		if(parseInt(picScroll1.style.left)+picScroll1.offsetWidth+665<0)
		//665是picScroll2初始的style.left-picScroll1.offsetWidth
		{
			picScroll1.style.left=0+'px';
			picScroll2.style.left=2065+'px';
			picScroll1.style.left=parseInt(picScroll1.style.left)-1+'px';
			picScroll2.style.left=parseInt(picScroll2.style.left)-1+'px';
		}
		else{
			picScroll1.style.left=parseInt(picScroll1.style.left)-1+'px';
			picScroll2.style.left=parseInt(picScroll2.style.left)-1+'px';
		}
	}
}