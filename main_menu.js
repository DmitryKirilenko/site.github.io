window.onload = function(){
  var menu=document.querySelector(".header-bottom");
  window.onscroll=function() {
  if(window.pageYOffset >= 1000){
     menu.style.position = "fixed";
     menu.style.top = "0";
     menu.style.width = "100%";
     menu.style.backgroundColor = "white";
  }
  else{ 
     menu.style.position = null; 
     menu.style.top = null;
     menu.style.width = null;
     menu.style.backgroundColor = null;  
  }
  if(window.pageYOffset >= 1700){
  	 up.style.opacity = "1";
  }
  else{
  	 up.style.opacity = null;
  }
}
}

