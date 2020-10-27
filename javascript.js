window.addEventListener("scroll",function(){
  var header=document.querySelector("header");
  let windowPosition= window.scrollY>100;
  header.classList.toggle("blurrycontent",windowPosition);
})
