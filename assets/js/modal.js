import { buildModal } from './templateModal.js'


function modal () {
  const buttonsOpen = document.querySelectorAll('[data-open]')
  const buttonsClose = document.querySelectorAll('[data-close]')

  bindModal()

  buttonsOpen.forEach(button => button.addEventListener('click', event => {
    const modalId = event.target.dataset.open
    buildModal(modalId)
    document.getElementById(modalId).classList.add('--is-visible')
  }))

  buttonsClose.forEach(button => button.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove('--is-visible')
  }))

  function bindModal() {
    document.addEventListener('click', event => {
      let modal = document.querySelector('.modal.--is-visible')
      if(event.target === modal) {
        modal.classList.remove('--is-visible')
      }
    })

    document.addEventListener('keyup', event => {
      let modal = document.querySelector('.modal.--is-visible')
      if(event.key === 'Escape' && modal) {
        modal.classList.remove('--is-visible')
      }
    })
  }
}

export { modal }