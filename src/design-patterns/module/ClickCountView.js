var App = App || {};

App.ClickCountView = (clickCounter, options) => {
  if (!clickCounter)
    throw new Error(App.ClickCountView.messages.noClickCounter);
  if (!options.updateEl)
    throw new Error(App.ClickCountView.messages.noUpdateEl);

  options.triggerEl.addEventListener("click", () => {
    view.increaseAndUpdateView();
  });

  const view = {
    updateView() {
      options.updateEl.innerHTML = clickCounter.getValue();
    },
    increaseAndUpdateView() {
      clickCounter.count();
      this.updateView();
    },
  };

  return view;
};

App.ClickCountView.messages = {
  noClickCounter: "clickCount를 주입해야 합니다",
  noUpdateEl: "updateEl를 주입해야 합니다",
};
