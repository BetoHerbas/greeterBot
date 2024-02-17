import greeter from "./greeter";

const name = document.getElementById("name");
const button = document.getElementById("greeter-btn");
const div = document.getElementById("greeting-div");
const genderSelector = document.getElementById("genderSelector");
const age = document.getElementById("age");
var date = new Date();

button.addEventListener("click", () => {
  event.preventDefault();

  let gender = genderSelector.value;
  div.innerHTML = "<p>" + greeter(name.value, gender, age.value, date.getHours()) + "</p>";
});



