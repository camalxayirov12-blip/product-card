import { Cafe } from './cafe/Cafe.js';
import { createMenu } from './cafe/menu.js';

const menu = createMenu();
const cafe = new Cafe('Lemon Mint Cafe', '12 Refresh Street, Flavor City', menu);

const cafeInfoEl = document.getElementById('cafeInfo');
const drinkListEl = document.getElementById('drinkList');
const outputEl = document.getElementById('output');
const logEl = document.getElementById('logHint');

function showOutput(title, text) {
  outputEl.innerHTML = `<strong>${title}</strong><pre>${text}</pre>`;
}

function renderCafe() {
  cafeInfoEl.textContent = cafe.getInfo();
  drinkListEl.innerHTML = '';

  menu.forEach((drink) => {
    const card = document.createElement('article');
    card.className = 'drink-card';
    card.innerHTML = `
      <h3>${drink.name}</h3>
      <p class="drink-card__meta">${drink.size} · ${drink.price} ₽</p>
      <div class="drink-card__actions">
        <button type="button" class="btn btn-info" data-action="info" data-name="${drink.name}">Инфо</button>
        <button type="button" class="btn btn-order" data-action="order" data-name="${drink.name}">Заказать</button>
      </div>
    `;
    drinkListEl.appendChild(card);
  });
}

drinkListEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-name]');
  if (!btn) return;

  const drink = cafe.findDrinkByName(btn.dataset.name);
  if (!drink) return;

  if (btn.dataset.action === 'info') {
    showOutput(`Напиток: ${drink.name}`, drink.getInfo());
    console.log('[getInfo]', drink.getInfo());
    return;
  }

  if (btn.dataset.action === 'order') {
    const receipt = cafe.orderDrink(drink);
    showOutput(`Заказ оформлен: ${drink.name}`, receipt);
    if (logEl) {
      logEl.textContent = 'Подробные шаги приготовления — во вкладке Console (F12).';
    }
  }
});

document.getElementById('showCafeInfo')?.addEventListener('click', () => {
  showOutput('Информация о кафе', cafe.getInfo());
  console.log('[Cafe.getInfo]\n' + cafe.getInfo());
});

renderCafe();
console.log('--- Lemon Mint Cafe ---');
console.log(cafe.getInfo());
