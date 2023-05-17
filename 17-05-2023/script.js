import { cE, createCard, qS, createModal, qsA } from "./utils/fn.js";

fetch("https://dummyjson.com/products/")
  .then((res) => res.json())
  .then((data) => {
    productData = data.products;
    productData.forEach((product) => cardContainer.append(createCard(product)));
  })
  .then(() => {
    const allCards = qsA(".card");
    allCards.forEach((product) => {
      product.addEventListener("click", () => {
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => root.append(createModal(data, root)));
      });
    });
  });

const root = qS("#root");
const titles = cE("div");
const cardContainer = cE("div");
const filterContainer = cE("div");
const titleCard = cE("h2");
const filterText = cE("p");
const filterBtn = cE("button");

let productData = [];
const inputText = qS(".navbar__input");

const selectOption = qS(".category");
titleCard.textContent = "New arrivals";
filterText.textContent = "All products";
filterBtn.textContent = "svg";

filterContainer.className = "filterContainer";
cardContainer.className = "cardContainer";
titles.className = "text";

filterContainer.append(filterText, filterBtn);
titles.append(titleCard, filterContainer);
root.append(titles, cardContainer);

inputText.addEventListener("input", (e) => {
  if (e.target.value === "") {
    productData.forEach((el) => {
      cardContainer.append(createCard(el));
    });
  } else {
    cardContainer.textContent = "";
    // productData.filter((pina) => pina.length >= 3)
    productData
      .filter((search) =>
        search.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .forEach((obj) => cardContainer.append(createCard(obj)));
  }
});

selectOption.addEventListener("change", (e) => {
  cardContainer.textContent = "";

  productData
    .filter((cat) => cat.category === e.target.value)
    .forEach((obj) => cardContainer.append(createCard(obj)));

  const allCards = qsA(".card");
  allCards.forEach((product) => {
    product.addEventListener("click", () => {
      fetch(`https://dummyjson.com/products/${product.id}`)
        .then((res) => res.json())
        .then((data) => root.append(createModal(data, root)));
    });
  });
});
