import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Finn",
      animal: "Dog",
      breed: "Double Doodle",
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Double Doodle",
    }),
    React.createElement(Pet, {
      name: "Wynter",
      animal: "Dog",
      breed: "Double Doodle",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
