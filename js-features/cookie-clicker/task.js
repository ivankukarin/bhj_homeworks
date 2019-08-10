let image = document.getElementById('cookie');
let countClick = document.getElementById('clicker__counter')

function increaseSizeImg (){
  image.width = 250;
  countClick.textContent++;
  setTimeout(()=>image.width = 200, 1)
}

image.addEventListener('click', increaseSizeImg );




