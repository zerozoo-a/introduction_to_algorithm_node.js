var App = App || {};

App.ClickCounter = (_data) => {
  if (!Number.isInteger(_data.value)) throw Error("값이 전달되지 않음");

  const data = _data;
  data.value = data.value || 0;

  return {
    getValue() {
      return data.value;
    },

    count() {
      data.value++;
    },

    setCountFn(fn) {
      this.count = () => (data.value = fn(data.value));
      return this;
    },
  };
};
