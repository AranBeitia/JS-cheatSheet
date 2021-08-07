import { buildModal } from '../../main.js'

function modal () {
  const buttonsOpen = document.querySelectorAll('[data-open]')

  buttonsOpen.forEach(button => button.addEventListener('click', event => {
    const modalId = event.target.dataset.open
    buildModal(modalId)
    document.getElementById(modalId).classList.add('--is-visible')
  }))

  document.addEventListener('click', event => {
    const modal = document.querySelector('.modal.--is-visible')
    const buttonClose = document.querySelector('[data-close]')
    if(event.target === modal) modal.classList.remove('--is-visible')

    if(event.target === buttonClose) modal.classList.remove('--is-visible')
  })

  document.addEventListener('keyup', event => {
    const modal = document.querySelector('.modal.--is-visible')
    if(event.key === 'Escape' && modal) {
      modal.classList.remove('--is-visible')
    }
  })
}

export { modal }