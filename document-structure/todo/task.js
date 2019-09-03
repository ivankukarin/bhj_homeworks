let button = document.querySelector("#tasks__add");
let input = document.querySelector("#task__input");
let tasksList = document.querySelector("#tasks__list");

button.addEventListener("click", ev => {
  ev.preventDefault();
  new Task(input.value);
  input.value = "";
});

class Task {
  constructor(container) {
    this.container = container;
    this.taskItemList = `<div class="task__title">${this.container}</div><a href="#" class="task__remove">&times;</a>`;
    this.element = document.createElement("div");

    this.addItemList();
    this.deleteItemList();
  }

  addItemList() {
    this.element.classList.add("task");
    this.element.insertAdjacentHTML("beforeEnd", this.taskItemList);
    tasksList.appendChild(this.element);
  }

  deleteItemList() {
    this.element
      .querySelector("a.task__remove")
      .addEventListener("click", () => {
        this.element.remove();
      });
  }
}
