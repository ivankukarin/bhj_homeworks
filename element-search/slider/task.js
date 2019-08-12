let sliderItems = document.querySelectorAll('.slider__item');

let btnPrev = document.querySelector('.slider__arrow_prev');
let btnNext = document.querySelector('.slider__arrow_next');

function hasClassActive (element){
  return element.classList.contains('slider__item_active');
}


  btnNext.addEventListener('click', ()=>{
    let arr = Array.from(sliderItems)
    let index = arr.findIndex(hasClassActive);
    
    arr[index].classList.remove('slider__item_active');
   
   /// Вопрос: Почему в коде ниже вместо 4 я не могу поставить arr.length, хотя тип тоже числовой, значение совпадает?
    if (index === 4) {
      index = -1;
      }; 
    arr[index+1].classList.add('slider__item_active');
    console.log(index);
  })

  
  btnPrev.addEventListener('click', ()=>{
    let arr = Array.from(sliderItems)
    let index = arr.findIndex(hasClassActive);
    arr[index].classList.remove('slider__item_active');
    if (index === 0) {
      index = arr.length
      };   
    
    arr[index-1].classList.add('slider__item_active');
    
  })