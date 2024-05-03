const products = [
    { name: "Jeans for Men", image: "./img/Men/Men_Jeans_2.jpg", price: "$50", gender: "men", status: "in stock" },
    { name: "Jeans for Men", image: "./img/Men/Men_Jeans_1.jpg", price: "$65", gender: "men", status: "in stock" },
    { name: "Jeans for woman ", image: "./img/Women/women_Jeans_1.jpg", price: "$65", gender: "women", status: "in stock" },
    { name: "Jeans for woman ", image: "./img/Women/women_Jeans_2.jpg", price: "$70", gender: "women", status: "in stock" },
    { name: "T-shirt for Women", image: "./img/Women/t-shirt_women_1.jpg", price: "$20", gender: "women", status: "in stock" },
    { name: "T-shirt for Women", image: "./img/Women/t-shirt_women_2.jpg", price: "$30", gender: "women", status: "in stock" },
    { name: "T-shirt for Men", image: "./img/Men/t-shirt_men_1.jpg", price: "$30", gender: "men", status: "in stock" },
    { name: "T-shirt for Men", image: "./img/Men/t-shirt_men_2.jpg", price: "$35", gender: "men", status: "in stock" },
    { name: "Jacket for Men", image: "jacket.jpg", price: "$80", gender: "men", status: "out of stock" },
    { name: "Sweater for Women", image: "sweater.jpg", price: "$40", gender: "women", status: "in stock" }
  ];
  
  const productsContainer = document.getElementById("products");
  const genderSelect = document.getElementById("genderSelect");
  const productSelect = document.getElementById("productSelect");
  const searchBtn = document.getElementById("searchBtn");
  
  function renderProducts() {
    const selectedGender = genderSelect.value;
    const selectedProduct = productSelect.value;
    
    productsContainer.innerHTML = "";
    
    products.forEach(product => {
      if ((selectedGender === "all" || product.gender === selectedGender) &&
          (selectedProduct === "all" || product.name.toLowerCase().includes(selectedProduct))) {
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
  