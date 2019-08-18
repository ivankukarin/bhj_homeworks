let rotateCaseAll = document.querySelectorAll('span.rotator__case');
let i = 0;

function removeClass(element, nameClass) {
    if (element.classList.contains(nameClass)) {
        element.classList.remove(nameClass)
    }
  };



function changePhrase () {
  for (let rotateCase of rotateCaseAll) {
    removeClass(rotateCase, 'rotator__case_active');
  }
  rotateCaseAll[i].classList.add('rotator__case_active');
  i++
  if (i=== rotateCaseAll.length) { i = 0 };
  };

setInterval(changePhrase, 1000);