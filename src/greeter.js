function greeter(name, gender) {
  if(gender === "hombre")
  {
    return "Hola Sr. " + name;
  }
  else
  {
    return "Hola Sra. " + name;
  }
  
}

export default greeter;
