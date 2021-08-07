function jQuery() {
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
  coordenates.html(`Coordinates: <span class="text-highlight">(${coorX}, ${coorY})</span>`)
  $('#eventMouseMoveJc').after(coordenates)
})

const coordOver = $('<p></p>')
$('#eventMouseOverJc').on('mouseover', (e) => {
  let coorX = e.clientX
  let coorY = e.clientY
  coordOver.html(`Coordinates: <span class="text-highlight">(${coorX}, ${coorY})</span>`)
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

const loadImageMessage = $('<p></p>')
let loadImage = true
const imgUrl = $('<img>')
$('#loadImgJq').on('click', () => {
  imgUrl.on('load', () => loadImage)
  loadImageMessage.html(`The load of the image is <span class="text-highlight">${loadImage}</span>`)
  imgUrl.attr('src', 'assets/images/hello-kitty-dface.jpg')
  if(loadImage) $('#loadImgJq').parent().append(imgUrl)
  $('#loadImgJq').parent().append(loadImageMessage)
})

const loadImageFailMessage = $('<p></p>')
let loadImageFail = false
const imgUrlFail = $('<img>')
$('#loadImgFailJq').on('click', () => {
  imgUrlFail.on('error', () => loadImageFail = true)
  loadImageFailMessage.html(`The load of the image is <span class="text-highlight">${loadImageFail}</span>`)
  imgUrlFail.attr('src', 'erroeImage.jpg')
  $('#loadImgFailJq').parent().append(loadImageFailMessage)
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

$('#datasetButtonJq').on('click', () => {
  const img = $('#functionSetData img')
  img.attr('src', 'assets/images/hello-kitty-dface.jpg')
  $('#datasetButtonJq').after(img)
})

$('#datasetRButtonJq').on('click', () => {
  $('#imgRemoveJq').removeAttr('src')
})

$('#hideButtonJq').on('click', () => {
  $('#imgHideJq').css('display', 'none')
})

$('#showButtonJq').on('click', () => {
  $('#imgShowJq').css('display', 'block')
})

$('#fadeinButtonJq').on('click', () => {
  $('#imgFadeinJq').fadeIn(3000)
})

$('#fadeoutButtonJq').on('click', () => {
  $('#imgFadeoutJq').fadeOut('slow')
})

$('#btnAnimateJq').on('click', () => {
  setTimeout(function (){
    $('#boxAnimateJq').animate({
      width: '100px',
      height: '100px',
      opacity: 0.5,
    }, 'slow')
  }, 2000)
})

// Selectors
$('#btnChangeStyleJq').on('click', () => {
  $('#listChangeStyleJq li').each(function(){
    $(this).toggleClass('text-highlight')
    $(this).text($(this).text() + ' iterated')
  })
})

$('#btnParentFontJq').on('click', () => {
  let item = $('#itemParentFontJq').parent().prev()
  item.css('font-weight', '100')
  item.css('color', '#d83f87')
})

$('#btnChildrenFontJq').on('click', () => {
  let items = $('#itemChildrenFontJq').children()
  items.css('font-weight', '700')
  items.css('color', '#d83f87')
})

$('#btnCertainFontJq').on('click', () => {
  $('.certain-class').each(function() {
    $(this).css('font-weight', '100')
    $(this).css('color', '#d83f87')
  })
})

$('#btnItemIdJq').on('click', () => {
  $('#itemIdJq').css('font-weight', '100')
  $('#itemIdJq').css('color', '#d83f87')
})

const itemClass = $('.get-class-jq').hide()
$('#btnGetClassJq').on('click', () => {
  itemClass.show()
  itemClass.css('color', '#d83f87')
})

const messageAttr = $('<p></p>')
$('#formAttrJq select').on('change', () => {
  let selected = $(event.target).val()
  messageAttr.html(`Your selection is <span class="text-highlight">${selected}</span>`)
  $('#formAttrJq').after(messageAttr)
})

const message = $('<p>Click on the first item</p>')
$('#btnAttrLinkJq').on('click', () => {
  let firstLink = $('#listAttrLinkJq').find('a').first()
  firstLink.attr('href', 'https://www.google.com/')
  firstLink.attr('target', '_blank')
  $('#listAttrLinkJq').after(message)
})

$('#formShowAlertJq').on('submit', (e) => {
  e.preventDefault()
  let firstInput = $('#formShowAlertJq').find('input').first().val()
  if(firstInput) alert('The value of first input is: ' + firstInput)
})

$('#btnRemoveJq').on('click', () => {
  let items = $('#listJq li')
  items.each(function () {
    $(this).remove()
  })
})
}

export { jQuery }