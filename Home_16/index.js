// Объект с данными о космическом корабле
const spaceship = {
    name: "Starship",
    manufacturer: "SpaceX",
    crew: 100,
    maxSpeed: "100,000 km/h"
  };
  
  // Получаем ссылки на элементы DOM
  const nameElement = document.getElementById("name");
  const manufacturerElement = document.getElementById("manufacturer");
  const crewElement = document.getElementById("crew");
  const maxSpeedElement = document.getElementById("maxSpeed");
  const hideManufacturerBtn = document.getElementById("hideManufacturerBtn");
  
  // Отображаем данные о космическом корабле
  nameElement.textContent = spaceship.name;
  manufacturerElement.textContent = spaceship.manufacturer;
  crewElement.textContent = spaceship.crew;
  maxSpeedElement.textContent = spaceship.maxSpeed;
  
  // Функция для скрытия производителя корабля
  function hideManufacturer() {
    manufacturerElement.style.display = "none";
  }
  
  // Назначаем обработчик события на кнопку "Hide Manufacturer"
  hideManufacturerBtn.addEventListener("click", hideManufacturer);
  