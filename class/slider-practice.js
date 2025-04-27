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
});
