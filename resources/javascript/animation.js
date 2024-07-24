// Fade in animations using intersection observer
const contenido = document.getElementsByClassName('visible');
const navItem = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                for (let i = 0; i < navItem.length; i++) {
                    if (("nav-" + entry.target.id) == navItem[i].querySelector("a").id) {
                        navItem[i].querySelector("a").style.fontWeight = "bold";
                    } else if (entry.target.id == "fotomatic") {
                        navItem[1].querySelector("a").style.fontWeight = "bold";
                    }
                }
            } else {
                entry.target.style.opacity = "0";
                for (let i = 0; i < navItem.length; i++) {
                    if (("nav-" + entry.target.id) == navItem[i].querySelector("a").id) {
                        navItem[i].querySelector("a").style.fontWeight = "normal";
                    } else if (entry.target.id == "fotomatic") {
                        navItem[1].querySelector("a").style.fontWeight = "normal";
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



