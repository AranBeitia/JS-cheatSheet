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
  key.text(`You have pressed the key ${e.key}`)
  $('#eventKeyboardJc').after(key)
})

const submitMessage = $('<p></p>')
$('#eventSubmitJq').on('submit', (e) => {
  e.preventDefault()
  let name = $('#yourNameJq').val()
  submitMessage.text(`Hi ${name}, your form is sent correctly`)
  $('#eventSubmitJq').after(submitMessage)
})

const result = $('<p></p>')
$('#eventChangeJq').change(() => {
  result.text(`Your animal is: ${$(event.target).val()}`)
  $('#eventChangeJq').after(result)
})

const selectMessage = $('<p></p>')
$('#eventOpSelectJq select').change(() => {
  let option = $(event.target).val()
  selectMessage.text(`Selected: ${option}`)
  $('#eventOpSelectJq').after(selectMessage)
})

let checkMessage = $('<p></p>')
$('#eventCheckJq input').on('change', () => {
  if($(event.target).is(':checked')){
    checkMessage.text('Is checked!!')
  } else {
    checkMessage.text('Not checked')
  }
  $('#eventCheckJq').after(checkMessage)
})
