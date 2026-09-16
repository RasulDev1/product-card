class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.Initlisten();
    }
    open() {
        this.modal.classList.add('active');
    }
    close() {
        this.modal.classList.remove('active');
    }
    check() {
        if (this.modal.classList.contains('active')) 
            {
            return true;
            }
            return false;
    }
    isValid() {
        return this.modal.classList.contains('active');

    }

    Initlisten() {
        if (!this.modal) return;
        const closeButton = this.modal.querySelector('.close-btn')
        
        if (closeButton) {
            closeButton.addEventListener('click', this.close.bind(this));
        }

}}

export default Modal;