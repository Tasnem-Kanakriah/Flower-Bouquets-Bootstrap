let menu = document.querySelector(".menu")
let dropdownMenu = document.querySelector(".dropdown-menu")
menu.addEventListener("click" , () => {
    dropdownMenu.classList.toggle("open")
})


let button = document.querySelector(".button")
button.addEventListener("click" , () => {
    button.classList.toggle("active")
})


let arrow = document.querySelectorAll(".arrow")
arrow[0].addEventListener("click" , () => {
    arrow[0].classList.add("active")
})
arrow[1].addEventListener("click" , () => {
    arrow[1].classList.add("active")
})

let pictures = document.querySelector(".pic")
arrow[0].addEventListener("click" , () => {
    pictures.style.backgroundImage = 'url("images/' + `${Math.ceil(Math.random() * 7)}.jpg` + '")';
    arrow[1].classList.remove("active")
})
arrow[1].addEventListener("click" , () => {
    pictures.style.backgroundImage = 'url("images/' + `${Math.ceil(Math.random() * 7)}.jpg` + '")';
    arrow[0].classList.remove("active")
})


let heart = document.querySelectorAll(".heart i")
let num = document.querySelectorAll(".num")

heart[0].addEventListener("click" , () => {
    heart[0].classList.toggle("bxs-heart")
    heart[0].classList.toggle("active")
    num[0].innerHTML = Number(num[0].innerHTML ) + 1
})
heart[1].addEventListener("click" , () => {
    heart[1].classList.toggle("bxs-heart")
    heart[1].classList.toggle("active")
    num[1].innerHTML = Number(num[1].innerHTML ) + 1
})
heart[2].addEventListener("click" , () => {
    heart[2].classList.toggle("bxs-heart")
    heart[2].classList.toggle("active")
    num[2].innerHTML = Number(num[2].innerHTML ) + 1
})