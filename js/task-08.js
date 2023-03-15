const form = document.querySelector(".login-form");
const message = "Всі поля повинні бути заповнені!";
let usersInfo = {};
form.addEventListener("submit", (handleSubmit) => {
  handleSubmit.preventDefault();
  for (let element of form.elements) {
    if (element.name) {
      usersInfo[element.name] = element.value;
    }
  }
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert(message);
  }
  console.log(usersInfo);
  form.reset();
});
