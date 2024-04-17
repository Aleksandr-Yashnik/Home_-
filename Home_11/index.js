// Задача 1
let number1 = prompt("Введите число:");
number1 = parseFloat(number1); 
if (number1 >= 10 && number1 <= 20) {
  console.log("Число находится в диапазоне от 10 до 20");
} else {
  console.log(number1 + " не входит в указанный диапазон");
}

// Задача 2
let number2 = prompt("Введите первое число:");
let number3 = prompt("Введите второе число:");
number2 = parseFloat(number2); 
number3 = parseFloat(number3);

if (number2 > 0 && number2 % 2 !== 0 && number3 > 0 && number3 % 2 !== 0) {
  console.log("Оба числа положительные и нечетные");
} else {
  console.log("Хотя бы одно число не соответствует условию");
}

// Задача 3
let array = ["avto", "banana", "cherry", "kivi"];
console.log("Длина массива:", array.length);
console.log("Первый элемент массива:", array[0]);
console.log("Последний элемент массива:", array[array.length - 1]);
