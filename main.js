let responsiveNav = document.querySelector(".responsive-side-menu");
let responsiveMenuIcon = document.querySelector(".menu-icon");

// Listening to events when the icon is clicked

let hasDisplayed = false;

responsiveMenuIcon.addEventListener("click", event=>{
    if(hasDisplayed){
        responsiveNav.style.display = "none";
        hasDisplayed = false;
    } else{
        responsiveNav.style.display = "block";
        hasDisplayed = true;
    }
})

responsiveNav.addEventListener("click", event => {
    if(event.target === responsiveNav){
        responsiveNav.style.display = "none";
    }

    hasDisplayed = false;
})