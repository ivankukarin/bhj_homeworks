let checkboxAll = document.querySelectorAll('.interest__check');


for (let i = 0; i < checkboxAll.length; i++) {

  if (checkboxAll[i].closest('ul.interests_active') == null) {
    let parent = checkboxAll[i];
    let children = checkboxAll[i].closest('li').querySelector('ul').querySelectorAll('input');
    parent.addEventListener('change', ()=>{
      if (parent.checked){
        for(child of children){
          child.checked = true
        }
      } else {
        for(child of children){
          child.checked = false
      }
      }
    })  
  }
}


