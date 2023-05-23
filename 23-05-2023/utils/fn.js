import { userCred } from "./credentials.js";
import { root } from "../script.js";
import { GET } from "./http.js";

export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

export const loginIn = () => {
  const form = createEl("form", "", { name: "class", value: "form" });
  const inputText = createEl(
    "input",
    "",
    {
      name: "type",
      value: "text",
    },
    { name: "class", value: "input" },
    { name: "placeholder", value: "inserisci username" }
  );

  const password = createEl(
    "input",
    "",
    {
      name: "type",
      value: "password",
    },
    { name: "class", value: "input" },
    { name: "placeholder", value: "inserisci password" }
  );

  const submit = createEl(
    "input",
    "click",
    { name: "class", value: "submit" },
    {
      name: "type",
      value: "submit",
    }
  );

  form.append(inputText, password, submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isAuth = userCred.find(
      (input) =>
        input.username === e.srcElement[0].value &&
        input.password === e.srcElement[1].value
    );
    if (isAuth) {
      GET(isAuth.id).then((data) => {
        const userWel = createEl("h1", `Benvenut* ${isAuth.username}`, {
          name: "class",
          value: "username",
        });

        const wrapper = createEl("div", "", {
          name: "class",
          value: "wrapper",
        });
        root.append(userWel, wrapper);

        data.products.forEach((product) => {
          wrapper.append(cartEl(product));
        });
      });
      root.removeChild(form);
    } else {
      alert("nn sei entrato");
    }
  });

  return form;
};

export const cartEl = (data) => {
  const container = createEl("div", "", { name: "class", value: "container" });
  const price = createEl("p", data.price, { name: "class", value: "price" });
  const quantity = createEl("p", data.quantity, {
    name: "class",
    value: "quantity",
  });
  const title = createEl("h3", data.title, {
    name: "class",
    value: "title",
  });
  container.append(title, price, quantity);

  return container;
};
