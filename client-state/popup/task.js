

const modal = document.getElementById("subscribe-modal");
const buttonClose = document.querySelector(".modal__close");


function onload() {
  console.log(document.cookie);
  let cookieClose = getCookie("close");
  console.log(cookieClose);
  if (!cookieClose) {
    modal.classList.add("modal_active");
  }
}

function closeModal() {
  modal.classList.remove("modal_active");
  document.cookie = 'close="true"';
}

function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
}

buttonClose.addEventListener('click', closeModal);
window.onload = onload();