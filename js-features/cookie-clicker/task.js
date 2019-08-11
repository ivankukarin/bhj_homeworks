let image = document.getElementById('cookie');
let countClick = document.getElementById('clicker__counter');
let speedClick = document.getElementById('speed__click');
let start;
let end;
let timeClickSec;

function increaseSizeImg (){
  end = new Date;
  timeClickSec = (1000/((end - start))).toFixed(2);
  speedClick.textContent = timeClickSec;

  image.width = 250;
  countClick.textContent++;
  setTimeout(()=>image.width = 200, 1)

  start = new Date;
}

image.addEventListener('click', increaseSizeImg );




