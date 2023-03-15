const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  const inputLength = +input.dataset.length;
  const valueLength = input.value.length;
  if (valueLength !== inputLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid"); 
  }
});
