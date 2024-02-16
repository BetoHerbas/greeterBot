import greeter from "./greeter";

const name = document.getElementById("name");
const button = document.getElementById("greeter-btn");
const div = document.getElementById("greeting-div");
const genderSelector = document.getElementById("genderSelector");

button.addEventListener("click", () => {
  event.preventDefault();

  let gender = genderSelector.value;
  div.innerHTML = greeter(name.value, gender);
});



