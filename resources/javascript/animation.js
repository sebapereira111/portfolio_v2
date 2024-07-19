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
    { threshold: 0.6 }
);
  
//const contenido = document.getElementById('acerca-de-mi');
const contenido = document.getElementsByClassName('contenido');

for (i = 0 ; i < contenido.length ; i++) {
    observer.observe(contenido[i]);
}

