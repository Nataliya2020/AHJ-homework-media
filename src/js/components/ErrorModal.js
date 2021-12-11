export default class ErrorModal {
  constructor(text) {
    this.text = text;
    this.modalEl = null;
  }

  createModalError() {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    const contentModal = document.createElement('div');
    contentModal.classList.add('content-modal');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    textContainer.innerHTML = this.text;

    const form = document.createElement('form');
    form.classList.add('form');

    const enterData = document.createElement('input');
    enterData.setAttribute('name', 'dataCoords');
    enterData.classList.add('enter-data');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const buttonOk = document.createElement('button');
    buttonOk.classList.add('button', 'button-ok');
    buttonOk.textContent = 'OK';

    const buttonCancel = document.createElement('button');
    buttonCancel.classList.add('button', 'button-cancel');
    buttonCancel.textContent = 'Oтмена';

    form.appendChild(enterData);

    buttonContainer.appendChild(buttonCancel);
    buttonContainer.appendChild(buttonOk);

    contentModal.appendChild(textContainer);
    contentModal.appendChild(form);
    contentModal.appendChild(buttonContainer);

    modalContainer.appendChild(contentModal);

    const container = document.querySelector('.container');
    container.appendChild(modalContainer);
  }

  showModalError() {
    this.createModalError();
  }

  closeModalError(modal) {
    this.modalEl = modal;
    this.modalEl.remove();
  }
}
