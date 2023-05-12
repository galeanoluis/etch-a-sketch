const canvas = document.getElementById("canvas");
const clear = document.getElementById("clear");
const size = document.getElementById("size");
let pixels = [];
let canvasSize = 16;

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
}

function clearCanvas() {
    console.log("works");
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}
function changeSize() {
    let newsize = prompt("Please select a canvas size.")
    if(newsize >= 100) return;
    canvasSize = newsize;
    console.log(canvasSize);
    canvas.textContent = "";
    generateCanvas();
}

function generateCanvas() {
    for(let i = 0; i < canvasSize; i++) {
        for(let u = 0; u < canvasSize; u++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.style.flexBasis = `${600/canvasSize}px`;
            pixel.addEventListener("mouseover", changeColor)
            canvas.appendChild(pixel);
        }
    }
    pixels = Array.from(document.querySelectorAll(".pixel")); 
}
clear.addEventListener("click", clearCanvas);
size.addEventListener("click", changeSize);

function randomRGB() {
    return Math.floor(Math.random() * 255)
}


generateCanvas();