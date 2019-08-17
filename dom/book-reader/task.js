let divControlFontSize = document.querySelector('div.book__control_font-size');
let aFontSizeAll = divControlFontSize.querySelectorAll('a.font-size');



for (let aFontSize of aFontSizeAll) {
  aFontSize.addEventListener('click', function (ev){
    ev.preventDefault();
    let bookContent = document.querySelector('div.book__content');

    function removeClass(element, nameClass) {
      if (element.classList.contains(nameClass)) {
          element.classList.remove(nameClass)
      }
    };

    for (let aFontSize of aFontSizeAll){
      removeClass(aFontSize, 'font-size_active');
    }
    
       
    function chengeFontSizeContent(){
      if (ev.target.classList.contains('font-size_small')) {
        removeClass(bookContent, 'book_fs-big');
        bookContent.classList.add('book_fs-small')
      } else if (ev.target.classList.contains('font-size_big')) {
        removeClass(bookContent, 'book_fs-small');
        bookContent.classList.add('book_fs-big')
      } else {
        removeClass(bookContent, 'book_fs-big');
        removeClass(bookContent, 'book_fs-small');
      }
    };

    removeClass(aFontSize,'font-size_active');
    ev.target.classList.add('font-size_active');
    
    chengeFontSizeContent();
  })
}
  