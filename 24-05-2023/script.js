import { createTodo, createList } from "./utils/fn.js";
import { GET } from "./utils/http.js";
const root = document.body.querySelector("#root");

root.append(createTodo());

GET().then((data) => {
  data.todos.forEach((data) => {
    // console.log(data);

    root.append(createList(data));
  });
});
