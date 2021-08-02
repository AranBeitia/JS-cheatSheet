// Events
let loadHTML = $('<span>HTML loaded</span>')
$(() => loadHTML)
$('#eventLoadJq').on('click', () => {
  $('#eventLoadJq').after(loadHTML)
})

$('#eventClickJq').on('click', () => {
  let item = $('<span></span>')
  item.text('Item clicked')
  $('#eventClickJq').after(item)
})

$('#eventDblClickJq').on('dblclick', () => {
  let item = $('<span>Item double clicked</span>')
  $('#eventDblClickJq').after(item)
})

let coordenates = $('<p></p>')
$('#eventMouseMoveJc').on('mousemove', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordenates.text(`Coordinates: (${coorX}, ${coorY})`)
  $('#eventMouseMoveJc').after(coordenates)
})

let coordOver = $('<p></p>')
$('#eventMouseOverJc').on('mouseover', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordOver.text(`Coordinates: (${coorX}, ${coorY})`)
  $('#eventMouseOverJc').after(coordOver)
})

let key = $('<p></p>')
$(() => key)
$(document).keydown((e) => {
  key.text(`You have pressed the key ${e.key}`)
  $('#eventKeyboardJc').after(key)
})
