window.onload = function() {
  if(window.innerWidth < 480) {
    document.querySelector('main').classList.add('accordion')
    document.querySelector('#events').classList.add('accordion__cell')
    document.querySelector('#functions').classList.add('accordion__cell')
    document.querySelector('#selectors').classList.add('accordion__cell')
  }
}
