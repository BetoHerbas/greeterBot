function greeter(name, gender, age, dayHour) {
  var great = "";
  if (dayHour >= 6 && dayHour < 12) {
    great = "Buenos días ";
  }
  else if (dayHour >= 12 && dayHour < 20) {
    great = "Buenas tardes ";
  }
  else {
    great = "Buenas noches ";
  }

  if (age >= 30) {
    if (gender === "hombre") {
      great = great + "Sr. " + name;
    }
    else {
      great = great + "Sra. " + name;
    }
  }
  else {
    if (gender === "hombre") {
      great = great +  "joven " + name;
    }
    else {
      great = great +  "joven " + name;
    }
  }
  return great;
}

export default greeter;
