function showLesson() {
  // Получаем значение выбранной лекции из списка
  let Lesson = document.getElementById("Lesson").value;
  
  // Проверяем, что выбрана лекция
  if (Lesson) {
      // Формируем URL для перенаправления
      let url = Lesson + ".html";
      // Перенаправляем пользователя на страницу урока
      window.location.href = url;
  } else {
      // Если лекция не выбрана, выводим сообщение об ошибке
      alert("Пожалуйста, выберите лекцию");
  }
}