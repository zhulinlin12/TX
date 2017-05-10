// JavaScript Document

window.onload=function(){
	var xe=document.getElementById("kehu1");
	 var po=xe.getElementsByTagName('span');
	 for(var i=0;i<po.length;i++){
	 	po[i].index=i;
	 	po[i].onclick=function(){
	 		for(var i=0;i<po.length;i++){
	 			po[i].className=''
	 		}
	 		this.className='ahover'
	 	}
	 	
	 }
    var xi=document.getElementById("kehu");
    var li=xi.getElementsByTagName('li');
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onmouseover=function(){
    		this.getElementsByTagName('b')[0].className='hover';
    		this.getElementsByTagName('div')[0].style.display='block';
    	}
    	li[i].onmouseout=function(){
    		this.getElementsByTagName('b')[0].className='';
    		this.getElementsByTagName('div')[0].style.display='none';
    	}
    }
    //搜索框
	var Ss=document.getElementById('ssk');
	var Sw=document.getElementById('sl');
	var Se=document.getElementById('lkk');
	var Sr=document.getElementById('ll');
	var St=document.getElementById('lk');
	var inpt=document.getElementById('inp');
	St.onclick=function(){
		var jj=Se.innerHTML;
		Se.innerHTML=St.innerHTML
		St.innerHTML=jj
		if(Se.innerHTML=='公司'){
			inpt.placeholder="请输入公司名称或关键词来搜索公司信息"
		}else if(Se.innerHTML=='求购'){
			inpt.placeholder="请输入关键词来搜索求购信息"
		}else if(Se.innerHTML=='商品'){
			inpt.placeholder="请输入产品名或关键词进行搜索公司信息"
		}
	}
Sr.onclick=function(){
		var jj=Se.innerHTML;
		Se.innerHTML=Sr.innerHTML
		Sr.innerHTML=jj
		if(Se.innerHTML=='公司'){
			inpt.placeholder="请输入公司名称或关键词来搜索公司信息"
		}else if(Se.innerHTML=='求购'){
			inpt.placeholder="请输入关键词来搜索求购信息"
		}else if(Se.innerHTML=='商品'){
			inpt.placeholder="请输入产品名或关键词进行搜索公司信息"
		}
		
	}
	Sw.onmouseover=function(){
	   this.style.background="#f5f5f5"
	}
	Sw.onmouseout=function(){
			this.style.background="#fff"
	}
		
	Ss.onmouseover=function(){
			
			this.getElementsByTagName('b')[0].className='hover';
			this.getElementsByTagName('div')[0].style.display='block';
		}
	Ss.onmouseout=function(){
	
			this.getElementsByTagName('b')[0].className='';		
			this.getElementsByTagName('div')[0].style.display='none';
	}
	//二级导航	
	var Er=document.getElementById("erdh");
    var Li=Er.getElementsByTagName('li');
    for(var i=0;i<Li.length;i++){
    	Li[i].index=i;
    	Li[i].onmouseover=function(){
    		Li[this.index].style.background="#9ac1f6";
    		this.getElementsByTagName('span')[0].style.color='black'
    		this.getElementsByTagName('img')[0].style.opacity='1';
    		this.getElementsByTagName('div')[0].style.display='block';
    	}
    	Li[i].onmouseout=function(){
    		Li[this.index].style.background="#004eb9";
    		this.getElementsByTagName('img')[0].style.opacity='.5';
    		this.getElementsByTagName('span')[0].style.color='#fff'
    		this.getElementsByTagName('div')[0].style.display='none';
    	}
    }	
	//楼层	
	var _top;
	var speed;
    var timer;
    var shu;
    var fixed=document.getElementById('fixed');
    var aLi=fixed.getElementsByTagName('li');
  function daohang(MB){
	clearInterval(timer);
	_top=document.documentElement.scrollTop||document.body.scrollTop;
	timer=setInterval(function(){
	speed=(MB-_top)/7;
	speed=Math.floor(speed);
		if(speed==0){
			clearInterval(timer);
		}else{
		window.scrollBy(0,speed);}
	},25);	
}
  


