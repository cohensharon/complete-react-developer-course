"use strict";

console.log("app.js is working");

//JSX = javascript XML
//makes working with templates easier

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
