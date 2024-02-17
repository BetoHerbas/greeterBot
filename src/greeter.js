function greeter(name, gender, age) {
  if (age >= 30) {
    if (gender === "hombre") {
      return "Hola Sr. " + name;
    }
    else {
      return "Hola Sra. " + name;
    }
  }
  else {
    if (gender === "hombre") {
      return "Hola Joven. " + name;
    }
    else {
      return "Hola Joven. " + name;
    }
  }
  
}



export default greeter;
