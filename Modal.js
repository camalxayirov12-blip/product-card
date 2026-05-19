export class Modal {
  constructor(modalId) {
    this.root = document.getElementById(modalId);
    if (!this.root) {
      throw new Error(`Элемент с id="${modalId}" не найден`);
    }
    this._openClass = 'modal--open';
    this._bindCloseButton();
  }

  open() {
    this.root.classList.add(this._openClass);
    this.root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  close() {
    this.root.classList.remove(this._openClass);
    this.root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  isOpen() {
    return this.root.classList.contains(this._openClass);
  }

  _bindCloseButton() {
    const closeBtn = this.root.querySelector('.modal__close');
    if (!closeBtn) return;
    closeBtn.addEventListener('click', () => this.close());
  }
}
