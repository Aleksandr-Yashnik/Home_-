// Выбор необходимых элементов
let buttonResult = document.querySelector(".result-button");
let resultContainer = document.querySelector(".result");
let form = document.querySelector("#form");
// console.log(form);

// Вариант 1 - использование кнопки с типом button
// // Создание функции для обработки события нажатия на кнопку "Рассчитать"
// const calculateIdealWeight = () => {
//   let height = form.height.value;
//   //альтернативный метод выбора элемента
//   // let height = document.querySelector("#person-height").value;
//   let gender = form.gender.value;
//   // console.log(typeof height);
//   let personHeight = Number(height);
//   if (personHeight && gender) {
//     let idealWeight;
//     if (gender === "male") {
//       idealWeight = personHeight - (100 + (personHeight - 100) / 20);
//     } else if (gender === "female") {
//       idealWeight = personHeight - (100 + (personHeight - 100) / 10);
//     }
//     resultContainer.textContent = `Идеальный вес: ${Math.round(
//       idealWeight
//     )} кг`;
//   } else {
//     alert("Введите рост и пол");
//   }
// };
// //Привязываем слушателя к кнопке
// buttonResult.addEventListener("click", calculateIdealWeight);
// Вариант 2 - использование кнопки с типом submit
const calculateIdealWeight = (event) => {
  event.preventDefault();
  let height = form.height.value;
  let gender = form.gender.value;
  // console.log(height);

  let personHeight = Number(height);

  let idealWeight;
  if (gender === "male") {
    idealWeight = personHeight - (100 + (personHeight - 100) / 20);
  } else if (gender === "female") {
    idealWeight = personHeight - (100 + (personHeight - 100) / 10);
  }
  resultContainer.textContent = `Идеальный вес: ${Math.round(idealWeight)} кг`;
};

//Привязываем слушателя к форме
form.addEventListener("submit", calculateIdealWeight);