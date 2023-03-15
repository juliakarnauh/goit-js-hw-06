const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
input.addEventListener("input", () => {
  userName.textContent = input.value ? input.value : "Anonymous";
});
