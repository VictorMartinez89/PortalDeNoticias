const title = document.querySelector('#titulo-principal');
const botonTitulo = document.getElementById("boton-titulo");

botonTitulo.addEventListener("click",()=>{
    title.classList.toggle('change-color')
})