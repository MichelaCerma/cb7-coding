import { cartProducts } from "../script.js";
import { userList } from "./credentials.js";

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qsA = (els) => document.querySelectorAll(els);

export const createCard = (data) => {
  const cards = cE("div");
  const imgContainer = cE("div");
  const img = cE("img");

  const categoryEl = cE("p");
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
  categoryEl.textContent = data.category;
  titleCard.textContent = data.title;
  priceCard.textContent = "$" + data.price;
  brandCard.textContent = data.brand;
  discountCard.textContent = data.discountPercentage;
  btnCard.textContent = "👜";

  imgContainer.appendChild(img);
  cardText1.append(titleCard, brandCard, categoryEl);
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

  const buyBtn = cE("button");
  buyBtn.textContent = "Add to cart";
  buyBtn.className = "modal__buy__btn";

  if (parent) {
    removeButton.addEventListener("click", () => parent.removeChild(overlay));
  }
  modal__text.append(
    modalTitle,
    modalBrand,
    modalDesc,
    modalPrice,
    modalStock,
    buyBtn
  );
  imageContainer.append(modalMainImg, galleyEl);
  modal.append(removeButton, imageContainer, modal__text);
  overlay.appendChild(modal);

  buyBtn.addEventListener("click", () => {
    {
      cartProducts.push(productData);
    }
  });
  return overlay;
};

//selector

export const cartModal = (cartProducts) => {
  const cartContainer = cE("div");
  const cardEl = cE("div");

  cartContainer.classList.add("cart-select");

  const title = cE("h4");
  title.textContent = cartProducts.title;

  const imgCart = cE("img");
  imgCart.src = cartProducts.thumbnail;
  imgCart.className = "modal__img";

  const price = cE("h4");
  price.textContent = cartProducts.price;

  const cartRemove = cE("button");
  cartRemove.className = "remove";
  cartRemove.textContent = "X";

  cartContainer.append(cardEl);
  cardEl.append(title, imgCart, price, cartRemove);

  cartRemove.addEventListener("click", () => {
    cartContainer.removeChild(cardEl);
  });

  return cartContainer;
};

export const createSelect = (data) => {
  let optionEl = cE("option");
  optionEl.setAttribute("value", data);
  optionEl.textContent = data;
  optionEl.className = "option";
  return optionEl;
};

export const logIn = () => {
  const container = cE("div");
  container.className = "container";

  const form = cE("form");
  form.className = "form";

  const userName = cE("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("placeholder", "inserisci username");

  const password = cE("input");
  password.setAttribute("type", "password");
  password.setAttribute("placeholder", "inserisci password");

  const submitBtn = cE("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.className = "form__submit";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const authCheck = !!userList.find(
      (input) =>
        input.username === e.srcElement[0].value &&
        input.password === e.srcElement[1].value
    );
    if (authCheck) {
      container.removeChild(form);
      root.removeChild(container);
    } else {
      alert("riprova");
    }
  });

  container.appendChild(form);
  form.append(userName, password, submitBtn);

  return container;
};
