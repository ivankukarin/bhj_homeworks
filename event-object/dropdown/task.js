let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', (event)=>{
  event.preventDefault();
  dropdownList.classList.add('dropdown__list_active');
  }
);

for (let item of dropdownItems) {
  item.addEventListener('click',() => {
    event.preventDefault();
    console.log(item.firstElementChild.textContent);
    dropdownValue.textContent = item.firstElementChild.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  })
}


