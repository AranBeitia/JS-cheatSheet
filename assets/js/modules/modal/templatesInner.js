function getInner (button, canvas, form, list) {
  const buttonInner = document.querySelectorAll('[data-inner="button"]')
  const canvasInner = document.querySelectorAll('[data-inner="canvas"]')
  const formInner = document.querySelectorAll('[data-inner="form"]')
  const listInner = document.querySelectorAll('[data-inner="list"]')

  if(button) {
    for (let i = 0; i < buttonInner.length; i++) {
      canvasInner[i].remove()
      formInner[i].remove()
      listInner[i].remove()
    }
  }

  if (canvas) {
    for (let i = 0; i < canvasInner.length; i++) {
      buttonInner[i].remove()
      formInner[i].remove()
      listInner[i].remove()
    }
  }
  
  if (form) {
    for (let i = 0; i < formInner.length; i++) {
      buttonInner[i].remove()
      canvasInner[i].remove()
      listInner[i].remove()
    }
  }

  if (list) {
    for (let i = 0; i < listInner.length; i++) {
      buttonInner[i].remove()
      canvasInner[i].remove()
      formInner[i].remove()
    }
  }
}

export { getInner }