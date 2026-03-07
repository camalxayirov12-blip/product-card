// Selecting elements with names requested by the mentor
const firstCardColorChangeBtn = document.querySelector('.btn-toggle-first');
const allCardsColorChangeBtn = document.querySelector('.btn-toggle-all');
const allCards = document.querySelectorAll('.card');

// Selecting the main title for the hover task
const mainTitle = document.querySelector('.main-title');

// 1. Logic for the FIRST card (Toggle Blue)
firstCardColorChangeBtn.addEventListener('click', () => {
  allCards[0].classList.toggle('bg-changed');
});

// 2. Logic for ALL cards (Toggle Red)
allCardsColorChangeBtn.addEventListener('click', () => {
  allCards.forEach(card => {
    card.classList.toggle('bg-red');
  });
});

// 3. Task: Console log title content on hover
mainTitle.addEventListener('mouseover', () => {
  // We use .textContent to get the actual text from HTML
  console.log(mainTitle.textContent);
});