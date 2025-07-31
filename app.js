// secondary cta(call to action)
let sb = document.querySelectorAll(".button.secondary");
sb.forEach((button)=>{
    button.addEventListener('touchstart', ()=>{
        console.log('count me !');
        button.classList.remove("secondary");
        button.classList.add("primary");
    })
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
});