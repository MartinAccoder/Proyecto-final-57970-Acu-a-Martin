const nav = document.querySelector('#nav')
const abrir = document.querySelector('#aMenu')
const cerrar = document.querySelector('#cMenu')

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible")
})