export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) {
      throw new Error(`Форма с id="${formId}" не найдена`);
    }
  }

  getValues() {
    const data = new FormData(this.form);
    return Object.fromEntries(data.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
