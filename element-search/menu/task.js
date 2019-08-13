
let menuLinkAll = document.querySelectorAll('.menu__link');



for (let i = 0; i < menuLinkAll.length; i++ ){
  let menuLinkWithSub = menuLinkAll[i].closest('.menu__item').querySelector('ul.menu_sub');
  if(menuLinkWithSub){ menuLinkAll[i].onclick =  () =>{
    let menuSubActive = document.querySelector('.menu_active');
    
    if (menuLinkWithSub.classList.contains('menu_active')) {
      menuLinkWithSub.classList.remove('menu_active')
      } else if (menuSubActive){
        menuSubActive.classList.remove('menu_active');
        menuLinkWithSub.classList.add('menu_active');
        } else {
      menuLinkWithSub.classList.add('menu_active')
      };
      return false;
    };
  }

}


