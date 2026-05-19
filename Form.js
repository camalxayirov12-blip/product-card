export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) {
      throw new Error(`Форма с id="${formId}" не найдена`);
    }
  }

  getValues() {
    return Object.fromEntries(new FormData(this.form).entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
