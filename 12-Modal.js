class Modal {
// Один общий оверлей для всех модальных окон
static overlay = null;

static getOverlay() {
if (!Modal.overlay) {
Modal.overlay = document.createElement('div');
Modal.overlay.classList.add('overlay');
document.body.append(Modal.overlay);
}
return Modal.overlay;
}

constructor(modalElement) {
this._modal = modalElement;
// Сохраняем ссылку на функцию, чтобы потом удалить тот же самый слушатель
this._handleOverlayClick = this.close.bind(this);
}

open() {
const overlay = Modal.getOverlay();
overlay.classList.add('overlay_opened');
this._modal.classList.add('modal_opened');

// Добавляем слушатель только при открытии
overlay.addEventListener('click', this._handleOverlayClick);
}

close() {
const overlay = Modal.getOverlay();
overlay.classList.remove('overlay_opened');
this._modal.classList.remove('modal_opened');

// Удаляем слушатель при закрытии — передаём ту же функцию
overlay.removeEventListener('click', this._handleOverlayClick);
}
}