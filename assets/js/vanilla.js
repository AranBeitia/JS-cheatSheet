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
  coordinates.innerHTML = `Coordinates: <span class="text-highlight">(${coorX}, ${coorY})</span>`
  e.target.parentNode.appendChild(coordinates)
})

const coordOver = document.createElement('p')
document.getElementById('eventMouseOverV').addEventListener('mouseover', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordOver.innerHTML = `Coordinates: <span class="text-highlight">(${coorX}, ${coorY})</span>`
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
  selectionMessage.innerHTML = `Your selection is <span class="text-highlight">${e.target.value}</span> `
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


/* TODO: revision */
// let img = document.createElement('img')
// img.setAttribute('id', 'loadImgV')
// let loadImg = false
// document.getElementById('loadImgV').addEventListener('load', () => loadImg)

// img.setAttribute('src', 'assets/images/hello-kitty-dface.jpg')
// document.getElementById('loadImgV').parentNode.appendChild(img)
// console.log(img);
// const message = document.createElement('p')
// document.getElementById('loadImgV').addEventListener('click', () => {
//   message.innerHTML = `Is the image loaded? <span class="text-highlight">${loadImg}</span>`
//   document.getElementById('loadImgV').parentNode.appendChild(message)

// })

// Functions
const createMessage = document.createElement('p')
document.getElementById('createValueV').addEventListener('click', () => {
  createMessage.textContent = 'The new HTML value created is a <p> tag'
  document.getElementById('createValueV').parentNode.appendChild(createMessage)
})

document.getElementById('removeBtnV').addEventListener('click', () => {
  document.getElementById('removeTextV').remove()
})

const appendMessage = document.createElement('p')
document.getElementById('appendBtnV').addEventListener('click', () => {
  appendMessage.textContent = 'This message is sibiling of paragraph above, and child of <div class="tab__inner">'
  document.getElementById('appendBtnV').parentNode.appendChild(appendMessage)
})

const prependMessage = document.createElement('p')
document.getElementById('prependBtnV').addEventListener('click', () => {
  prependMessage.textContent = 'This message is sibiling of paragraph below, and first child of <div class="tab__inner">'
  document.getElementById('prependBtnV').parentNode.prepend(prependMessage)
})

const afterMessage = document.createElement('p')
document.getElementById('afterBtnV').addEventListener('click', () => {
  afterMessage.textContent = 'This message is sibiling of the button'
  document.getElementById('afterBtnV').after(afterMessage)
})

const beforeMessage = document.createElement('p')
document.getElementById('beforeBtnV').addEventListener('click', () => {
  beforeMessage.textContent = 'This message is sibiling of the button'
  document.getElementById('beforeBtnV').before(beforeMessage)
})

document.getElementById('cloneBtnV').addEventListener('click', () => {
  const text = document.getElementById('textElementV')
  const clone = text.cloneNode(true)
  text.after(clone)
})

document.getElementById('addBtnV').addEventListener('click', () => {
  const text = document.getElementById('textAddV')
  text.classList.add('text-highlight')
})

document.getElementById('removeClassBtnV').addEventListener('click', () => {
  const text = document.getElementById('textRemoveV')
  text.classList.remove('text-highlight')
})

document.getElementById('toggleClassBtnV').addEventListener('click', () => {
document.getElementById('textToggleV').classList.toggle('text-highlight')
})

document.getElementById('disableBtnV').addEventListener('click', () => {
  const button = document.getElementById('disableBtnV')
  button.disabled = true
  button.textContent = 'DISABLED'
})

document.getElementById('enableCheckV').addEventListener('change', () => {
  const button = document.getElementById('enableBtnV')
  button.disabled = false
  button.textContent = 'ENABLED'
})

const datasetImgV = document.createElement('img')
document.getElementById('datasetButtonV').addEventListener('click', () => {
  datasetImgV.setAttribute('src', 'assets/images/hello-kitty-dface.jpg')
  datasetImgV.setAttribute('alt', 'Hello kitty d-face in Tokyo')
  document.getElementById('datasetButtonV').parentNode.appendChild(datasetImgV)
})

document.getElementById('datasetRButtonV').addEventListener('click', () => {
  document.getElementById('imgRemoveV').removeAttribute('src')
})

document.getElementById('hideButtonV').addEventListener('click', () => {
  document.getElementById('imgHideV').style.display = 'none'
})

document.getElementById('showButtonV').addEventListener('click', () => {
  document.getElementById('imgShowV').style.display = 'block'
})

document.getElementById('functionFadein').addEventListener('click', () => {
  const tabInput = document.querySelector('[for="VanillajsFadein"]')
  document.getElementById('VanillajsFadein').disabled = true
  tabInput.style.cursor = 'no-drop'
  tabInput.textContent = 'DISABLED'
})

document.getElementById('functionFadeout').addEventListener('click', () => {
  const tabInput = document.querySelector('[for="VanillajsFadeout"]')
  document.getElementById('VanillajsFadeout').disabled = true
  tabInput.style.cursor = 'no-drop'
  tabInput.textContent = 'DISABLED'
})

document.getElementById('btnAnimateV').addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('boxAnimateV').animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(30px)" },
      { transform: "translateY(0px)" },
    ],{
      duration: 1000,
      iterations: 2
    })
  }, 2000)
})

// Selectors
document.getElementById('btnChangeStyleV').addEventListener('click', () => {
  const list = document.querySelectorAll('#listChangeStyleV li')
  list.forEach(item => {
    item.textContent += ' iterated'
    item.classList.toggle('text-highlight')
  })
})

document.getElementById('btnParentFontV').addEventListener('click', () => {
  const item = document.getElementById('btnParentFontV').parentNode
  item.style.fontWeight = '700'
  item.style.color = '#d83f87'
})

document.getElementById('btnChildrenFontV').addEventListener('click', () => {
  const items = document.getElementById('itemChildrenFontV').children
  for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = '700'
    items[i].style.color = '#d83f87'
  }
})

document.getElementById('btnCertainFontV').addEventListener('click', () => {
  const items = document.querySelectorAll('.certain-classv')
  items.forEach (item => {
    item.style.fontWeight = '100'
    item.style.color = '#d83f87'
  })
})

document.getElementById('btnIdFontV').addEventListener('click', () => {
  const item = document.getElementById('itemIdV')
  item.style.fontWeight = '100'
  item.style.color = '#d83f87'
})

document.getElementById('btnGetClassV').addEventListener('click', () => {
  const items = document.getElementsByClassName('get-class-v')
  for (let item of items) {
    item.style.display = 'block'
    item.style.color = '#d83f87'
  }
})

const attrMessage = document.createElement('p')
document.querySelector('#formAttrV select').addEventListener('change', () => {
  let result = document.querySelector('#formAttrV select').value
  attrMessage.innerHTML = `Your selection is <span class="text-highlight">${result}</span>`
  document.querySelector('#formAttrV').appendChild(attrMessage)
})

const attrLinkMessage = document.createElement('p')
document.querySelector('#btnAttrLinkV').addEventListener('click', () => {
  let firstItem = document.querySelector('#listAttrLinkV > li').firstChild
  firstItem.setAttribute('href', 'https://www.google.com/')
  firstItem.setAttribute('target', '_blank')
  attrLinkMessage.textContent = 'Click on the first item'
  document.querySelector('#listAttrLinkV').appendChild(attrLinkMessage)
})