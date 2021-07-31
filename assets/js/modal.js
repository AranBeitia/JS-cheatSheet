import {eventLoadHTML} from './templates/eventLoad.js'
const links = document.querySelectorAll('a')
const modalContent = document.getElementById('modal-inner')

bindModalEvents()

links.forEach(a => openModal(a))

function openModal(a) {
  a.addEventListener('click', () => {
    buildLayout(eventLoadHTML)

    const modalContainer = document.getElementById('modal')
    modalContainer?.classList.toggle('--open')
  })
}

function bindModalEvents () {
  const close = document.getElementById('modal-close')
  const modalContainer = document.getElementById('modal')

  close?.addEventListener('click', () => {
    const modalContainer = document.getElementById('modal')
    modalContainer?.classList.remove('--open')
    console.log(modalContainer);
  })
  modalContainer.addEventListener('click', () => modalContainer.classList.remove('--open'))
  
}

function buildLayout(html) {
  modalContent.innerHTML = html
}


// function closeModal() {
  //   console.log('holdddd');
  //   modalContainer.classList.toggle('--close')
  // }

export {buildLayout}