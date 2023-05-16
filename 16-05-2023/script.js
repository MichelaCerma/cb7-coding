import { cE, createCard, qS, createModal, qsA } from "./utils/fn.js";

const root = qS("#root");
const titles = cE("div");
const cardContainer = cE("div");
const filterContainer = cE("div");
const titleCard = cE("h2");
const filterText = cE("p");
const filterBtn = cE("button");

titleCard.textContent = "New arrivals";
filterText.textContent = "All products";
filterBtn.textContent = "svg";

filterContainer.className = "filterContainer";
cardContainer.className = "cardContainer";
titles.className = "text";
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) =>
      cardContainer.append(createCard(product))
    );
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

filterContainer.append(filterText, filterBtn);
titles.append(titleCard, filterContainer);
root.append(titles, cardContainer);

// root.append(createModal(productMock[0]));
