function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorChangeBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorChangeBtn.addEventListener("click", (evt) => {
  const colorEl = getRandomHexColor();
  body.style.backgroundColor = colorEl;
  colorSpan.textContent = colorEl;
});
