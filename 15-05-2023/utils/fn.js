export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

export const createCard = (data) => {
  const cards = cE("div");
  cards.className = "card";
  const imgContainer = cE("div");
  const img = cE("img");
  const cardText = cE("div");
  const cardText1 = cE("div");
  const cardText2 = cE("div");
  const titleCard = cE("h3");
  const discCard = cE("p");
  const priceCard = cE("p");
  const brandCard = cE("p");
  const btnCard = cE("button");

  imgContainer.className = "imgContainer";
  cardText.className = "cardText";
  cardText1.className = "cardTitles";
  cardText2.className = "cardNum";

  img.src = data.thumbnail;
  img.alt = data.title;
  titleCard.textContent = data.title;
  priceCard.textContent = data.price;
  brandCard.textContent = data.brand;
  discCard.textContent = data.discountPercentage;
  btnCard.textContent = "bag";

  imgContainer.appendChild(img);
  cardText1.append(titleCard, brandCard);
  cardText2.append(discCard, btnCard);
  cardText.append(cardText1, cardText2);
  cards.append(imgContainer, cardText);
  return cards;
};
