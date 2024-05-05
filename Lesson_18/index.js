const products = [
  {
    id: 1,
    name: "Jeans for Men",
    image: "./img/Men/Men_Jeans_2.jpg",
    price: "$50",
    gender: "men",
    status: "in stock",
  },
  {
    id: 2,
    name: "Jeans for Men",
    image: "./img/Men/Men_Jeans_1.jpg",
    price: "$65",
    gender: "men",
    status: "in stock",
  },
  {
    id: 3,
    name: "Jeans for woman ",
    image: "./img/Women/women_Jeans_1.jpg",
    price: "$65",
    gender: "women",
    status: "in stock",
  },
  {
    id: 4,
    name: "Jeans for woman ",
    image: "./img/Women/women_Jeans_2.jpg",
    price: "$70",
    gender: "women",
    status: "in stock",
  },
  {
    id: 5,
    name: "T-shirt for Women",
    image: "./img/Women/t-shirt_women_1.jpg",
    price: "$20",
    gender: "women",
    status: "in stock",
  },
  {
    id: 6,
    name: "T-shirt for Women",
    image: "./img/Women/t-shirt_women_2.jpg",
    price: "$30",
    gender: "women",
    status: "in stock",
  },
  {
    id: 7,
    name: "T-shirt for Men",
    image: "./img/Men/t-shirt_men_1.jpg",
    price: "$30",
    gender: "men",
    status: "in stock",
  },
  {
    id: 8,
    name: "T-shirt for Men",
    image: "./img/Men/t-shirt_men_2.jpg",
    price: "$35",
    gender: "men",
    status: "in stock",
  },
  {
    id: 9,
    name: "Jacket for Men",
    image: "./img/Men/Jacket_men_1.jpg",
    price: "$80",
    gender: "men",
    status: "out of stock",
  },
  {
    id: 10,
    name: "Jacket for Men",
    image: "./img/Men/Jacket_men_2.jpg",
    price: "$80",
    gender: "men",
    status: "out of stock",
  },
  {
    id: 11,
    name: "Jacket for Women",
    image: "./img/Women/Jacket_women_1.jpg",
    price: "$80",
    gender: "women",
    status: "out of stock",
  },
  {
    id: 12,
    name: "Jacket for Women",
    image: "./img/Women/Jacket_women_2.jpg",
    price: "$80",
    gender: "women",
    status: "out of stock",
  },
  {
    id: 13,
    name: "Sweater for Women",
    image: "./img/Women/Sweater_women_1.jpg",
    price: "$40",
    gender: "women",
    status: "in stock",
  },
  {
    id: 14,
    name: "Sweater for Women",
    image: "./img/Women/Sweater_women_2.jpg",
    price: "$40",
    gender: "women",
    status: "in stock",
  },
  {
    id: 15,
    name: "Sweater for Women",
    image: "./img/Men/Sweater_men_1.jpg",
    price: "$40",
    gender: "men",
    status: "in stock",
  },
  {
    id: 16,
    name: "Sweater for Women",
    image: "./img/Men/Sweater_men_2.jpg",
    price: "$40",
    gender: "men",
    status: "in stock",
  },
];

// Получаем ссылку на контейнер для отображения товаров
const productsContainer = document.getElementById("products");
// Получаем ссылку на выпадающий список для выбора пола
const genderSelect = document.getElementById("genderSelect");
// Получаем ссылку на выпадающий список для выбора товара
const productSelect = document.getElementById("productSelect");
// Получаем ссылку на кнопку "Search"
const searchBtn = document.getElementById("searchBtn");

// Функция для отображения товаров в соответствии с выбранными фильтрамим
function renderProducts() {
  // Получаем выбранный пол из выпадающего списка
  const selectedGender = genderSelect.value;
  // Получаем выбранный товар из выпадающего списка
  const selectedProduct = productSelect.value;

   // Очищаем контейнер перед отображением новых товаров
  productsContainer.innerHTML = "";
 // Проходим по каждому товару в массиве
  products.forEach((product) => {
    if (
      (selectedGender === "all" || product.gender === selectedGender) &&
      (selectedProduct === "all" ||
        product.name.toLowerCase().includes(selectedProduct))
    ) {
      // Создаем элемент карточки товара
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      // Создаем изображение товара и устанавливаем его источник
      const image = document.createElement("img");
      image.src = product.image;
      // Создаем элементы названия, цены и статуса товара и устанавливаем их содержимое
      const name = document.createElement("h3");
      name.textContent = product.name;
      const price = document.createElement("p");
      price.textContent = `Price: ${product.price}`;
      const status = document.createElement("p");
      status.textContent = `Status: ${product.status}`;
      // Добавляем созданные элементы в карточку товара
      productCard.appendChild(image);
      productCard.appendChild(name);
      productCard.appendChild(price);
      productCard.appendChild(status);
       // Добавляем карточку товара в контейнер для отображения товаров
      productsContainer.appendChild(productCard);
    }
  });
}
// Добавляем обработчик события для кнопки "Search", который вызывает функцию отображения товаров
searchBtn.addEventListener("click", renderProducts);
// Вызываем функцию отображения товаров при загрузке страницы
renderProducts();
