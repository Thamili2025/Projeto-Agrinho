/* ==========================
   MENU RESPONSIVO
========================== */

const menu = document.getElementById("menu-mobile");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* ==========================
   CARROSSEL
========================== */

const slides = document.querySelectorAll(".slide");

let indice = 0;

function mostrarSlide(numero){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[numero].classList.add("active");
}

document.getElementById("proximo")
.addEventListener("click", () => {

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    mostrarSlide(indice);
});

document.getElementById("anterior")
.addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = slides.length - 1;
    }

    mostrarSlide(indice);
});


/* ==========================
   AUTO PLAY DO CARROSSEL
========================== */

setInterval(() => {

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    mostrarSlide(indice);

}, 4000);


/* ==========================
   ANIMAÇÃO AO ROLAR
========================== */

const elementos = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    elementos.forEach((elemento) => {

        const topo = elemento.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }

    });

});