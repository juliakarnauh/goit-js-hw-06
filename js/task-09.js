function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let randomColor = getRandomHexColor();
const body = document.querySelector("body");
const btnRandom = document.querySelector(".change-color");
const textColorbody = document.querySelector(".color");

btnRandom.addEventListener("click", () => {
  body.style.backgroundColor = randomColor;
  textColorbody.textContent = randomColor;
});
