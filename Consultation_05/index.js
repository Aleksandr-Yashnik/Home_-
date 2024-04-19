//let num = 3.2;

//let roundNum = Math.round(num);
//console.log(roundNum);

//let ceilRoundNum = Math.ceil(num);
//console.log(ceilRoundNum);

//получение рендомного числа
/*let randomNumber = Math.ceil(Math.random() * 101);
console.log(randomNumber);

let squareNum = Math.sqrt(randomNumber);
//squareNum = squareNum.toFixed(2);
console.log(squareNum);
// Округление до указаного знака после запятой
let fixedNum = squareNum.toFixed(2);
console.log(fixedNum);

let maxNum = Math.max(2, 4, 9);
console.log(maxNum);

let minNum = Math.min(-2, 4, -9);
console.log(minNum);

//Прерывание цикла
let numArray = [12,4,32,null,7];

/*for (let i = 0; i < 10; i++) {
  if (numArray[i] === null) {
    break;
  }
  console.log(i);
}
*/
/*let fruitsArray = ['apple', 'banana', 'cherry', 'orange'];
let index = fruitsArray.indexOf('cherry');
console.log(index);

let numbers = [15, 8, 45, -67, 2];
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // Выведет: 67
*/
let numbers1 = [1, -2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers1.filter(number => number % 2 === 0 && number > 0);
console.log(evenNumbers); 