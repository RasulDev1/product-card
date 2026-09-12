class Modal {
    constructor(ID) {
        this.modal = document.getElementById(ID);
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
    Initlisten() {
        if (!this.modal) return;
        const closeButton = this.modal.querySelector('.close-btn')
        
        if (closeButton) {
            closeButton.addEventListener('click', this.close.bind(this));
        }

}}

export default Modal;