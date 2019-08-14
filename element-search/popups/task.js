let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');


let btnModalCloseModalMain = document.querySelector('#modal_main .modal__close');
const removeModalMain = () => modalMain.classList.remove('modal_active');
btnModalCloseModalMain.addEventListener('click', removeModalMain );

let btnShowSuccess = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');
const addModalMain = ()=>  {
  modalSuccess.classList.add('modal_active');
  modalMain.classList.remove('modal_active');
}
btnShowSuccess.addEventListener('click', addModalMain);

let btnModalCloseModalSuccess = document.querySelector('#modal_success .modal__close');
const removeModalSuccess = () => modalSuccess.classList.remove('modal_active');
btnModalCloseModalSuccess.addEventListener('click', removeModalSuccess );
btnModalCloseModalSuccess.addEventListener('click', removeModalMain );