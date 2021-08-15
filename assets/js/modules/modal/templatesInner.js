function getInner (button, canvas, form) {
  const buttonInner = document.querySelectorAll('[data-inner="button"]')
  const canvasInner = document.querySelectorAll('[data-inner="canvas"]')
  const formInner = document.querySelectorAll('[data-inner="form"]')
  if(button) {
    for (let i = 0; i < canvasInner.length; i++) {
      canvasInner[i].remove()
      formInner[i].remove()
    }
  }

  if (canvas) {
    for (let i = 0; i < buttonInner.length; i++) {
      buttonInner[i].remove()
      formInner[i].remove()
    }
  }
  
  if (form) {
    for (let i = 0; i < formInner.length; i++) {
      buttonInner[i].remove()
      canvasInner[i].remove()
    }
  }
}

export { getInner }