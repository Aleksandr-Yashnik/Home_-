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
    gender: "women",
    status: "in stock",
  },
  {
    id: 16,
    name: "Sweater for Women",
    image: "./img/Men/Sweater_men_2.jpg",
    price: "$40",
    gender: "women",
    status: "in stock",
  },
];

const productsContainer = document.getElementById("products");
const genderSelect = document.getElementById("genderSelect");
const productSelect = document.getElementById("productSelect");
const searchBtn = document.getElementById("searchBtn");

function renderProducts() {
  const selectedGender = genderSelect.value;
  const selectedProduct = productSelect.value;

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    if (
      (selectedGender === "all" || product.gender === selectedGender) &&
      (selectedProduct === "all" ||
        product.name.toLowerCase().includes(selectedProduct))
    ) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const image = document.createElement("img");
      image.src = product.image;
      const name = document.createElement("h3");
      name.textContent = product.name;
      const price = document.createElement("p");
      price.textContent = `Price: ${product.price}`;
      const status = document.createElement("p");
      status.textContent = `Status: ${product.status}`;
      productCard.appendChild(image);
      productCard.appendChild(name);
      productCard.appendChild(price);
      productCard.appendChild(status);
      productsContainer.appendChild(productCard);
    }
  });
}

searchBtn.addEventListener("click", renderProducts);

renderProducts();
