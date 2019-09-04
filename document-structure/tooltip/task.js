let allElemsHasTooltip = document.getElementsByClassName("has-tooltip");

const setParametres = elem => {
  let parent = elem.parentNode;
  elem.textContent = parent.title;
  let coordinatesParent = parent.getBoundingClientRect();
  elem.style.top = coordinatesParent.bottom + "px";
  elem.style.left = coordinatesParent.left + "px";
};

const showElement = elem => {
  elem.classList.add("tooltip_active");
};

const addTooltip = elem => {
  let child = document.createElement("div");
  child.classList.add("tooltip");
  elem.appendChild(child);

  elem.addEventListener("click", event => {
    event.preventDefault();
    setParametres(child);
    hideAllTooltips();
    showElement(child);
  });
};

const hideAllTooltips = () => {
  let allTooltips = document.getElementsByClassName("tooltip");
  for (let tooltip of allTooltips) {
    if (tooltip.classList.contains("tooltip_active")) {
      tooltip.classList.remove("tooltip_active");
    }
  }
};

for (let el of allElemsHasTooltip) {
  addTooltip(el);
}
