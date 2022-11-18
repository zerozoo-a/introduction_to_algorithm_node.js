class Counter {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }

  increase() {
    this.value++;
  }
}

class CountView {
  constructor(module, options) {
    this.module = module;
    this.options = options;
  }

  updateView() {
    this.options.updateEl.innerHTML = this.module.value;
  }

  increaseAndUpdateView() {
    this.module.increase();
    this.updateView();
  }

  bind() {
    this.options.triggerEl.addEventListener("click", () => {
      this.increaseAndUpdateView();
    });
  }

  // render() {
  //   this.options.triggerEl.addEventListener("click", () => {
  //     this.increaseAndUpdateView();
  //   });
  // }
}

class App {
  constructor(view, options = {}) {
    this.view = view;
    this.options = options;
  }
}
