let btn_btn = document.querySelector('.buttontivamenu')
// console.log(btn_btn)
let navbar = document.querySelector('.navbar')
// console.log(navbar)

btn_btn.addEventListener('click', ()=>{
    navbar.classList.toggle('navbar_ativo')
})