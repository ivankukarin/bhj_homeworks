let items = document.getElementById("items");
let loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("readystatechange", function() {
  if (xhr.status === 200 && xhr.readyState === 4) {
    loader.classList.remove("loader_active");
    console.log(xhr.response.response.Valute);
    let data = xhr.response.response.Valute;
    console.log(data);
    for (let valute in data) {
      let item = `<div class="item"><div class="item__code">${data[valute].CharCode}</div><div class="item__value">${data[valute].Value}</div><div class="item__currency">руб.</div></div>`;

      items.insertAdjacentHTML("afterbegin", item);
    }
  }
});
