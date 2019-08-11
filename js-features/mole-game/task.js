const f= () => {
  let dead = document.getElementById('dead');
  let lost = document.getElementById('lost');

  const getHole = (index) => document.getElementById(`hole${index}`);
  
  for (let i = 1; i <= 9; i++){
    let el = getHole(i);
    const checkMole = () => {if (el.classList.contains('hole hole_has-mole')){
      dead.textContent++
      } else {
      lost.textContent++
      };
    };
    el.addEventListener('click', checkMole)
  }
};

f();