	let er=document.getElementById("er");
	let t=document.getElementById("t");
	let y=document.getElementById("y");
	let z=document.getElementById("z");
	let li=document.getElementById("lbu").children
	
	let x=0;
	let yuan=function(){
		for(let i=0;i<li.length;i++){
			li[i].className="lb";
			li[i].style.width='10px'
		}
	}
	let right=function(){
		x++;
		if(x>3){
			x=0;
		}
		t.src=x+'.jpg';
		yuan();
		li[x].className="te";
		li[x].style.width="50px";
	}
	y.onclick=right;
	z.onclick=function(){
		x--;
		if(x<1){
			x=3;
		}
		t.src=x+".jpg";
		yuan();
		li[x].style.width="50px";
		li[x].className="te"
	}
	
	let js=setInterval(right,3000);
	
	er.onmouseenter=function(){
		clearInterval(js);
	}
	er.onmouseleave=function(){
		js=setInterval(right,3000)
	}

	
	for(let b=0;b<li.length;b++){
		li[b].onclick=function(){
			x=b;
			t.src=x+".jpg";
			yuan();
			li[x].className="te";
			li[x].style.width="50px";
		}
	}



