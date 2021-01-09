let nav = document.querySelector('nav');
let header= document.querySelector('header')
let logo = document.querySelector('.logo');
let hamburger_ = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav');
let contatti = document.querySelector('.contatti');
let carriera = document.querySelector('.carriera');
let progetti = document.querySelector('.progetti');
let home = document.querySelector('.home');
let ul=navbar.firstElementChild;
let li = ul.children;
let footer = document.querySelector('footer')
console.log(li)
function hamburger() {
    let x = document.querySelector('.line1');
    let y = document.querySelector('.line2');
    let z = document.querySelector('.line3');
    nav.classList.toggle('open');
    logo.classList.toggle('logo_open');
    hamburger_.classList.toggle('hamburger_open');
    navbar.classList.toggle('nav_open');
    ul.classList.toggle('ul_open');
    for(let i=0; i>li.length ; i++){
      li[i].classList.toggle('li_open');
    }
    header.classList.toggle('header_open')
    footer.classList.toggle('display')
    
    x.classList.toggle("change1");
    y.classList.toggle("change2");
    z.classList.toggle("change3");
    if(contatti){
      contatti.classList.toggle('display');
      return
    }else if(home){
      home.classList.toggle('display');
      return
    }
    else if(carriera){
      carriera.classList.toggle('display');
      return
    }else{
      progetti.classList.toggle('display');
      return
    }
  }