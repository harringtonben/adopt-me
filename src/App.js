const Pet = () => {
    return React.createElement("div", {},
    [
        React.createElement("h1", {}, "Finn"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Double Doodle"),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]

    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);