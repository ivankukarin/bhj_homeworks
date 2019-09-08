const textarea = document.querySelector("#editor");

window.onload = function() {
  if (localStorage.getItem("text")) {
    textarea.value = localStorage.getItem("text");
  }

  textarea.addEventListener("change", () => {
    localStorage.setItem("text", textarea.value);
  });
};
