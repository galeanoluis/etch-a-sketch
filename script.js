const canvas = document.getElementById("canvas");
let canvasSize = 16;


 for(let i = 0; i < canvasSize; i++) {
    for(let u = 0; u < canvasSize; u++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        pixel.style.flexBasis = `${600/canvasSize}px`
        canvas.appendChild(pixel);
    }
} 

let pixels = Array.from(document.querySelectorAll(".pixel"));
pixels.forEach(pixel => pixel.addEventListener("mouseover", changeColor));

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function clearCanvas() {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}