let num1 = prompt('Enter your first number');
num1 = parseFloat(num1);
let num2 = prompt('Enter your second number');
num2 = parseFloat(num2);

let result;

//Addition
result = num1 + num2;
document.write('Addition: ' + num1 + " + " + num2 + ' = ' + result + '<br>');
//Subtraction
result2 = num1 - num2;
document.write('Subtraction: ' + num1 + " - " + num2 + ' = ' + result2 + '<br>');
//Multiplication
result3 = num1 * num2;
document.write('Multiplication: ' + num1 + " * " + num2 + ' = ' + result3 + '<br>');
//Divition
result4 = num1 / num2;
document.write('Divition: ' + num1 + " / " + num2 + ' = ' + result4 + '<br><br>');

let point = Math.random()*5;
point = Math.round(point);
document.write('You have got ' + point + ' point for using our calculator.');
