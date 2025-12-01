// 1. Создание To Do List - необходимо средствами JS создать
// страницу на которой будут элементы: header содержащий
// заголовок страницы контейнер с контентом страницы поле
// ввода input список элементов кнопка добавления To Do (Стили
// возможно добавлять через CSS)

const header = document.createElement("header");
const title = document.createElement("h1");
title.textContent = "Создание To Do List";
document.body.append(header);
header.append(title);

const contentContainer = document.createElement("div");
contentContainer.classList.add("content_container");
header.append(contentContainer);

const titleH2 = document.createElement("h2");
titleH2.textContent = "контейнер c контентом страницы";
contentContainer.append(titleH2);

const input = document.createElement("input");

input.type = "text";
input.placeholder = "Введите текст...";
input.classList.add("my-input");
input.name = "input";

contentContainer.append(input);

const button = document.createElement("button");
button.textContent = "To Do";
contentContainer.append(button);

const toDoList = document.createElement("ul");
contentContainer.append(toDoList);

// 2. Добавить возможность добавления To Do в список с помощью
// поля ввода input и кнопки создания нового To Do. Для этого
// нужно почитать про событие input, и данные из инпута
// записывать в переменную. А после нажатия на кнопку должен
// создаваться новый элемент li, куда будет записываться это
// значение. Разберем на занятии

let inputValue = "";

input.addEventListener("input", function (event) {
  inputValue = event.target.value;
});

button.addEventListener("click", () => {
  addToDoElement();
});

function addToDoElement() {
  const listItem = document.createElement("li");
  listItem.textContent = inputValue;
  toDoList.append(listItem);
  input.value = "";
  inputValue = "";
}
