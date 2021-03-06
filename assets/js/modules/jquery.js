// Events

const loadHTML = $('<span>HTML loaded</span>')
function eventDomLoad () {
  $(() => loadHTML)
  $('#eventLoadJq').on('click', () => {
    $('#eventLoadJq').after(loadHTML)
  })
}

const item = $('<span></span>')
function eventClick () {
  $('#eventClickJq').on('click', () => {
    item.text('Item clicked')
    $('#eventClickJq').after(item)
  })
}

function eventDblClick () {
  $('#eventDblClickJq').on('dblclick', () => {
    let item = $('<span>Item double clicked</span>')
    $('#eventDblClickJq').after(item)
  })
}

const coordenates = $('<p></p>')
function eventMouseMove () {
  $('#eventMouseMoveJq').on('mousemove', (e) => {
    let coorX = e.clientX
    let coorY = e.clientY
    coordenates.html(`Coordinates: <span class="text-highlight">(${coorX}, ${coorY})</span>`)
    $('#eventMouseMoveJq').after(coordenates)
  })
}

const coordOver = $('<p></p>')
function eventMouseOver () {
  $('#eventMouseOverJq').on('mouseover', (e) => {
    let coorX = e.clientX
    let coorY = e.clientY
    coordOver.html(`Coordinates: <span class="text-highlight">(${coorX}, ${coorY})</span>`)
    $('#eventMouseOverJq').after(coordOver)
  })
}

const key = $('<p></p>')
function eventKeyboard () {
  $(() => key)
  $(document).keydown((e) => {
    key.html(`You have pressed the key <span class="text-highlight">${e.key}</span>`)
    $('#eventKeyboardJq').html(key)
  })
}

const submitMessage = $('<p></p>')
function eventSubmit () {
  $('#eventSubmitJq').on('submit', (e) => {
    e.preventDefault()
    let name = $('#formSubmitNameJq').val()
    submitMessage.html(`Hi <span class="text-highlight">${name}</span>, your form is sent correctly`)
    $('#eventSubmitJq').after(submitMessage)
  })
}

const result = $('<p></p>')
function eventChange () {
  $('#eventChangeJq').change(() => {
    result.html(`You have written <span class="text-highlight">${$(event.target).val()}</span>`)
    $('#eventChangeJq').after(result)
  })
}

const selectMessage = $('<p></p>')
function eventOptionSelect () {
  $('#eventOpSelectJq select').change(() => {
    let option = $(event.target).val()
    selectMessage.html(`Selected: <span class="text-highlight">${option}</span>`)
    $('#eventOpSelectJq').after(selectMessage)
  })
}

const checkMessage = $('<p></p>')
function eventChecked () {
  $('#eventCheckJq input').on('change', () => {
    if($(event.target).is(':checked')){
      checkMessage.text('Is checked!!')
    } else {
      checkMessage.text('Not checked')
    }
    $('#eventCheckJq').after(checkMessage)
  })
}

const listMessage = $('<p></p>')
function eventShow () {
  $('#showListJq li').on('click', () => {
    listMessage.html(`You clicked <span class="text-highlight">${$(event.target).text()}</span>`)
    $('#showListJq').after(listMessage)
  })
}

const loadImageMessage = $('<p></p>')
function eventLoad () {
  let loadImage = true
  const imgUrl = $('<img>')
  $('#loadImgJq').on('click', () => {
    imgUrl.on('load', () => loadImage)
    loadImageMessage.html(`The load of the image is <span class="text-highlight">${loadImage}</span>`)
    imgUrl.attr('src', 'assets/images/hello-kitty-dface.jpg')
    if(loadImage) $('#loadImgJq').parent().append(imgUrl)
    $('#loadImgJq').parent().append(loadImageMessage)
  })
}

const loadImageFailMessage = $('<p></p>')
function eventLoadFail () {
  let loadImageFail = false
  const imgUrlFail = $('<img>')
  $('#loadImgFailJq').on('click', () => {
    imgUrlFail.on('error', () => loadImageFail = true)
    loadImageFailMessage.html(`The load of the image is <span class="text-highlight">${loadImageFail}</span>`)
    imgUrlFail.attr('src', 'erroeImage.jpg')
    $('#loadImgFailJq').parent().append(loadImageFailMessage)
  })
}

// Functions

const createMessage = $('<p></p>')
function functionCreateValue () {
  $('#createValueJq').on('click', () => {
    createMessage.text('The new HTML value created is a <p> tag')
    $('#createValueJq').after(createMessage)
  })
}

function functionRemoveValue () {
  $('#removeBtnJq').on('click', () => {
    $('#removeTextJq').remove()
  })
}

const appendMessage = $('<p></p>')
function functionAppendElement () {
  $('#appendBtnJq').on('click', () => {
    appendMessage.text('This message is sibiling of paragraph above, and child of <div class="tab__inner">')
    $('#appendBtnJq').parent().append(appendMessage)
  })
}

const prependMessage = $('<p></p>')
function functionPrependElement () {
  $('#prependBtnJq').on('click', () => {
    prependMessage.text('This message is sibiling of paragraph below, and first child of <div class="tab__inner">')
    $('#prependBtnJq').parent().prepend(prependMessage)
  })
}

const afterMessage = $('<p></p>')
function functionAfterElement () {
  $('#afterBtnJq').on('click', () => {
    afterMessage.text('This message is sibiling of the button')
    $('#afterBtnJq').after(afterMessage)
  })
}

const beforeMessage = $('<p></p>')
function functionBeforeElement () {
  $('#beforeBtnJq').on('click', () => {
    beforeMessage.text('This message is sibiling of the button')
    $('#beforeBtnJq').before(beforeMessage)
  })
}

