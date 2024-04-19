//Задача 1
//У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для
//удвоения каждого значения в массиве (массив нужно передать
//аргументом) и вывода результата в консоль. Вызовите функцию для
//демонстрации результата

//Задача 2
//Напишите функцию, которая принимает строку и число n,
//а затем возвращает первые n символов строки. Для отображения результа
//работы функции, вызовите её три раза с различными параметрами,
// результат каждого вызова присвойте отдельной переменной и выведите
//переменные в консоль

//Задача 3*
//У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для
//вычисления среднего значения элементов массива (массив нужно передать
//аргументом) и вывода результата в консоль. Вызовите функцию для
// демонстрации результата

//Задача 1
const numbers = [2, 4, 6, 8, 10];
function doubleValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  console.log(arr);
}
doubleValues(numbers);

//Задача 2
function getFirstNSymbols(str, n) {
  let result = "";
  for (let i = 0; i < n && i < str.length; i++) {
    result += str[i];
  }
  return result;
}

// Вызываем функцию три раза с различными параметрами и сохраняем результат в переменные
const result1 = getFirstNSymbols("Hello, world!", 5);
const result2 = getFirstNSymbols("This is a test string", 8);
const result3 = getFirstNSymbols("JavaScript is awesome", 10);

// Выводим результаты в консоль
console.log(result1); // "Hello"
console.log(result2); // "This is "
console.log(result3); // "JavaScrip"

//Задача 3*
const numbers1 = [10, 15, 20, 25, 30];
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
}

console.log("Среднее значение элементов массива:", calculateAverage(numbers1));
