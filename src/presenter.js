import greeter from "./greeter";

const name = document.getElementById("name");
const button = document.getElementById("greeter-btn");
const div = document.getElementById("greeting-div");

button.addEventListener("click", () => {
  event.preventDefault();
  
  div.innerHTML = greeter(name.value);
});



