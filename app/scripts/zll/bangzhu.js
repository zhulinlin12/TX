window.onload=function(){
	//帮助中心

    
    var oUl = document.getElementById('ul');
	var aH2 = oUl.getElementsByTagName('span');
	var aUl = oUl.getElementsByTagName('div');
	var aLi = null;
	var arrLi = [];
	for( var i=0; i<aH2.length; i++ ){
		aH2[i].index = i;
		aH2[i].onclick = function (){
			for( var i=0; i<aH2.length; i++ ){
				if( i != this.index ){
					aUl[i].style.display= 'none';
					aH2[i].className = '';
				}
			}
			
			if( this.className == '' ){
				aUl[this.index].style.display = 'block';
				this.className = 'act';
			} else {
				aUl[this.index].style.display = 'none';
				this.className = '';
			}
		};
	}
	
	for( var i=0; i<aUl.length; i++ ){
		aLi = aUl[i].getElementsByTagName('pa');
		for( var j=0; j<aLi.length; j++ ){
			arrLi.push( aLi[j] );
		}
	}
	
	for( var i=0; i<arrLi.length; i++ ){
		arrLi[i].onclick = function (){
			
			for( var i=0; i<arrLi.length; i++ ){
				if( arrLi[i] !=this ){
					arrLi[i].className = '';
				}
			}
			if( this.className == '' ){
				this.className = 'hover';
			}else{
				this.className = '';
			}
		};
	}
}
