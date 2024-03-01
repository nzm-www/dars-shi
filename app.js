var number1 = parseFloat(prompt("Raqam krt"));
var number2 = parseFloat(prompt("raqam krt"));
var result = prompt("alam");
var result;
switch (result) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 !== 0) {
      natija = number1 / number2;
    } else {
      result = "nolga iloji yoqu";
    }
    break;
  default:
    result = "ukam boshqatdan yozib kir adashyabsan";
}
console.log("result:", result);
