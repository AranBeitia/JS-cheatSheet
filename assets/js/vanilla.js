import { modal } from './modal.js'

// Events
let loadHTML = document.createElement('span')
document.addEventListener('DOMContentLoaded' , () => loadHTML )

document.getElementById('eventLoadV').addEventListener('click', (e) => {
  loadHTML.textContent = 'HTML loaded'
  e.target.parentNode.appendChild(loadHTML)
})

document.getElementById('eventClickV').addEventListener('click', (e) => {
  let item = document.createElement('span')
  item.textContent = 'Item clicked'
  e.target.parentNode.appendChild(item)
})

document.getElementById('eventDblClickV').addEventListener('dblclick', (e) => {
  let item = document.createElement('span')
  item.textContent = 'Item double clicked'
  e.target.parentNode.appendChild(item)
})

let coordinates = document.createElement('p')
document.getElementById('eventMouseMoveV').addEventListener('mousemove', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordinates.innerHTML = `Coordinates: (${coorX}, ${coorY})`
  e.target.parentNode.appendChild(coordinates)
})

let coordOver = document.createElement('p')
document.getElementById('eventMouseOverV').addEventListener('mouseover', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordOver.innerHTML = `Coordinates: (${coorX}, ${coorY})`
  e.target.parentNode.appendChild(coordOver)
})

let key = document.createElement('p')
document.addEventListener('DOMContentLoaded', () => key )
document.addEventListener('keypress', (e) => {
  key.textContent = `You have pressed the key ${e.key}`
  document.getElementById('eventKeyboardV').appendChild(key)
})
