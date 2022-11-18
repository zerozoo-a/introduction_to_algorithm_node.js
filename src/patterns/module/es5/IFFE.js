let App;
App = App || {};

App.Person = (() => {
  let name = "";

  return {
    getName(module) {
      name = name || module.name();
      return name;
    },
    setName(newName) {
      name = newName;
    },
  };
})();
