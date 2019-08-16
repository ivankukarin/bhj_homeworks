let revealElems = document.querySelectorAll('.reveal');



for (let el of revealElems){
  window.addEventListener('scroll', ()=>{
  let viewportHeight = window.innerHeight;
  let elemBotoom = el.getBoundingClientRect().bottom;
  let elemTop = el.getBoundingClientRect().top
  if ( elemBotoom <= viewportHeight && elemTop < viewportHeight && elemBotoom >= 0) {
    el.classList.add('reveal_active')
  } else {
    el.classList.remove('reveal_active')
  }
})
}


