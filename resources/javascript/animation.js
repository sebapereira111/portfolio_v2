// Fade in animations using intersection observer
const contenido = document.querySelectorAll('.visible');
const navItem = document.querySelectorAll(".nav-item");


const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                for (let i = 0; i < navItem.length; i++) {
                    if (("nav-" + entry.target.id) == navItem[i].querySelector("a").id) {
                        navItem[i].querySelector("a").style.fontWeight = "bold";
                        navItem[i].classList.toggle("mostrar-nav-item", true);
                    } else if (entry.target.id == "fotomatic") {
                        navItem[1].querySelector("a").style.fontWeight = "bold";
                        navItem[1].classList.toggle("mostrar-nav-item", true);
                    }
                }
            } else {
                entry.target.style.opacity = "0";
                for (let i = 0; i < navItem.length; i++) {
                    if (("nav-" + entry.target.id) == navItem[i].querySelector("a").id) {
                        navItem[i].querySelector("a").style.fontWeight = "normal";
                        navItem[i].classList.toggle("mostrar-nav-item", false);
                    } else if (entry.target.id == "fotomatic") {
                        navItem[1].querySelector("a").style.fontWeight = "normal";
                        navItem[1].classList.toggle("mostrar-nav-item", false);
                    }
                }
            }
        }
    },
    { threshold: 0.4 }
);

for (i = 0 ; i < contenido.length ; i++) {
    observer.observe(contenido[i]);
}





// menu on mobile
const botonMenu = document.querySelector("#boton-menu");
const menu = document.querySelector("#menu");
const menuUl = menu.querySelector("ul");
const navInicio = menu.querySelector(".nav-inicio");

const openMenu = function() {
    console.log("Se ha abierto el menu!!!");
    menu.classList.toggle("menu", true);
}

const closeMenu = function() {
    console.log("Se ha abierto el menu!!!");
    menu.classList.toggle("menu", false);
}

botonMenu.addEventListener("click", openMenu);

menuUl.addEventListener("click", closeMenu);
navInicio.addEventListener("click", closeMenu);
