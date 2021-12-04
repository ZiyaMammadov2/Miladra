let menu = document.querySelector(".menu");
let Lone = document.querySelector(".lineone");
let Ltwo = document.querySelector(".linetwo");
let Lthree = document.querySelector(".linethree");
let Tmenu = document.querySelector(".togglemenu");
menu.addEventListener("click", function (e) {

  if (Lthree.style.display != "none") {
    Lthree.style.display = "none";
    Lone.style.transform = "rotateZ(45deg)";
    Lone.style.top = "9px";
    Ltwo.style.transform = "rotateZ(-45deg)";
    Ltwo.style.bottom = "9px";
    Tmenu.style.display = "inline-block";
    Tmenu.style.opacity = 1;
  } else {
    Lthree.style.display = "inline-block";
    Lone.style.transform = "rotateZ(0deg)";
    Lone.style.top = "0";
    Ltwo.style.transform = "rotateZ(0deg)";
    Ltwo.style.bottom = "0";
    Tmenu.style.displa = "none";
    Tmenu.style.opacity = 0;
  }
});



let bar = document.querySelector(".bar");
let up = document.querySelector(".up");

function CheckY() {
  let position = window.scrollY;

  if (position > 51) {
    bar.style.backgroundColor = "#0D0D0D";
  } else {
    bar.style.backgroundColor = "transparent";
  }

  if(position > 600){
    up.style.opacity=1;
    up.style.zIndex=200;
  }else{
    up.style.opacity=0;
    up.style.zIndex=-200;
  }
}

window.addEventListener("scroll", CheckY);


up.addEventListener("mousedown",()=>{
  up.style.transform = "scale(0.9)";
});

up.addEventListener("mouseup",()=>{
  up.style.transform = "scale(1)";
});

up.addEventListener("click",()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});






let portfoliomenubtn = document.getElementsByClassName("portfoliomenubtn");

Array.from(portfoliomenubtn).forEach((element) =>
  element.addEventListener("click", function (e) {
    e.preventDefault();

  })
);


let slider = document.querySelector(".slider");


slider.addEventListener("mousedown",()=>{
  slider.style.animationPlayState="paused";
});
slider.addEventListener("mouseup",()=>{
  slider.style.animationPlayState="running";
});