// Получаем ссылку на форму и элемент для вывода результата
let form = document.getElementById("temperatureForm");
let resultElement = document.getElementById("result");

// Обрабатываем отправку формы
form.addEventListener("submit", function(event) {
  // Предотвращаем обновление страницы
  event.preventDefault();
  
  // Получаем введенное значение температуры из формы
  let temperatureInput = document.getElementById("temperatureInput");
  let temperature = parseFloat(temperatureInput.value);
  
  // Проверяем условия и задаем соответствующий текст для вывода
  let message;
  if (temperature < 0) {
    message = "Холодно!";
  } else if (temperature >= 0 && temperature <= 20) {
    message = "Прохладно";
  } else if (temperature >= 21 && temperature <= 30) {
    message = "Тепло";
  } else {
    message = "Жарко!";
  }
  
  // Выводим сообщение на страницу
  resultElement.textContent = message;
});


