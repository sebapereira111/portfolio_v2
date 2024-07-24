// Fade in animations using intersection observer
const contenido = document.getElementsByClassName('contenido');
const navItem = document.getElementsByClassName("nav-item");

const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            } else {
                entry.target.style.opacity = "0";
            }
        }
    },
    { threshold: 0.4 }
);

for (i = 0 ; i < contenido.length ; i++) {
    observer.observe(contenido[i]);
}

