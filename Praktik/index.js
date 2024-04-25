function createUserCard() {
    // Получаем данные из формы
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let lastAge = document.getElementById("lastAge").value;
    let email = document.getElementById("lastEmail").value;
    
    // Проверяем, заполнены ли все поля
    if (firstName && lastName && email) {
      // Создаем карточку пользователя
      let userCard = document.getElementById("userCard");
      userCard.innerHTML = `
        <div class="user-info"><strong>Имя:</strong> ${firstName}</div>
        <div class="user-info"><strong>Фамилия:</strong> ${lastName}</div>
        <div class="user-info"><strong>Возраст:</strong> ${lastAge}</div>
        <div class="user-info"><strong>Email:</strong> ${email}</div>
      `;
      // Показываем карточку пользователя
      userCard.style.display = "block";
    } else {
      // Если не все поля заполнены, показываем сообщение об ошибке
      alert("Введите информацию во все поля");
      // Скрываем карточку пользователя (если она была показана ранее)
      document.getElementById("userCard").style.display = "none";
    }
  }
  