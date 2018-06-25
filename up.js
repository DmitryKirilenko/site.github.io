
var scrolled;
var timer;
var up = document.querySelector("#up");
  up.onclick = function() {
     scrolled = window.pageYOffset;
     scrollToTop();
  }
  function scrollToTop(){

    if(scrolled>0){
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 20;
      timer = setTimeout(scrollToTop, 10);
      
    }
    else{
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
 }

