const dot = document.getElementById("dot");
const slide = document.getElementById("slide");
let isDrag = false;

dot.addEventListener("mousedown", () => {
  isDrag = true;

  console.log(isDrag);
});

document.addEventListener("mouseup", () => {
  isDrag = false;

  console.log(isDrag);
});

document.addEventListener("mousemove", (e) => {
  if (!isDrag) return;

  let react = slide.getBoundingClientRect();
  let x = e.clientX - react.left;
  console.log(react);

  x = Math.max(0, Math.min(x, react.width));

  dot.style.left = `${x}px`;

  if (x < 50) {
    r = 255;
    g = 0 + x * 5.5;
    b = 0;
  } else if (x < 100) {
    r = 255 - (x - 50) * 5.5;
    g = 255;
    b = 0;
  } else if (x < 150) {
    r = 0;
    g = 255;
    b = 0 + (x - 100) * 5.5;
  } else if (x < 200) {
    r = 0;
    g = 255 - (x - 150) * 5.5;
    b = 255;
  } else if (x < 250) {
    r = 0 + (x - 200) * 5.5;
    g = 0;
    b = 255;
  } else if (x < 300) {
    r = 255;
    g = 0;
    b = 255 - (x - 250) * 5.5;
  }

  dot.style.backgroundColor = `rgb(${r},${g},${b})`;
});
