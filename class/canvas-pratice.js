const myCanvas = document.getElementById("canvas_1");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(100, 100, 50, 100);
ctx.arc(300, 100, 70, Math.PI, Math.PI * 2);
ctx.fill();

const myCanvas2 = document.getElementById("canvas_2");
const ctx2 = myCanvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx2.createLinearGradient(0, 0, 220, 0);

// Add color stops
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx2.fillStyle = gradient;
ctx2.fillRect(20, 20, 200, 100);