fixed.children[0].onclick=function(){
	daohang(1230);
}
fixed.children[1].onclick=function(){
	daohang(1690);
}
fixed.children[2].onclick=function(){
	daohang(2150);
}
fixed.children[3].onclick=function(){
	daohang(2590);
}
fixed.children[4].onclick=function(){
	daohang(3000);
}
fixed.children[5].onclick=function(){
	daohang(3450);
}
fixed.children[6].onclick=function(){
	daohang(3900);
}
fixed.children[7].onclick=function(){
	daohang(4330);

}
fixed.children[8].onclick=function(){
	daohang(4450);


}
	onscroll=function(){

_top=document.documentElement.scrollTop||document.body.scrollTop;
if(_top>100){
fixed.style.position='fixed';
fixed.style.top='30px';
fixed.style.left='100px'
fixed.style.display='block'

}else{
fixed.style.position='absolute';
fixed.style.top='60px';
fixed.style.left='-80px'
	
}

if(_top>=1200&&_top<1670){
aLi[0].firstChild.style.display='none';
aLi[0].lastChild.style.display='block';
aLi[0].style.background="#006cff"
}else{
aLi[0].firstChild.style.display='inline-block';
aLi[0].lastChild.style.display='none';
aLi[0].style.background="#fff"	
}
if(_top>=1670&&_top<2100){
aLi[1].firstChild.style.display='none';
aLi[1].lastChild.style.display='block';
aLi[1].style.background="#006cff"
}else{
aLi[1].firstChild.style.display='inline-block';
aLi[1].lastChild.style.display='none';
aLi[1].style.background="#fff"		
}
if(_top>=2100&&_top<2500){
aLi[2].firstChild.style.display='none';
aLi[2].lastChild.style.display='block';
aLi[2].style.background="#006cff"
}else{
aLi[2].firstChild.style.display='inline-block';
aLi[2].lastChild.style.display='none';
aLi[2].style.background="#fff"		
}
if(_top>=2500&&_top<2900){
aLi[3].firstChild.style.display='none';
aLi[3].lastChild.style.display='block';
aLi[3].style.background="#006cff"
}else{
aLi[3].firstChild.style.display='inline-block';
aLi[3].lastChild.style.display='none';
aLi[3].style.background="#fff"		
}
if(_top>=2900&&_top<3400){
aLi[4].firstChild.style.display='none';
aLi[4].lastChild.style.display='block';
aLi[4].style.background="#006cff"
}else{
aLi[4].firstChild.style.display='inline-block';
aLi[4].lastChild.style.display='none';
aLi[4].style.background="#fff"		
}
if(_top>=3400&&_top<3800){
aLi[5].firstChild.style.display='none';
aLi[5].lastChild.style.display='block';
aLi[5].style.background="#006cff"
}else{
aLi[5].firstChild.style.display='inline-block';
aLi[5].lastChild.style.display='none';
aLi[5].style.background="#fff"		
}
if(_top>=3800&&_top<4300){
aLi[6].firstChild.style.display='none';
aLi[6].lastChild.style.display='block';
aLi[6].style.background="#006cff"
}else{
aLi[6].firstChild.style.display='inline-block';
aLi[6].lastChild.style.display='none';
aLi[6].style.background="#fff"		
}
if(_top>=4300&&_top<4350){
aLi[7].firstChild.style.display='none';
aLi[7].lastChild.style.display='block';
aLi[7].style.background="#006cff"
}else{
aLi[7].firstChild.style.display='inline-block';
aLi[7].lastChild.style.display='none';
aLi[7].style.background="#fff"		
}

if(_top>=4350){
aLi[8].firstChild.style.display='none';
aLi[8].lastChild.style.display='block';
aLi[8].style.background="#006cff"
}else{
aLi[8].firstChild.style.display='inline-block';
aLi[8].lastChild.style.display='none';
aLi[8].style.background="#fff"		
}
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
aLi[i].onmouseover=function(){
aLi[this.index].firstChild.style.display='none';
aLi[this.index].lastChild.style.display='block';
aLi[this.index].style.background="#006cff"
		
}

}
aLi[0].onmouseout=function(){
			if(_top>=1200&&_top<1660){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}	
}
aLi[1].onmouseout=function(){
		if(_top>=1660&&_top<2100){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}
}
aLi[2].onmouseout=function(){
			if(_top>=2100&&_top<2500){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}	
}
aLi[3].onmouseout=function(){
	if(_top>=2500&&_top<2900){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}
}
aLi[4].onmouseout=function(){
		if(_top>=2900&&_top<3400){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}
}
aLi[5].onmouseout=function(){
	if(_top>=3400&&_top<3800){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}
}
aLi[6].onmouseout=function(){
	if(_top>=3800&&_top<4300){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}	
}
aLi[7].onmouseout=function(){
		if(_top>=4300&&_top<4350){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}		
}
aLi[8].onmouseout=function(){
	if(_top>=4350){
this.firstChild.style.display='none';
this.lastChild.style.display='block';
this.style.background="#006cff"	
			
		}else{
this.firstChild.style.display='inline-block';
this.lastChild.style.display='none';
this.style.background="#fff"
		}
}
	}
	


	}
