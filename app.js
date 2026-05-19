import { Form } from './Form.js';
import { Modal } from './Modal.js';
import { createCatalogModel } from './models/createCatalogModel.js';
import { productCards } from './products.js';

const models = productCards.map((raw) => createCatalogModel(raw));

function fillCardFromTemplate(template, item) {
  const node = template.content.cloneNode(true);
  const img = node.querySelector('.card__img img');
  const labels = node.querySelectorAll('.card__label');
  const title = node.querySelector('.card__title');
  const text = node.querySelector('.card__text');
  const list = node.querySelector('.card__list');
  const priceValue = node.querySelector('.card__price-value');
  const orderBtn = node.querySelector('.card__order');

  img.src = item.getImagePath();
  img.alt = item.title;
  if (labels[0]) labels[0].textContent = item.category;
  title.textContent = item.title;
  text.textContent = item.description;
  list.innerHTML = item.ingredients.map((ing) => `<li>${ing}</li>`).join('');
  priceValue.textContent = item.formatPrice();
  orderBtn.dataset.productTitle = item.title;

  return node;
}

function initCatalog(orderModal) {
  const grid = document.getElementById('productGrid');
  const template = document.getElementById('productCardTemplate');
  if (!grid || !template) return;

  const fragment = document.createDocumentFragment();
  models.forEach((item) => {
    fragment.appendChild(fillCardFromTemplate(template, item));
  });
  grid.appendChild(fragment);

  const productTitleInput = document.getElementById('orderProductTitle');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.card__order');
    if (!btn) return;
    if (productTitleInput) productTitleInput.value = btn.dataset.productTitle || '';
    orderModal.open();
  });
}

function initOrderForm(orderModal, orderForm) {
  const productTitleInput = document.getElementById('orderProductTitle');

  orderForm.form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!orderForm.isValid()) {
      orderForm.form.reportValidity();
      return;
    }
    console.log('Заказ:', orderForm.getValues());
    orderForm.reset();
    if (productTitleInput) productTitleInput.value = '';
    orderModal.close();
  });
}

function initThemeToggle() {
  const btn = document.querySelector('.btn-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('bg-changed');
    btn.classList.toggle('btn-active');
  });
}

function boot() {
  const orderModal = new Modal('orderModal');
  const orderForm = new Form('orderForm');
  initCatalog(orderModal);
  initOrderForm(orderModal, orderForm);
  initThemeToggle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
