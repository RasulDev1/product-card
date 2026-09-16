import Modal from './modal.js';
import Form from './form.js';

const registrationModal = new Modal('myModal');

const footerFormController = new Form('footer-subscribe-form'); 
const registrationFormController = new Form('registrationForm');

const emailForm = document.querySelector(".secondblock");

const openBtn = document.getElementById('openModalBtn');
const registrationForm = document.getElementById("registrationForm");

if (openBtn) {
  openBtn.addEventListener('click', function() {
    registrationModal.open();
  })
}

if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (registrationFormController.isValid()) {
      const user = registrationFormController.getValues();
      delete user.userPasswordConfirm;
      user.createdOn = new Date();
      console.log("Зарегистрирован пользователь:", user);
      
      registrationModal.close();
      registrationFormController.reset();
      alert("Вы успешно зарегистрированы!");
    }
  });
}