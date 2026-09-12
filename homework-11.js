import Modal from './modal.js';
import Form from './form.js';

const registrationModal = new Modal('myModal');

const footerFormController = new Form('footer-subscribe-form'); 
const registrationFormController = new Form('registrationForm');

const emailForm = document.querySelector(".secondblock");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (footerFormController.isValid()) {
    const data = footerFormController.getValues();
    console.log("Данные подписки из футера:", data);

    footerFormController.reset();
  }

})

const openBtn = document.getElementById('openModalBtn');
const registrationForm = document.getElementById("registrationForm");

if (openBtn) {
  openBtn.addEventListener('click', function() {
    registrationModal.open();
  })
}


registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const currentForm = event.target;
  const password = currentForm.elements["userPassword"].value;
  const passwordConfirm = currentForm.elements["userPasswordConfirm"].value;

    if (password.trim().length === 0) {
    alert("Пароль не может быть пустым!");
    return;
  }
  if (password !== passwordConfirm) {
    alert("Пароли не совпадают!");
    return;
  }

const name = currentForm.elements["userName"].value;
const surname = currentForm.elements["userSurname"].value;
const birthDate = currentForm.elements["userData"].value;

if (name.match(/\d/) || surname.match(/\d/)) {
  alert("В имени и фамилии не должно быть цифр!");
  return;
}

if (birthDate) {
  const yearOfBirth = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();

  if (yearOfBirth > currentYear || yearOfBirth < (currentYear - 120)) {
    alert("Пожалуйста, укажите корректную дату рождения!");
    return;
  }
}

const user = registrationFormController.getValues();
delete user.userPasswordConfirm;
user.createdOn = new Date();
console.log("Зарегистрирован пользователь:", user)
registrationModal.close();
registrationFormController.reset();
alert("Вы успешно зарегестрированы!")
});