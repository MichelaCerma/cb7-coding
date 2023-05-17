export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qsA = (els) => document.querySelectorAll(els);

export const createCard = (data) => {
  const cards = cE("div");
  const imgContainer = cE("div");
  const img = cE("img");

  const category = cE("p");
  const cardText = cE("div");
  const cardText1 = cE("div");
  const cardText2 = cE("div");
  const titleCard = cE("h3");
  const discountCard = cE("p");
  const priceCard = cE("p");
  const brandCard = cE("p");
  const btnCard = cE("button");

  cards.setAttribute("id", data.id);
  cards.className = "card";
  priceCard.className = "price";
  discountCard.className = "discount";
  brandCard.className = "brand";
  imgContainer.className = "imgContainer";
  cardText.className = "cardText";
  cardText1.className = "cardTitles";
  cardText2.className = "cardNum";
  btnCard.className = "cart";

  img.src = data.thumbnail;
  img.alt = data.title;
  category.textContent = data.category;
  titleCard.textContent = data.title;
  priceCard.textContent = "$" + data.price;
  brandCard.textContent = data.brand;
  discountCard.textContent = data.discountPercentage;
  btnCard.textContent = "👜";

  imgContainer.appendChild(img);
  cardText1.append(titleCard, brandCard, category);
  cardText2.append(discountCard, priceCard, btnCard);
  cardText.append(cardText1, cardText2);
  cards.append(imgContainer, cardText);
  return cards;
};

export const createModal = (productData, parent = null) => {
  const modal = cE("div");
  modal.className = "modal";

  const overlay = cE("div");
  overlay.className = "overlay";

  const removeButton = cE("button");
  removeButton.textContent = "X";
  removeButton.className = "modal__button";

  const modal__text = cE("div");
  modal__text.className = "modal__text";

  const modalTitle = cE("h2");
  modalTitle.textContent = productData.title;
  modalTitle.className = "modal__title";

  const modalBrand = cE("h3");
  modalBrand.textContent = productData.brand;

  const modalDesc = cE("p");
  modalDesc.textContent = productData.description;
  modalDesc.className = "modal__desc";

  const modalMainImg = cE("img");
  modalMainImg.src = productData.thumbnail;
  modalMainImg.className = "modal__img";

  const galleyEl = cE("div");
  for (let img of productData.images) {
    const modalGallery = cE("img");
    modalGallery.src = img;
    modalGallery.className = "modal__gallery";
    galleyEl.appendChild(modalGallery);
  }

  const imageContainer = cE("div");
  imageContainer.className = "modal__image__container";

  const modalPrice = cE("p");
  modalPrice.textContent = productData.price + "$";
  modalPrice.className = "modal__price";

  const modalStock = cE("p");
  modalStock.textContent = productData.stock;
  modalStock.className = "modal__stock";

  const modalRating = cE("p");
  modalRating.textContent = productData.rating;
  modalRating.className = "modal__rating";

  if (parent) {
    removeButton.addEventListener("click", () => parent.removeChild(overlay));
  }
  modal__text.append(modalTitle, modalBrand, modalDesc, modalPrice, modalStock);
  imageContainer.append(modalMainImg, galleyEl);
  modal.append(removeButton, imageContainer, modal__text);
  overlay.appendChild(modal);
  return overlay;
};
