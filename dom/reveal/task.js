let revealElems = document.querySelectorAll('.reveal');

console.log(revealElems);

for (let el of revealElems){
  window.addEventListener('scroll', ()=>{
  let viewportHeight = window.innerHeight;
  let elemBotoom = el.getBoundingClientRect().bottom;
  let elemTop = el.getBoundingClientRect().top
  console.log(viewportHeight, elemBotoom, elemTop)
  if ( elemBotoom <= viewportHeight && elemTop < viewportHeight && elemBotoom >= 0) {
    el.classList.add('reveal_active')
  } else {
    el.classList.remove('reveal_active')
  }
})
}


