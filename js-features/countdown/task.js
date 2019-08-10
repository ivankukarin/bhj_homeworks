const timer = (time) => {

  const decreaseCount = function() {
    let timer = document.getElementById('timer');
    timer.textContent--;
    if (timer.textContent === '0') {
      alert("Вы победили в конкурсе!");
      clearInterval(timerId);
    }
  };
  let timerId = setInterval(decreaseCount, 50) 
}

timer();

