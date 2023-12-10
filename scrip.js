document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


const titulo = document.querySelector("#titulo");

const rotacion = setInterval(() => {
  titulo.style.transform = `rotateY(${Math.random() * 360}deg)`
}, 1000);
