// import { POST, DELETE, GET } from "./utils/http.js";
export const createEl = (el, text, ...attrs) => {
  const element = document.createElement(el);
  element.textContent = text;

  attrs.forEach((attr) => {
    element.setAttribute(attr?.name, attr?.value);
  });

  return element;
};

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

    li.remove();
  });
  li.appendChild(deleteTodo);

  return li;
};

const listRender = () => {
  containerList.textContent = "";

  input.value = "";
  todolist.forEach((product) => {
    containerList.append(createList(product));
  });
  localStorage.setItem("todoList", JSON.stringify(todolist));
};

//elementi
const root = document.body.querySelector("#root");
let todolist = JSON.parse(localStorage.getItem("todoList")) || [];
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

listRender();

//append
container.append(input, addTodo);
root.append(container, containerList);

//eventi
addTodo.addEventListener("click", () => {
  if (!input.value) return;

  todolist.push({
    id: Date.now(),
    todo: input.value,
  });
  listRender();
});
