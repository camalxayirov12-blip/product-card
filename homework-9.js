import { productCards } from "./products.js";

let user = null;

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const productCardTemplate = document.getElementById("productCardTemplate");
  const subscribeForm = document.getElementById("subscribeForm");

  if (productGrid && productCardTemplate) {
    const cardsFragment = document.createDocumentFragment();

    productCards.forEach((product) => {
      const cardNode = productCardTemplate.content.cloneNode(true);
      const image = cardNode.querySelector(".card__img img");
      const category = cardNode.querySelector(".card__label");
      const title = cardNode.querySelector(".card__title");
      const description = cardNode.querySelector(".card__text");
      const ingredientsList = cardNode.querySelector(".card__list");
      const price = cardNode.querySelector(".card__price-value");

      image.src = `img/${product.imageName}.png`;
      image.alt = product.title;
      category.textContent = product.category;
      title.textContent = product.title;
      description.textContent = product.description;
      price.textContent = `${product.price.toLocaleString("ru-RU")} ₽`;

      product.ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;
        ingredientsList.appendChild(ingredientItem);
      });

      cardsFragment.appendChild(cardNode);
    });

    productGrid.appendChild(cardsFragment);
  }

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();

      if (!email) {
        alert("Пожалуйста, заполните поле email");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Введите корректный email (например: name@domain.com)");
        return;
      }

      console.log({ email });
      subscribeForm.reset();
    });
  }

  const modal = document.getElementById("modal");
  const registerBtn = document.getElementById("registerBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const registerForm = document.getElementById("registerForm");

  if (registerBtn && modal) {
    registerBtn.addEventListener("click", () => {
      modal.classList.add("modal-showed");
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("modal-showed");
    });
  }

  if (modalOverlay && modal) {
    modalOverlay.addEventListener("click", () => {
      modal.classList.remove("modal-showed");
    });
  }

  if (registerForm && modal) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!registerForm.checkValidity()) {
        alert("Регистрация отклонена: форма заполнена неверно.");
        registerForm.reportValidity();
        return;
      }

      const firstName = registerForm.firstName.value.trim();
      const lastName = registerForm.lastName.value.trim();
      const birthDate = registerForm.birthDate.value;
      const login = registerForm.login.value.trim();
      const password = registerForm.password.value;
      const repeatPassword = registerForm.repeatPassword.value;

      if (password !== repeatPassword) {
        alert("Регистрация отклонена: пароли не совпадают.");
        return;
      }

      user = {
        firstName,
        lastName,
        birthDate,
        login,
        password,
        createdOn: new Date(),
      };

      console.log(user);
      registerForm.reset();
      modal.classList.remove("modal-showed");
    });
  }
}); 