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
  key.innerHTML = `You have pressed the key <span class="text-highlight">${e.key}</span>`
  document.getElementById('eventKeyboardV').appendChild(key)
})

const submitMessage = document.createElement('p')
document.getElementById('eventSubmitV').addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.getElementById('yourName').value
  submitMessage.innerHTML = `Hi <span class="text-highlight">${name}</span>, your form is sent correctly`
  e.target.parentNode.append(submitMessage)
})

const result = document.createElement('p')
document.getElementById('eventChangeV').addEventListener('change', (e) => {
  e.preventDefault()
  result.innerHTML = `You have written <span class="text-highlight">${e.target.value}</span>`
  document.getElementById('eventChangeV').parentNode.appendChild(result)
})

const selectionMessage = document.createElement('p')
document.querySelector('#eventOpSelectV select').addEventListener('change', (e) => {
  selectionMessage.innerHTML = `Your selection is <span class="text-highlight">${e.target.value}</span>`
  document.getElementById('eventOpSelectV').parentNode.appendChild(selectionMessage)
})

const checkMessage = document.createElement('p')
document.getElementById('checkV').addEventListener('click', (e) => {
  let checkbox = e.target.checked
  checkbox ? checkMessage.textContent = 'Checked!!': checkMessage.textContent = 'Unchecked'
  document.getElementById('eventCheckV').parentNode.appendChild(checkMessage)
})

const listMessage = document.createElement('p')
let itemsList = document.querySelectorAll('#showListV li')
itemsList.forEach(item => item.addEventListener('click', (e) => {
  listMessage.innerHTML= `You clicked <span class="text-highlight">${e.target.innerText}</span>`
  document.getElementById('showListV').parentNode.appendChild(listMessage)
}))