function functionClone () {
  $('#cloneBtnJq').on('click', () => {
    const clone = $('#textElementJq').clone()
    $('#textElementJq').after(clone)
  })
}

function functionAddClass () {
  $('#addBtnJq').on('click', () => {
    $('#textAddJq').addClass('text-highlight')
  })
}

function functionRemoveClass () {
  $('#removeClassBtnJq').on('click', () => {
    $('#textRemoveClassJq').removeClass('text-highlight')
  })
}

function functionToggleClass () {
  $('#toggleClassBtnJq').on('click', () => {
    $('#textToggleClassJq').toggleClass('text-highlight')
  })
}

function functionAddDisabled () {
  $('#disableBtnJq').on('click', () => {
    const button = $('#disableBtnJq').prop('disabled', true)
    button.text('DISABLED')
  })
}

function functionRemoveDisabled () {
  $('#enableCheckJq').on('change', () => {
    const button = $('#enableBtnJq').prop('disabled', false)
    button.text('ENABLED')
  })
}

function functionSetData () {
  $('#datasetButtonJq').on('click', () => {
    const img = $('#functionSetData img')
    img.attr('src', 'assets/images/hello-kitty-dface.jpg')
    $('#datasetButtonJq').after(img)
  })
}

function functionRemoveData () {
  $('#datasetRButtonJq').on('click', () => {
    $('#imgRemoveJq').removeAttr('src')
  })
}

function functionHide () {
  $('#hideButtonJq').on('click', () => {
    $('#imgHideJq').css('display', 'none')
  })
}

function functionShow () {
  $('#showButtonJq').on('click', () => {
    $('#imgShowJq').css('display', 'block')
  })
}

function functionFadein () {
  $('#fadeinButtonJq').on('click', () => {
    $('#imgFadeinJq').fadeIn(3000)
  })
}

function functionFadeout () {
  $('#fadeoutButtonJq').on('click', () => {
    $('#imgFadeoutJq').fadeOut('slow')
  })
}

function functionAnimate () {
  $('#btnAnimateJq').on('click', () => {
    setTimeout(function (){
      $('#boxAnimateJq').animate({
        width: '100px',
        height: '100px',
        opacity: 0.5,
      }, 'slow')
    }, 2000)
  })
}

// Selectors

function selectorIterateChange () {
  $('#btnChangeStyleJq').on('click', () => {
    $('#listChangeStyleJq li').each(function(){
      $(this).toggleClass('text-highlight')
      $(this).text($(this).text() + ' iterated')
    })
  })
}

function selectorParentFont () {
  $('#btnParentFontJq').on('click', () => {
    let item = $('#itemParentFontJq').parent().prev()
    item.css('font-weight', '100')
    item.css('color', '#d83f87')
  })
}

function selectorChildrenFont () {
  $('#btnChildrenFontJq').on('click', () => {
    let items = $('#itemChildrenFontJq').children()
    items.css('font-weight', '700')
    items.css('color', '#d83f87')
  })
}

function selectorCertainFont () {
  $('#btnCertainFontJq').on('click', () => {
    $('.certain-class').each(function() {
      $(this).css('font-weight', '100')
      $(this).css('color', '#d83f87')
    })
  })
}

function selectorGetIdFont () {
  $('#btnItemIdJq').on('click', () => {
    $('#itemIdJq').css('font-weight', '100')
    $('#itemIdJq').css('color', '#d83f87')
  })
}

function selectorGetClassDisplay () {
  const itemClass = $('.get-class-jq').hide()
  $('#btnGetClassJq').on('click', () => {
    itemClass.show()
    itemClass.css('color', '#d83f87')
  })
}

const messageAttr = $('<p></p>')
function selectorAttSelected () {
  $('#formAttrJq select').on('change', () => {
    let selected = $(event.target).val()
    messageAttr.html(`Your selection is <span class="text-highlight">${selected}</span>`)
    $('#formAttrJq').after(messageAttr)
  })
}

const message = $('<p>Click on the first item</p>')
function selectorAttLink () {
  $('#btnAttrLinkJq').on('click', () => {
    let firstLink = $('#listAttrLinkJq').find('a').first()
    firstLink.attr('href', 'https://www.google.com/')
    firstLink.attr('target', '_blank')
    $('#listAttrLinkJq').after(message)
  })
}

function selectorShowAlert () {
  $('#formShowAlertJq').on('submit', (e) => {
    e.preventDefault()
    let firstInput = $('#formShowAlertJq').find('input').first().val()
    if(firstInput) alert('The value of first input is: ' + firstInput)
  })
}

function selectorRemove () {
  $('#btnRemoveJq').on('click', () => {
    let items = $('#listJq li')
    items.each(function () {
      $(this).remove()
    })
  })
}

export {
  eventDomLoad,
  eventClick,
  eventDblClick,
  eventMouseMove,
  eventMouseOver,
  eventKeyboard,
  eventSubmit,
  eventChange,
  eventOptionSelect,
  eventChecked,
  eventShow,
  eventLoad,
  eventLoadFail,
  functionCreateValue,
  functionRemoveValue,
  functionAppendElement,
  functionPrependElement,
  functionAfterElement,
  functionBeforeElement,
  functionClone,
  functionAddClass,
  functionRemoveClass,
  functionToggleClass,
  functionAddDisabled,
  functionRemoveDisabled,
  functionSetData,
  functionRemoveData,
  functionHide,
  functionShow,
  functionFadein,
  functionFadeout,
  functionAnimate,
  selectorIterateChange,
  selectorParentFont,
  selectorChildrenFont,
  selectorCertainFont,
  selectorGetIdFont,
  selectorGetClassDisplay,
  selectorAttSelected,
  selectorAttLink,
  selectorShowAlert,
  selectorRemove
}
