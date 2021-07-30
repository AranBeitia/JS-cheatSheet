import {eventLoadHTML} from './eventLoad.js'

let link = document.querySelectorAll('a')
link.forEach(a => a.addEventListener('click', openModal))

let modalContainer = document.getElementById('modal')
let modalContent = document.getElementById('modal-inner')
document.getElementById('modal-close').addEventListener('click', closeModal)

function buildLayout(html) {
  modalContent.innerHTML = html
}

function openModal() {
  buildLayout(eventLoadHTML)
  modalContainer.classList.add('--open')
}

function closeModal() {
  console.log('holdddd');
  modalContainer.classList.remove('--open')
}
export {buildLayout}