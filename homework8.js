import { productCards } from './products.js';

const createCardTemplate = (product) => {
    const ingredientsHtml = product.ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join('');

    return `
        <article class="card">
            <div class="card__img">
                <img src="./img/${product.imageName}.png" alt="${product.title}">
            </div>
            <div class="card__info">
                <span class="card__label">${product.category}</span>
                <h2 class="card__title">${product.title}</h2>
                <p class="card__text">${product.description}</p>
                <span class="card__label">Состав:</span>
                <ul class="card__list">
                    ${ingredientsHtml}
                </ul>
                <div class="card__footer">
                    <span class="card__price-text">Цена</span>
                    <span class="card__price-value">${product.price.toLocaleString()} ₽</span>
                </div>
            </div>
        </article>
    `;
};

const productDescriptionsByReduce = productCards.reduce((acc, product) => {
    acc[product.title] = product.description;
    return acc;
}, {});

console.log("Словарь описаний:", productDescriptionsByReduce);

const getCountFromUser = () => {
    let userInput;
    
    while (true) {
        userInput = prompt("Сколько карточек отобразить? От 1 до " + productCards.length);
        
        if (userInput === null) {
            return 3;
        }
        
        const count = Number(userInput);
        
        if (!isNaN(count) && count >= 1 && count <= productCards.length) {
            return count;
        }
        
        alert(`Ошибка! Введите число от 1 до ${productCards.length}`);
    }
};

const renderProducts = (products) => {
    const container = document.querySelector('main.container');
    const countToDisplay = getCountFromUser();
    const visibleProducts = products.slice(0, countToDisplay);
    
    container.innerHTML = '';
    
    const title = document.createElement('h1');
    title.className = 'main-title';
    title.textContent = 'Выбери свой продукт';
    container.appendChild(title);

    container.insertAdjacentHTML('beforeend', visibleProducts.map(createCardTemplate).join(''));
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderProducts(productCards);
    });
} else {
    renderProducts(productCards);
}