import { modal } from './modal.js'

// HTML document loaded
let loadHTML = document.createElement('span')
document.addEventListener('DOMContentLoaded' , () => loadHTML )

document.getElementById('eventLoadV').addEventListener('click', (e) => {
  loadHTML.textContent = 'HTML loaded'
  e.target.parentNode.appendChild(loadHTML)
})
