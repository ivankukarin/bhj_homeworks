let tabs = document.querySelector('.tab__navigation');
let tabAll = document.querySelectorAll('.tab');
let tabContents = document.querySelector('.tab__contents')
let tabContentAll = document.querySelectorAll('.tab__content');
 

tabs.addEventListener('click', (event)=>{
  let activeTab = tabs.querySelector('.tab_active');
  activeTab.classList.remove('tab_active');
  
  let activeContentTab =  tabContents.querySelector('.tab__content_active');
  activeContentTab.classList.remove('tab__content_active');

  let indexTab = Array.from(tabAll).indexOf(event.target);
  
  tabAll[indexTab].classList.add('tab_active');
  tabContentAll[indexTab].classList.add('tab__content_active');

})