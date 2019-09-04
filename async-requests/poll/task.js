let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("readystatechange", function() {
  if (xhr.status === 200 && xhr.readyState === 4) {
    let data = xhr.response.data;
    console.log(data);
    pollTitle.textContent = data.title;
    for (let answer of data.answers) {
      let buttonAnswer = `<button class="poll__answer">${answer}</button>`;
      pollAnswers.insertAdjacentHTML("beforeend", buttonAnswer);
    }
    let buttons = document.getElementsByClassName("poll__answer");

    for (let btn of buttons) {
      btn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
        location.reload()
      });
    }
  }
});
