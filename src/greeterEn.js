function greeterEn(name, gender, age, dayHour) {
    var great = "";
    if (dayHour >= 6 && dayHour < 12) {
      great = "Good morning ";
    }
    else if (dayHour >= 12 && dayHour < 20) {
      great = "Good afternoon ";
    }
    else {
      great = "Good evening ";
    }
  
    if (age >= 30) {
      if (gender === "hombre") {
        great = great + "Mr. " + name;
      }
      else {
        great = great + "Ms. " + name;
      }
    }
    else {
        great = great + name;
    }
    return great;
  }
  
  export default greeterEn;
  