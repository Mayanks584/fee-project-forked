/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu') /* navigation of menu elements by nav menu id */
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* this is use for responsive when we click the nav
bar in moblie then it disppear the menu bar*/
/*=============== CHANGE BACKGROUND HEADER  jasie jaise mouse niche jayege waise waise head ka color change hota rahega ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
} 
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add
    /*when it is more then 200 then it add scroll up into show scrooll*/('show-scroll'); else scrollUp.classList.remove('show-scroll')
}/*this  is abouut speed of scrolling if greater then 200 it do then it add show scrool to make button visible*`/
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset /* this capture how far the user scrolled vertically in the browser */
    

    sections.forEach(current =>{ /* .for each is section one by one can identify the scroll position */
        const sectionHeight = current.offsetHeight /*This stores the height of the current section in pixels. */
        const sectionTop = current.offsetTop - 50;  /* 50 is navigation bar height */ 
        sectionId = current.getAttribute('id') /* this store the id attribute of section */

        if(scrollY > sectionTop/* Ensures that the scroll position has reached at least the top of the section.*/ &&/*this is and operator*/ scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,/*  2.5 sec*/
    delay: 400, /* it gives a slight pause of 400milisecomd before the animation start*/
    // reset: true
})
/* reveal is use to animate different elements */
sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})
/* in this we done animation that this text or image come for left right or top etc */
sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)/* this is default setting of distance delay and duration */