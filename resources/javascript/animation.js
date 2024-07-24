/*
const contenido = document.getElementsByClassName('contenido');
const navItem = document.getElementsByClassName("nav-item");

const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                navItem[entry.target.index].style.backgroundColor = "var(--selected)";
            } else {
                entry.target.style.opacity = "0";
                navItem[entry.target.index].style.backgroundColor = "var(--background)";
            }
        }
    },
    { threshold: 0.6 }
);

for (i = 0 ; i < contenido.length ; i++) {
    observer.observe(contenido[i]);
}

*/