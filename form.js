class Form {
    constructor(formId) {
        this.formElement = document.getElementById(formId);
    }

    getValues() {
        if (!this.formElement) return;
        const formData = new FormData(this.formElement);
        return Object.fromEntries(formData.entries());
    }

    isValid() {
        console.log("--> Валидация формы НАЧАЛАСЬ");

        if (!this.formElement) {
            console.error("Ошибка: Форма не найдена в DOM!");
            return false;
        }

        // 1. Убрали сбоящий checkValidity(). Теперь полностью доверяем своим JS-методам!
        // 2. Поочередно запускаем наши валидаторы:
        if (this.login() === false) return false;    // Железная проверка логина
        if (this.password() === false) return false;
        if (this.names() === false) return false;
        if (this.data() === false) return false;

        console.log("--> Валидация ПРОЙДЕНА успешно!");
        return true;
    }

    reset() {
        if (!this.formElement) return;
        this.formElement.reset();
    }

    // Тот самый надежный валидатор для логина (как для даты)
    login() {
        if (!this.formElement) return false;
        const elements = this.formElement.elements;
        
        // Получаем значение. Убедитесь, что в HTML у инпута логина стоит name="userLogin"
        const loginValue = elements["userLogin"]?.value || '';

        // Проверяем на пустоту
        if (!loginValue.trim()) {
            alert("Логин не может быть пустым!");
            return false;
        }
        return true;
    }

    password() {
        if (!this.formElement) return false;
        const elements = this.formElement.elements;
        if (!elements["userPassword"]) return true;
        const password = elements["userPassword"]?.value || '';
        const passwordConfirm = elements["userPasswordConfirm"]?.value || '';

        if (password.trim().length === 0) {
            alert("Пароль не может быть пустым");
            return false;
        }
        if (password !== passwordConfirm) {
            alert("Пароли не совпадают!");
            return false;
        }
        return true;
    }

    names() {
        if (!this.formElement) return false;
        const elements = this.formElement.elements;
        const name = elements["userName"]?.value || '';
        const surname = elements["userSurname"]?.value || '';
        
        if (name.match(/\d/) || surname.match(/\d/)) {
            alert("В имени и фамилии не должно быть цифр!");
            return false;
        }
        return true;
    }

    data() {
        if (!this.formElement) return false;
        const elements = this.formElement.elements;
        const birthDate = elements["userData"]?.value || '';

        if (!birthDate.trim()) {
            alert("Укажите дату рождения!");
            return false;
        }

        const yearOfBirth = new Date(birthDate).getFullYear();
        const currentYear = new Date().getFullYear();

        if (yearOfBirth > currentYear || yearOfBirth < (currentYear - 120)) {
            alert("Пожалуйста, укажите корректную дату рождения!");
            return false;
        }
        return true;
    }
}

export default Form;
