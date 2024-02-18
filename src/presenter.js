import greeterEs from "./greeterEs";
import greeterEn from "./greeterEn";

const name = document.getElementById("name");
const button = document.getElementById("greeter-btn");
const div = document.getElementById("greeting-div");
const genderSelector = document.getElementById("genderSelector");
const age = document.getElementById("age");
var date = new Date();

const lan = document.getElementById("lanSelector");
const lblLen = document.getElementById("lblLen");
const lblName = document.getElementById("lblName");
const lblGender = document.getElementById("lblGender");
const lblAge = document.getElementById("lblAge");
const title = document.getElementById("title");

lan.addEventListener("change", function () {

  if (lan.value === "es") {
    title.innerHTML = "Saludador";
    lblLen.innerHTML = "Idioma:";
    lblName.innerHTML = "Nombre:";
    lblGender.innerHTML = "Género:";
    lblAge.innerHTML = "Edad:";
    lan.innerHTML = `
        <option value="es">Español</option>
        <option value="en">Ingles</option>
      `;
    genderSelector.innerHTML = `
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>`;
    button.innerHTML = "Saludar";
  }
  else {
    title.innerHTML = "Greeter";
    lblLen.innerHTML = "Language:";
    lblName.innerHTML = "Name:";
    lblGender.innerHTML = "Gender:";
    lblAge.innerHTML = "Age:";
    lan.innerHTML = `
    <option value="en">English</option>
    <option value="es">Spanish</option>`;
    genderSelector.innerHTML = `
    <option value="hombre">Man</option>
    <option value="mujer">Woman</option>`;
    button.innerHTML = "Greet";
  }
});

button.addEventListener("click", () => {
  event.preventDefault();
  if (lan.value === "es") {
    div.innerHTML = "<p>" + greeterEs(name.value, genderSelector.value, age.value, date.getHours()) + "</p>";
  }
  else {
    div.innerHTML = "<p>" + greeterEn(name.value, genderSelector.value, age.value, date.getHours()) + "</p>";
  }
});