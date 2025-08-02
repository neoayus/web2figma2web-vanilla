// Strict the whole content's width to the vw :   
vw = document.documentElement.clientWidth; 
// document.body.style.width = `${vw}px`;
// document.body.style.overflowX = "hidden";

// secondary cta(call to action)
// let sb = document.querySelectorAll(".button.secondary");
// sb.forEach((button)=>{
//     button.addEventListener('touchstart', ()=>{
//         button.classList.remove("secondary");
//         button.classList.add("primary");
//     })
// });

// //  primary cta(call to action)
// let pb = document.querySelectorAll(".button.primary");
// pb.forEach((button)=>{
//     button.addEventListener('touchstart', ()=>{
//         button.classList.remove("primary");
//         button.classList.add("secondary");
//     })
// });
// 

// toggle bw primary and secondary button : 
let btn = document.querySelectorAll(".primary, .secondary");
btn.forEach((button)=>{
    button.addEventListener('touchstart',()=>{
        if(button.classList.contains('primary')){
            button.classList.remove('primary');
            button.classList.add('secondary');
        }else if(button.classList.contains('secondary')){
            button.classList.remove('secondary');
            button.classList.add('primary');
        }
    });
});

// Hamburger button CTA: 
let ham = document.querySelector(".icon.hamburger-menu");
ham.addEventListener('touchstart',()=>{
    // icons to hide
    let apple = document.querySelector(".icon.apple");
    let search = document.querySelector(".icon.search");
    let store = document.querySelector(".icon.store");

    let iconsToHide = [apple, search, store, ham];
    iconsToHide.forEach((icon)=>{
        icon.classList.add("hidden");
    });

    // icon to unhine : cross icon
    let cross = document.querySelector(".icon.cross");
    cross.classList.remove("hidden");
    
    // nav dropdown list 
    let list = document.querySelector(".nav-list");
    list.classList.remove("hidden");
    
    // disable scroll on body : 
    document.body.classList.add("noscroll");
    
});

// Cross Button CTA: 
let cross = document.querySelector(".icon.cross");
cross.addEventListener('touchstart',()=>{
    // hide list 
    let list = document.querySelector(".nav-list");
    list.classList.add("hidden");
    
    // hide cross icon 
    let cross = document.querySelector(".icon.cross");
    cross.classList.add("hidden");

    // un-hide multiple icons 
    let apple = document.querySelector(".icon.apple");
    let search = document.querySelector(".icon.search");
    let store = document.querySelector(".icon.store");
    let ham = document.querySelector(".icon.hamburger-menu");

    let iconsToUnHide = [apple, search, store, ham];
    iconsToUnHide.forEach((icon)=>{
        icon.classList.remove("hidden");
    });

    //  remove scroll lock : 
    document.body.classList.remove("noscroll");
});

// Slider function 
// make it slide
let left = document.querySelector(".left.slider-nav-btn");
let right = document.querySelector(".right.slider-nav-btn");
let sliderTrack = document.querySelector(".slider-track-inner"); 
vw = document.documentElement.clientWidth; 
let locX = 0; 

left.addEventListener('touchstart', ()=>{
    if(!(locX > 0)){
        if(locX == 0){
            console.log("can't load any more posters to right ");
        }else{
            sliderTrack.style.transform = `translateX(${locX - -vw}px)`;
            // locX = locX+ -vw; 
            locX-= -vw; 
        }
    }
})

right.addEventListener('touchstart', ()=>{
    // to check if we are on the first or last poster 
    if(!(locX <= -(vw*9))){
        if(locX == 0){
            sliderTrack.style.transform = `translateX(-${vw}px)`;
            locX = -vw; 
        }else{
            sliderTrack.style.transform = `translateX(${locX + -vw}px)`;
            // locX = locX+ -vw; 
            locX+= -vw; 
        }
    }
})