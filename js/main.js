/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId) ,
    nav = document.getElementById(navId)
    if (toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        });
    }
}
showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU MOBILE =====*/
const navlink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if(scrollY>sectionTop&& scrollY<=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link')
        }
    }
    )
}
window.addEventListener('scroll',scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY>= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*===== SHOW SCROLL TOP =====*/ 
function scrolltop(){
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY>= 560) scrollTop.classList.add('show-scroll'); else header.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrolltop)
/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});
/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')
function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('.active-portfolio'))
        this.classList.add('.active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))
/*===== SWIPER CAROUSEL =====*/
/*===== GSAP ANIMATION =====*/ 
const progress_bar = document.querySelectorAll(".skills svg circle");
window.addEventListener("scroll", ()=>{
  console.log("hello")
})
const header = document.querySelector("header");
const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");
window.addEventListener("scroll", ()=>{
  skillsCounter();
})

function updateCount(num, maxNum) {
  let currentNum ;
  currentNum = currentNum + num.innerText;
  
  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}
function hasReached(el){
  let Position_top = el.getBoundingClientRect().top;
  if (window.innerHeight >= Position_top + el.offsetHeight) return true;
  return false;
}


function skillsCounter(){
  //console.log("you are reached the skill section")//
  if (!hasReached(first_skill)) return;
  sk_counter.forEach((counter, i) =>{
    let target = +counter.dataset.target;
    let strokeValue = 427 - 427 * (target/100);
    progress_bars[i].style.setProperty("--target", strokeValue);

    setTimeout((counter, target)=>{
      updateCount(counter, target);
    },400);
  });
 
  progress_bars.forEach((p) => (p.style.animation="progress 2s ease-in-out forwards"))
  ;
}
