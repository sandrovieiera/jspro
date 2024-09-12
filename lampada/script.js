const lamp = document.getElementById("lampada");
const lig = document.getElementById("lig");
const des = document.getElementById("des");

lig.addEventListener('click', () => {
    lamp.src = "./img/acesa.png"
   
});

des.addEventListener('click', () => {
    lamp.src = "./img/apagada.png"
})

lamp.addEventListener('mouseout', () => {
    lamp.src = "./img/neutra.png"
})