// Events
const loadHTML = $('<span>HTML loaded</span>')
$(() => loadHTML)
$('#eventLoadJq').on('click', () => {
  $('#eventLoadJq').after(loadHTML)
})

const item = $('<span></span>')
$('#eventClickJq').on('click', () => {
  item.text('Item clicked')
  $('#eventClickJq').after(item)
})

$('#eventDblClickJq').on('dblclick', () => {
  let item = $('<span>Item double clicked</span>')
  $('#eventDblClickJq').after(item)
})

const coordenates = $('<p></p>')
$('#eventMouseMoveJc').on('mousemove', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordenates.text(`Coordinates: (${coorX}, ${coorY})`)
  $('#eventMouseMoveJc').after(coordenates)
})

const coordOver = $('<p></p>')
$('#eventMouseOverJc').on('mouseover', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordOver.text(`Coordinates: (${coorX}, ${coorY})`)
  $('#eventMouseOverJc').after(coordOver)
})

const key = $('<p></p>')
$(() => key)
$(document).keydown((e) => {
  key.html(`You have pressed the key <span class="text-highlight">${e.key}</span>`)
  $('#eventKeyboardJc').after(key)
})

const submitMessage = $('<p></p>')
$('#eventSubmitJq').on('submit', (e) => {
  e.preventDefault()
  let name = $('#yourNameJq').val()
  submitMessage.html(`Hi <span class="text-highlight">${name}</span>, your form is sent correctly`)
  $('#eventSubmitJq').after(submitMessage)
})

const result = $('<p></p>')
$('#eventChangeJq').change(() => {
  result.html(`You have written <span class="text-highlight">${$(event.target).val()}</span>`)
  $('#eventChangeJq').after(result)
})

const selectMessage = $('<p></p>')
$('#eventOpSelectJq select').change(() => {
  let option = $(event.target).val()
  selectMessage.html(`Selected: <span class="text-highlight">${option}</span>`)
  $('#eventOpSelectJq').after(selectMessage)
})

const checkMessage = $('<p></p>')
$('#eventCheckJq input').on('change', () => {
  if($(event.target).is(':checked')){
    checkMessage.text('Is checked!!')
  } else {
    checkMessage.text('Not checked')
  }
  $('#eventCheckJq').after(checkMessage)
})

const listMessage = $('<p></p>')
$('#showListJq li').on('click', () => {
  listMessage.html(`You clicked <span class="text-highlight">${$(event.target).text()}</span>`)
  $('#showListJq').after(listMessage)
})

// Functions

const createMessage = $('<p></p>')
$('#createValueJq').on('click', () => {
  createMessage.text('The new HTML value created is a <p> tag')
  $('#createValueJq').after(createMessage)
})

$('#removeBtnJq').on('click', () => {
  $('#removeTextJq').remove()
})

const appendMessage = $('<p></p>')
$('#appendBtnJq').on('click', () => {
  appendMessage.text('This message is sibiling of paragraph above, and child of <div class="tab__inner">')
  $('#appendBtnJq').parent().append(appendMessage)
})

const prependMessage = $('<p></p>')
$('#prependBtnJq').on('click', () => {
  prependMessage.text('This message is sibiling of paragraph below, and first child of <div class="tab__inner">')
  $('#prependBtnJq').parent().prepend(prependMessage)
})

const afterMessage = $('<p></p>')
$('#afterBtnJq').on('click', () => {
  afterMessage.text('This message is sibiling of the button')
  $('#afterBtnJq').after(afterMessage)
})

const beforeMessage = $('<p></p>')
$('#beforeBtnJq').on('click', () => {
  beforeMessage.text('This message is sibiling of the button')
  $('#beforeBtnJq').before(beforeMessage)
})

$('#cloneBtnJq').on('click', () => {
  const clone = $('#textElementJq').clone()
  $('#textElementJq').after(clone)
})

$('#addBtnJq').on('click', () => {
  $('#textAddJq').addClass('text-highlight')
})

$('#removeClassBtnJq').on('click', () => {
  $('#textRemoveClassJq').removeClass('text-highlight')
})

$('#toggleClassBtnJq').on('click', () => {
  $('#textToggleClassJq').toggleClass('text-highlight')
})

$('#disableBtnJq').on('click', () => {
  const button = $('#disableBtnJq').prop('disabled', true)
  button.text('DISABLED')
})

$('#enableCheckJq').on('change', () => {
  const button = $('#enableBtnJq').prop('disabled', false)
  button.text('ENABLED')
})