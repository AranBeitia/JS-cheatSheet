function getInner (button, canvas) {
  let buttonInner = document.querySelectorAll('[data-inner="button"]')
  let canvasInner = document.querySelectorAll('[data-inner="canvas"]')

  if(button) {
    for (let i = 0; i < canvasInner.length; i++) {
      canvasInner[i].remove()
    }
  } else if (canvas) {
    for (let i = 0; i < buttonInner.length; i++) {
      buttonInner[i].remove()
    }
  }
}

export { getInner }