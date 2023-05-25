import { POST, DELETE, GET } from "./utils/http.js";

const root = document.body.querySelector("#root");
let todolist = [];

export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

//elementi
const container = createEl("div", "", { name: "class", value: "container" });
const containerList = createEl("div", "", {
  name: "class",
  value: "container-list",
});

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

const ul = createEl("ul", "", { name: "class", value: "list" });
const deleteTodo = createEl("button", "X", {
  name: "class",
  value: "button",
});

//funzioni

export const createList = (data) => {
  const li = createEl("li", data.todo, { name: "class", value: "item" });

  const deleteTodo = createEl("button", "X", {
    name: "class",
    value: "delete",
  });

  deleteTodo.addEventListener("click", () => {
    let index = todolist.indexOf(data);
    todolist.splice(index, 1);
    let id = data.id;
    DELETE(id);
    console.log(id);
    li.remove();
  });

  li.appendChild(deleteTodo);
  return li;
};

//append
container.append(input, addTodo);
root.append(container, containerList);

//eventi

addTodo.addEventListener("click", () => {
  if (!input.value) return;
  POST(input.value);
  todolist.push({
    id: Math.floor(Math.random() * 10000),
    todo: input.value,
  });

  containerList.textContent = "";
  todolist.forEach((product) => {
    containerList.append(createList(product));
  });
  input.value = "";
});

//async

GET().then((data) => {
  console.log(data);
  console.log(data.todos);

  todolist = data.todos;
  todolist.forEach((data) => {
    containerList.append(createList(data));
  });
});
