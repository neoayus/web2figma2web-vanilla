// secondary cta(call to action)
let sb = document.querySelectorAll(".button.secondary");
sb.forEach((button)=>{
    button.addEventListener('touchstart', ()=>{
        console.log('count me !');
        button.classList.remove("secondary");
        button.classList.add("primary");
    })
});
