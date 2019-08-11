const catchMole = () => {
  let dead = document.getElementById('dead');
  let lost = document.getElementById('lost');
  const
  const startPosition = () => {
    dead.textContent = 0;
    lost.textContent = 0;
  }


  const getHole = (index) => document.getElementById(`hole${index}`);
  
  for (let i = 1; i <= 9; i++){
    let el = getHole(i);
    const checkMole = () => {if (el.classList.contains('hole_has-mole')){
      dead.textContent++
      } else {
      lost.textContent++
      };
      if (dead.textContent === '10'){
        alert('Победа!');
        startPosition();
      }
      if (lost.textContent === '5'){
        alert('Вы проиграли!');
        startPosition();
      }
    };
    el.addEventListener('click', checkMole)
    
  }
  

};

catchMole();