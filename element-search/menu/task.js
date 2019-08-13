
let menuLinkAll = document.querySelectorAll('.menu__link');
let menuSub = document.getElementsByClassName('menu_active');


for (let i = 0; i < menuLinkAll.length; i++ ){
  let menuLinkWithSub = menuLinkAll[i].closest('.menu__item').querySelector('ul.menu_sub');
  if(menuLinkWithSub){ menuLinkAll[i].onclick =  () =>{
    console.log(menuLinkAll);
    if (menuLinkWithSub.classList.contains('menu_active')) {
      menuLinkWithSub.classList.remove('menu_active')
      } else {
      menuLinkWithSub.classList.add('menu_active')
      };
      return false;
    };
  }

}


