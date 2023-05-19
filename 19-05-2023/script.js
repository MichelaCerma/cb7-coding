import {
  cE,
  createCard,
  qS,
  createSelect,
  createModal,
  cartModal,
  qsA,
  logIn,
} from "./utils/fn.js";

// create card
fetch("https://dummyjson.com/products/")
  .then((res) => res.json())
  .then((data) => {
    productData = data.products;
    productData.forEach((product) => cardContainer.append(createCard(product)));
  })
  .then(() => {
    for (let i = 0; i <= listCategories.length - 1; i++) {
      select.append(createSelect(listCategories[i]));
    }
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

//elementi
const root = qS("#root");
const titles = cE("div");
const cardContainer = cE("div");
const filterContainer = cE("div");
const titleCard = cE("h2");
const filterText = cE("p");
const filterBtn = cE("button");
const select = cE("select");

let productData = [];
let listCategories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
];

export let cartProducts = [];

const inputText = qS(".navbar__input");

titleCard.textContent = "New arrivals";
filterText.textContent = "All products";
filterBtn.textContent = "svg";

select.className = "category";
filterContainer.className = "filterContainer";
cardContainer.className = "cardContainer";
titles.className = "text";

filterContainer.append(filterText, filterBtn, select);
titles.append(titleCard, filterContainer);
root.append(titles, cardContainer);
root.append(logIn());

inputText.addEventListener("input", (e) => {
  if (e.target.value === "") {
    productData.forEach((el) => {
      cardContainer.append(createCard(el));
    });
  } else {
    cardContainer.textContent = "";

    productData
      .filter((search) =>
        search.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .forEach((obj) => cardContainer.append(createCard(obj)));
  }
});

select.addEventListener("change", (e) => {
  cardContainer.textContent = "";
  productData
    .filter(
      (obj) => obj.category.toLowerCase() === e.target.value.toLowerCase()
    )
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

const cart = qS(".cart");
cart.addEventListener("click", () => {
  cartProducts.forEach((pippo) => root.append(cartModal(pippo)));
});
