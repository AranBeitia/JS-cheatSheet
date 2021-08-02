import { modal } from './modal.js'

// Events
const loadHTML = document.createElement('span')
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

const coordinates = document.createElement('p')
document.getElementById('eventMouseMoveV').addEventListener('mousemove', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordinates.innerHTML = `Coordinates: (${coorX}, ${coorY})`
  e.target.parentNode.appendChild(coordinates)
})

const coordOver = document.createElement('p')
document.getElementById('eventMouseOverV').addEventListener('mouseover', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordOver.innerHTML = `Coordinates: (${coorX}, ${coorY})`
  e.target.parentNode.appendChild(coordOver)
})

const key = document.createElement('p')
document.addEventListener('DOMContentLoaded', () => key )
document.addEventListener('keypress', (e) => {
  key.textContent = `You have pressed the key ${e.key}`
  document.getElementById('eventKeyboardV').appendChild(key)
})

const submitMessage = document.createElement('p')
document.getElementById('eventSubmitV').addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.getElementById('yourName').value
  submitMessage.textContent = `Hi ${name}, your form is sent correctly`
  e.target.parentNode.append(submitMessage)
})

const result = document.createElement('p')
document.getElementById('eventChangeV').addEventListener('change', (e) => {
  e.preventDefault()
  result.textContent = `Your animal is: ${e.target.value}`
  document.getElementById('eventChangeV').parentNode.appendChild(result)
})

const selectionMessage = document.createElement('p')
document.querySelector('#eventOpSelectV select').addEventListener('change', (e) => {
  selectionMessage.textContent = `Your selection is ${e.target.value}`
  document.getElementById('eventOpSelectV').parentNode.appendChild(selectionMessage)
})

const checkMessage = document.createElement('p')
document.getElementById('checkV').addEventListener('click', (e) => {
  let checkbox = e.target.checked
  checkbox ? checkMessage.textContent = 'Checked!!': checkMessage.textContent = 'Unchecked'
  document.getElementById('eventCheckV').parentNode.appendChild(checkMessage)
})


