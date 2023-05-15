import { cE, createCard, qS } from "./utils/fn.js";

const root = qS("#root");
const titles = cE("div");
const cardContainer = cE("div");
const titleCard = cE("h3");
const filterText = cE("p");
const filterBtn = cE("button");

titleCard.textContent = "New arrivals";
filterText.textContent = "All products";
filterBtn.textContent = "👜";

cardContainer.className = "cardContainer";
titles.className = "text";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      cardContainer.append(createCard(product))
    )
  );

titles.append(titleCard, filterText, filterBtn);
root.append(titles, cardContainer);
