
  let hole = document.getElementsByClassName('hole');
  let dead = document.getElementById('dead');
  let lost = document.getElementById('lost');

  const getHole = (index) => document.getElementById(`hole${index}`);  
       
  const checkMole = (el) => {
    el.addEventListener('click', function (){
      if (el.classList.contains('hole hole_has-mole')) {
        dead.textContent++
        } else {
        lost.textContent++
        };
    });
  };
  
  for (let i = 1; i <= hole.length; i++){
    checkMole(getHole[i])
  };
