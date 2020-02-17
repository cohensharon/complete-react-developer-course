console.log("app.js is working");

//JSX = javascript XML
//makes working with templates easier

var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById("app");


ReactDOM.render(template, appRoot);