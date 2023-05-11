const listAnimals = [
  {
    id: 1,
    title: "dog",
  },
  {
    id: 2,
    title: "cat",
  },
  {
    id: 3,
    title: "bird",
  },
  {
    id: 4,
    title: "tortoise",
  },
];

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const ulEl = cE("ul");
document.body.appendChild(ulEl);

listAnimals.forEach((animal) => {
  const liEl = cE("li");
  liEl.textContent = animal.title;
  ulEl.appendChild(liEl);
});

//Esercizio avanzato

const text = qS(".Text");
const add = qS(".addTask");
const del = qS(".removeTask");
const ulistEl = cE("ul");

document.body.appendChild(ulistEl);
text.setAttribute("placeholder", "scrivi qui");

const addTask = () => {
  if (text.value === "") {
    return;
  }
  const liItem = cE("li");
  liItem.textContent = text.value;
  ulistEl.appendChild(liItem);
  text.value = "";
};

add.addEventListener("click", addTask);
