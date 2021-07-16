
  var slider_cont = document.getElementById('box');
  var image = ['a','b','c','d'];
  var i = image.length;
  
  
  function nextImage(){
    if(i<image.length){
      i=i+1;
    }else{
      i=1;
    }
    console.log("hello");
    slider_cont.innerHTML = " <img src=./"+image[i-1]+".jpg>";
  }
  
  
  setInterval(nextImage, 1500);