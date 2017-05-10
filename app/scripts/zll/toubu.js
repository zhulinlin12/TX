window.onload=function(){
	function myrefresh()
{
   window.location.reload();
   console.log(8888)
}
var t1=setTimeout(myrefresh,8000); //指定1秒刷新一次
window.clearTimeout(t1);	
//	var xe=document.getElementById("kehu1");
//	 var po=xe.getElementsByTagName('span');
//	 for(var i=0;i<po.length;i++){
//	 	po[i].index=i;
//	 	po[i].onclick=function(){
//	 		for(var i=0;i<po.length;i++){
//	 			po[i].className=''
//	 		}
//	 		this.className='ahover'
//	 	}
//	 	
//	 }
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
}
	 