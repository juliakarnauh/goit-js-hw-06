function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnRandom = document.querySelector(".change-color");
const textColorbody = document.querySelector(".color");

btnRandom.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textColorbody.textContent = randomColor;
});
