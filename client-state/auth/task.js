const signIn = document.querySelector("#signin");
const buttonSignin = signIn.querySelector("#signin__btn");

const welcome = document.querySelector("#welcome");
const userId = welcome.querySelector("#user_id");

window.onload = () => {
  if (localStorage.id && localStorage.id!='undefined') {
    welcome.classList.add("welcome_active");
    userId.textContent = localStorage.getItem("id");
  } else {
    signIn.classList.add("signin_active");
  }
};

function xhrRequest() {
  const formSignIn = document.querySelector("#signin__form");

  let xhr = new XMLHttpRequest();
  let formData = new FormData(formSignIn);

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  // xhr.setRequestHeader("Content-Type", "multipart/form-data", true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      if (data.success === true) {
        userId.textContent = data.user_id;
        welcome.classList.add("welcome_active");
        signIn.classList.remove("signin_active");
        localStorage.setItem("id", data.user_id);
      } else {
        alert("Неверный логин/пароль");
        signIn.querySelector('[name="login"]').value = "";
        signIn.querySelector('[name="password"]').value = "";
      }
    }
  };
  xhr.send(formData);
}

buttonSignin.addEventListener("click", e => {
  e.preventDefault();
  xhrRequest();
});
