import { POST, DELETE } from "./http.js";

export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

export const createTodo = (data) => {
  const container = createEl("div", "", { name: "class", value: "container" });
  const input = createEl(
    "input",
    "",
    { name: "class", value: "text" },
    {
      name: "type",
      value: "text",
    }
  );

  const addTodo = createEl("button", "add task", {
    name: "class",
    value: "button",
  });

  const deleteTodo = createEl("button", "Remove task", {
    name: "class",
    value: "button",
  });

  container.append(input, addTodo, deleteTodo);

  addTodo.addEventListener("click", () => {
    POST(input.value);
    input.value = "";
  });

  deleteTodo.addEventListener("click", () => {
    DELETE(id);
  });

  return container;
};

export const createList = (data) => {
  const ul = createEl("ul", "", { name: "class", value: "list" });
  const li = createEl("li", data.todo, { name: "class", value: "item" });

  li.addEventListener("click", () => {
    const id = data.id;
    console.log(id);
  });
  ul.append(li);
  return ul;
};
