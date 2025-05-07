const palette = document.getElementById("palette");
const ctx = palette.getContext("2d");

const wgradient = ctx.createLinearGradient(0, 0, 500, 0);

wgradient.addColorStop(0, "white");
wgradient.addColorStop(1, "blue");

ctx.fillStyle = wgradient;
ctx.fillRect(0, 0, 500, 500);

const hgradient = ctx.createLinearGradient(0, 0, 0, 500);

hgradient.addColorStop(0, "rgba(255,255,255,0 )");
hgradient.addColorStop(1, "rgba(0,0,0,1)");

ctx.fillStyle = hgradient;
ctx.fillRect(0, 0, 500, 500);

//result
const result = document.getElementById("palette-result");
const rgb_result = document.getElementById("rgb-result");
const hex_result = document.getElementById("hex-result");
const palette_dot = document.getElementById("palette-dot");

palette.addEventListener("mousedown", (e) => {
  const rect = palette.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  palette_dot.style.left = `${e.clientX}px`;
  palette_dot.style.top = `${e.clientY}px`;

  const colorData = ctx.getImageData(x, y, 1, 1).data;
  rgb_result.innerHTML = `rgb : (${colorData[0]},${colorData[1]},${colorData[2]})`;
  hex_result.innerHTML = rgbToHex(colorData[0], colorData[1], colorData[2]);
  result.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
});

function rgbToHex(r, g, b) {
  return "hex : #" + convert16(r) + convert16(g) + convert16(b);
}

function convert16(num) {
  const hex = num.toString(16);
  return hex;
}

function copy(type) {
  const text = document.getElementById(type + "-result").innerHTML;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied!!");
    })
    .catch(() => {
      console("error!");
    });
}
