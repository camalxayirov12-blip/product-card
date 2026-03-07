// Находим кнопки по их классам
const btnFirst = document.querySelector('.btn-toggle-first');
const btnAll = document.querySelector('.btn-toggle-all');

// Находим все карточки товаров (убедись, что у них класс .card)
const allCards = document.querySelectorAll('.card');

// 1. Логика для ПЕРВОЙ карточки (Toggle - включить/выключить)
btnFirst.addEventListener('click', () => {
    // Берем самую первую карточку из списка [0]
    allCards[0].classList.toggle('bg-changed');
});

// 2. Логика для ВСЕХ карточек (Теперь КРАСНЫЙ)
btnAll.addEventListener('click', () => {
    allCards.forEach(card => {
        // Меняем bg-changed на bg-red
        card.classList.toggle('bg-red'); 
    });
});