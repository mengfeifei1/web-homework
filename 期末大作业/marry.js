window.onload=function(){
	var look=document.getElementById('look');
	var links=look.children;
	var idea=document.getElementById('idea');
	var span1=document.getElementsByClassName('span1')[0];
	var span2=document.getElementsByClassName('span2')[0];
	var abc=parseInt(span2.style.left);
	var c2=document.getElementsByClassName('c2');
	var xn=document.getElementsByClassName('xn');
	var kt=document.getElementsByClassName('kt')[0];
	var banner1=document.getElementById('banner1');
	var two=document.getElementsByClassName('two');
	for(var n=0;n<9;n++)
	{
		two[n].index=n;
		banner1.children[n].index=n;
		two[n].onmouseover=function(){
			banner1.children[this.index].children[0].setAttribute
			('style','background-color:#4682b3');
		}
		two[n].onmouseout=function(){
			banner1.children[this.index].children[0].setAttribute
			('style','background-color:#f7f7f7');
		}
		banner1.children[n].onmouseover=function(){
			banner1.children[this.index].children[0].setAttribute
			('style','background-color:#4682b3');
		}
		banner1.children[n].onmouseout=function(){
			banner1.children[this.index].children[0].setAttribute
			('style','background-color:#f7f7f7');
		}
	}
	kt.onmouseover=function(){
		kt.setAttribute('style','background-color:pink');
	}
	kt.onmouseout=function(){
		kt.setAttribute('style','background-color:#fff0f5');
	}
	for(var j=0;j<8;j++)
	{
		c2[j].index=j;
		c2[j].onmouseover=function(){
			c2[this.index].setAttribute('style','background-color:pink');
		}
		c2[j].onmouseout=function(){
			c2[this.index].setAttribute('style','background-color:#fff0f5');
		}
	}
	for(var k=0;k<4;k++)
	{
		xn[k].index=k;
		xn[k].onmouseover=function(){
			xn[this.index].setAttribute('style','background-color:pink');
			xn[this.index].children[0].src='images/f'+this.index+'.jpg';
		}
		xn[k].onmouseout=function(){
			xn[this.index].setAttribute('style','background-color:#fff0f5');
			xn[this.index].children[0].src='images/b'+this.index+'.jpg';
		}
	}
	var time=setInterval(change,20);
	idea.onmouseover=function(){
		clearInterval(time);
	}
	idea.onmouseout=function(){
		time=setInterval(change,20);
	}
	function change(){
		if(parseInt(span1.style.left)+abc<0)
		{
			span1.style.left=0+'px';
			span2.style.left=1070+'px';
			span1.style.left=parseInt(span1.style.left)-1+'px';
			span2.style.left=parseInt(span2.style.left)-1+'px';
		}
		else{
			span1.style.left=parseInt(span1.style.left)-1+'px';
			span2.style.left=parseInt(span2.style.left)-1+'px';
		}
	}
	var i=0;
	function move(){
		links[i%6].style.display='none';
		i++;
		links[i%6].style.display='block';
	}
	var timer=setInterval(move,1500);
	look.onmouseover=function(){
		clearInterval(timer);
	}
	look.onmouseout=function(){
		timer=setInterval(move,1500);
	}
}