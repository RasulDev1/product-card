export class Modal {
  #shouldCloseOnOverlay; 

  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#shouldCloseOnOverlay = shouldCloseOnOverlay; 
    
    if (!this.modal) return;

    this.#initOpen(buttonId);
    this.#initClose();
    this.#initGlobalListeners();
  }

  open() {
    const currentOpen = document.querySelector('.modal-showed');
    if (currentOpen && currentOpen !== this.modal) {
      currentOpen.classList.remove('modal-showed');
    }

    this.modal.classList.add('modal-showed');
    if (this.overlay) this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    
    const anyOpenModal = document.querySelector('.modal-showed');
    if (!anyOpenModal && this.overlay) {
      this.overlay.classList.remove('overlay-showed');
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;
    
    button.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector('.modal-close-button, .close-modal-button');

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }

  #initGlobalListeners() {
    if (this.overlay) {
      this.overlay.addEventListener('click', () => {
        if (this.#shouldCloseOnOverlay && this.isOpen()) {
          this.close();
        }
      });
    }
  }
}
