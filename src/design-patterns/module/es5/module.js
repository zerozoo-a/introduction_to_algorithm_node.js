let App;
App = App || {};

App.Person = (module) => {
  let name = module.name();
  return {
    getName: () => name,
    setName: (newName) => {
      name = newName;
    },
  };
};

const app1 = App.Person({ name: () => "hi" });
