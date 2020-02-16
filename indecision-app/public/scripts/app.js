console.log("app.js is working");

//JSX = javascript XML
//makes working with templates easier

//var template = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById("app");
var template = React.createElement("hi", { "id": "someId" }, "something new");


ReactDOM.render(template, appRoot);