class Form {
    constructor(formId) {
        this.formElement = document.getElementById(formId);

    }

    getValues () {
        if(!this.formElement) return{};
        const formData = new FormData(this.formElement);
        return Object.fromEntries(formData.entries());
    }

    isValid () {
    if (!this.formElement) return false;
    return this.formElement.checkValidity();
    }

    reset () {
        if (!this.formElement) return;
        this.formElement.reset();
    }

}

export default Form;