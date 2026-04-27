let user = null;

document.addEventListener("DOMContentLoaded", () => {
  const subscribeForm = document.getElementById("subscribeForm");
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