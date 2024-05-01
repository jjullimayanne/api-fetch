import fetchProducts from "./products_fetch.js";

export default async function displayProduct() {
  const products = await fetchProducts();
  const root = document.getElementById("root");
  products.forEach((product) => {
    const cardHtml = createProductCard(product);
    root.appendChild(cardHtml);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = product.title;
  const price = document.createElement("p");
  price.textContent = product.price;
  card.appendChild(title);
  card.appendChild(price);

  return card;
}
