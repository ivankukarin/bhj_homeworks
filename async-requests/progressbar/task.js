let progress = document.getElementById("progress");
let buttonSend = document.getElementById("send");

function uploadFile(e) {
  e.preventDefault();

  let timeStart = new Date();
  let formInputFile = document.querySelector('input[name="file"]');
  let file = formInputFile.files[0];

  let xhr = new XMLHttpRequest();
  let formData = new FormData();
  formData.append("file", file);

  xhr.upload.onerror = function() {
    console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
  };

  xhr.upload.onprogress = function(evt) {
    progress.value = evt.loaded / evt.total;
    console.log(evt.loaded / evt.total);
  };

  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState == 4){
      let timeEnd = new Date();
      let timer = timeEnd - timeStart;
      console.log(`Время на запрос потрачено ${timer/1000} секунд.`);
    }

  };

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.setRequestHeader("Content-Type", "multipart/form-data", true);
  xhr.send(formData);
}

buttonSend.addEventListener("click", uploadFile);
