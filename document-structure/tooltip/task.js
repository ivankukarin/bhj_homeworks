let allElemsHasTooltip = document.getElementsByClassName("has-tooltip");

const setParametres = elem => {
  let parent = elem.parentNode;
  elem.textContent = parent.title;
  let coordinatesParent = parent.getBoundingClientRect();
  elem.style.top = coordinatesParent.bottom + "px";
  elem.style.left = coordinatesParent.left + "px";
};

const showElement = elem => {
  elem.classList.toggle("tooltip_active");
};

const addTooltip = elem => {
  let child = document.createElement("div");
  child.classList.add("tooltip");
  elem.appendChild(child);

  elem.addEventListener("click", event => {
    event.preventDefault();
    setParametres(child);
    showElement(child);
  });
};

for (let el of allElemsHasTooltip) {
  addTooltip(el);
}
