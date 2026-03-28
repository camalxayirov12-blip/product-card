import { productCards } from './product-card.js';

// 3. Шаблон карточки продукта (Template)
const createCardTemplate = (product) => {
    // Формирование список ингредиентов через map
    const ingredientsHtml = product.ingredients
        .map((ingredient) => {
            return `<li>${ingredient}</li>`;
        })
        .join('');

    return `
        <article class="product-item">
            <img src="${product.img}" alt="${product.title}" class="product-item__img">
            <span class="product-item__category">${product.category}</span>
            <h2 class="product-item__title">${product.title}</h2>
            <p class="product-item__text">${product.description}</p>
            <div class="product-item__info">
                <strong>Состав:</strong>
                <ul>${ingredientsHtml}</ul>
            </div>
            <div class="product-item__price-block">
                <span class="price-label">Цена</span>
                <span class="price-value">${product.price} ₽</span>
            </div>
        </article>
    `;
};

// 4. Использувание метода reduce для создания объекта
const productDescriptionsByReduce = productCards.reduce((accumulator, product) => {
    accumulator[product.title] = product.description;
    return accumulator;
}, {});

console.log("Словарь описаний:", productDescriptionsByReduce);

// 5*. Функции получения количества и рендеринга
const getCardsCountByPrompt = () => {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
    const countByParsedInt = parseInt(userInput);

    // Валидация: проверяем, что введено число от 1 до 5
    if (!isNaN(countByParsedInt) && countByParsedInt >= 1 && countByParsedInt <= 5) {
        return countByParsedInt;
    } 
    
    alert("Ошибка ввода! Показываю все доступные товары.");
    return productCards.length;
};

const renderCardsByCount = (cardsArray) => {
    const container = document.querySelector('.catalog-grid'); 
    
    if (!container) {
        console.error("Контейнер .catalog-grid не найден!");
        return;
    }

    const countToDisplay = getCardsCountByPrompt();
    const visibleCards = cardsArray.slice(0, countToDisplay);

    // Рендирование карточки в HTML
    container.innerHTML = visibleCards
        .map((card) => createCardTemplate(card))
        .join('');
};

// запуск
renderCardsByCount(productCards);