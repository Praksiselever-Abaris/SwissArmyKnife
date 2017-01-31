function regnUt() {
  var sum = parseFloat(document.getElementById("sum").value);

  if (sum >= 350)
  {
    sum = sum * 1.25;
    document.getElementById("svar").innerHTML = "Du er over tollgrensen og må betale litt ekstra, total summen blir " + sum.toFixed(2) + "kr.";
  }
  else {
    document.getElementById("svar").innerHTML = "Du er under tollgrensen og må ikke betale noe ekstra, total summen blir " + sum.toFixed(2) + "kr.";
  }

}
