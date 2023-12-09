const titulo = document.querySelector("#titulo");

const rotacion = setInterval(() => {
  titulo.style.transform = `rotateY(${Math.random() * 360}deg)`
}, 1000);
