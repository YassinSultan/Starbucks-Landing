let thumbs = document.querySelectorAll(".thumbs ul li")
let circle = document.querySelector(".circle")
let mainImg = document.querySelector(".mainImg")
function changeCircle(color) {
    document.documentElement.style.setProperty('--main-color', `${color}`);
}
function changeImg(src) {
    setTimeout(() => {
        mainImg.src = src
    }, 200);
}
function changeThumbs(thumb) {
    thumbs.forEach(thumb2 => {
        if (thumb2.classList = "active") {
            thumb2.classList.remove("active")
        }
    })
    thumb.classList.add("active")
}
thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        changeThumbs(thumb)
        changeCircle(thumb.dataset.color)
        changeImg(thumb.dataset.src)
    })
});


//change navbar color
/* window.addEventListener("resize",()=>{
    if (window.innerWidth < 767.98){
        let navbar = document.querySelector(".navbar")
        navbar.classList.add("navbar-dark")
    }
    else{
        let navbar = document.querySelector(".navbar")
        navbar.classList.remove("navbar-dark")
    }
}) */
if (window.matchMedia('(max-width: 767.98px)').matches) {
    let navbar = document.querySelector(".navbar")
    navbar.classList.add("navbar-dark")
}
