// Массив с ценами на товар
const prices = [100, 400, 900, 300, 500];

// Получаем ссылку на элемент DOM для отображения цен
const productPricesElement = document.getElementById("productPrices");

// Функция для отображения цен на странице
function displayPrices() {
  productPricesElement.innerHTML = ""; // Очищаем содержимое элемента

  prices.forEach(price => {
    const priceBlock = document.createElement("div");
    priceBlock.classList.add("price-block");
    priceBlock.textContent = `Price: ${price}$`;
    productPricesElement.appendChild(priceBlock);
  });
}

// Функция для фильтрации цен > 450
function filterPrices() {
  const priceBlocks = document.querySelectorAll(".price-block");

  priceBlocks.forEach(priceBlock => {
    const price = parseInt(priceBlock.textContent.match(/\d+/)[0]);
    if (price > 450) {
      priceBlock.classList.remove("hidden");
    } else {
      priceBlock.classList.add("hidden");
    }
  });
}

// Отображаем цены при загрузке страницы
displayPrices();

// Назначаем обработчик события на кнопку "Filter"
const filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", filterPrices);
