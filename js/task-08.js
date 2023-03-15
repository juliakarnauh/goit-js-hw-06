const form = document.querySelector(".login-form");
const message = "Всі поля повинні бути заповнені!";
form.addEventListener("submit", (handleSubmit) => {
  handleSubmit.preventDefault();
  let usersInfo = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert(message);
  }
  console.log(usersInfo);
  form.reset();
});
