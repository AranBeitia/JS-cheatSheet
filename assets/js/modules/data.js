export const data = {
  eventDomLoad:
  {
    title: "DOM Content loaded",
    button: {
      buttonIdJq: "eventLoadJq",
      buttonIdV: "eventLoadV",
      buttonText: "Test me",
      buttonParagraph: ""
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const loadHTML = document.createElement('span')
    document.addEventListener('DOMContentLoaded' , () => loadHTML )

    document.getElementById('eventLoadV')
    .addEventListener('click', (e) => {
      loadHTML.textContent = 'HTML loaded'
      e.target.parentNode.appendChild(loadHTML)
    })
    `,

    jQueryCode: `
    const loadHTML = $('<span>HTML loaded</span>')
    $(() => loadHTML)
    $('#eventLoadJq').on('click', () => {
      $('#eventLoadJq').after(loadHTML)
    })
    `,
  },
  eventClick:
  {
    title: "Click",
    button: {
      buttonIdJq: "eventClickJq",
      buttonIdV: "eventClickV",
      buttonText: "Click",
      buttonParagraph: ""
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    document.getElementById('eventClickV')
    .addEventListener('click', (e) => {
      let item = document.createElement('span')
      item.textContent = 'Item clicked'
      e.target.parentNode.appendChild(item)
    })
    `,
    jQueryCode: `
    const item = $('<span></span>')
    $('#eventClickJq').on('click', () => {
      item.text('Item clicked')
      $('#eventClickJq').after(item)
    })
    `,
  },
  eventDblClick:
  {
    title: "Double Click",
    button: {
      buttonIdJq: "eventDblClickJq",
      buttonIdV: "eventDblClickV",
      buttonText: "Double click",
      buttonParagraph: ""
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    document.getElementById('eventDblClickV')
    .addEventListener('dblclick', (e) => {
      let item = document.createElement('span')
      item.textContent = 'Item double clicked'
      e.target.parentNode.appendChild(item)
    })
    `,
    jQueryCode: `
    $('#eventDblClickJq').on('dblclick', () => {
      let item = $('<span>Item double clicked</span>')
      $('#eventDblClickJq').after(item)
    })
    `,
  },
  eventMouseMove:
  {
    title: "Mouse move",
    button: "",
    canvas: {
      canvasJq: "eventMouseMoveJq",
      canvasV: "eventMouseMoveV",
      canvasTitle: "Move the mouse inside the box"
    },
    form: "",
    list: "",
    vanillaCode: `
    const coordinates = document.createElement('p')
    function eventMouseMove () {
      document.getElementById('eventMouseMoveV').addEventListener('mousemove', (e) => {
      let coorX = e.clientX
      let coorY = e.clientY
      coordinates.innerHTML = 'Coordinates: (coorX, coorY)'
      e.target.parentNode.appendChild(coordinates)
    })
    `,
    jQueryCode: `
    const coordenates = $('<p></p>')
    function eventMouseMove () {
      $('#eventMouseMoveJq').on('mousemove', (e) => {
        let coorX = e.clientX
        let coorY = e.clientY
        coordenates.html('Coordinates: (coorX, coorY))
        $('#eventMouseMoveJq').after(coordenates)
      })
    }
    `,
  },
  eventMouseOver:
  {
    title: "Mouse over",
    button: "",
    canvas: {
      canvasJq: "eventMouseOverJq",
      canvasV: "eventMouseOverV",
      canvasTitle: "Move the mouse inside the box"
    },
    form: "",
    list: "",
    vanillaCode: `
    const coordOver = document.createElement('p')
    function eventMouseOver () {
      document.getElementById('eventMouseOverV').addEventListener('mouseover', (e) => {
        let coorX = e.clientX
        let coorY = e.clientY
        coordOver.innerHTML = 'Coordinates: <span class="text-highlight">(coorX, coorY)'
        e.target.parentNode.appendChild(coordOver)
      })
    }
    `,
    jQueryCode: `
    const coordOver = $('<p></p>')
    function eventMouseOver () {
      $('#eventMouseOverJq').on('mouseover', (e) => {
        let coorX = e.clientX
        let coorY = e.clientY
        coordOver.html('Coordinates: (coorX, coorY)')
        $('#eventMouseOverJq').after(coordOver)
      })
    }
    `,
  },
  eventKeyboard:
  {
    title: "Keyboard",
    button: "",
    canvas: {
      canvasJq: "eventKeyboardJq",
      canvasV: "eventKeyboardV",
      canvasTitle: "Press any key on your keyboard"
    },
    form: "",
    list: "",
    vanillaCode: `
    const key = document.createElement('p')
    function eventKeyboard () {
      document.addEventListener('DOMContentLoaded', () => key )
      document.addEventListener('keypress', (e) => {
        key.innerHTML = 'You have pressed the key <span class="text-highlight">{e.key}</span>'
        document.getElementById('eventKeyboardV').appendChild(key)
      })
    }
    `,
    jQueryCode: `
    const key = $('<p></p>')
    function eventKeyboard () {
      $(() => key)
      $(document).keydown((e) => {
        key.html('You have pressed the key <span class="text-highlight">{e.key}</span>')
        $('#eventKeyboardJq').html(key)
      })
    }
    `,
  },
  eventSubmit:
  {
    title: "Submit",
    button: "",
    canvas: "",
    form: {
      formIdJq: "eventSubmitJq",
      formIdV: "eventSubmitV",
      formNameIdJq: "formSubmitNameJq",
      formNameIdV: "formSubmitNameV",
      formLabel: "Your name",
      formButton: "Submit"
    } ,
    list: "",
    vanillaCode: `
    const submitMessage = document.createElement('p')
    function eventSubmit () {
      document.getElementById('eventSubmitV').addEventListener('submit', (e) => {
        e.preventDefault()
        let name = document.getElementById('formSubmitNameV').value
        submitMessage.innerHTML = 'Hi name, your form is sent correctly'
        e.target.parentNode.append(submitMessage)
      })
    }
    `,
    jQueryCode: `
    const submitMessage = $('<p></p>')
    function eventSubmit () {
      $('#eventSubmitJq').on('submit', (e) => {
        e.preventDefault()
        let name = $('#formSubmitNameJq').val()
        submitMessage.html('Hi name, your form is sent correctly')
        $('#eventSubmitJq').after(submitMessage)
      })
    }
    `,
  },
  eventChange:
  {
    title: "Change",
    button: "",
    canvas: "",
    form: {
      formIdJq: "eventChangeJq",
      formIdV: "eventChangeV",
      formNameIdJq: "formSubmitNameJq",
      formNameIdV: "formSubmitNameV",
      formLabel: "write some text"
    } ,
    list: "",
    vanillaCode: `
    const result = document.createElement('p')
    function eventChange () {
      document.getElementById('eventChangeV').addEventListener('change', (e) => {
        e.preventDefault()
        result.innerHTML = 'You have written {e.target.value}'
        document.getElementById('eventChangeV').parentNode.appendChild(result)
      })
    }
    `,
    jQueryCode: `
    const result = $('<p></p>')
    function eventChange () {
      $('#eventChangeJq').change(() => {
        result.html('You have written (event.target).val()')
        $('#eventChangeJq').after(result)
      })
    }
    `,
  },
  eventOptionSelect:
  {
    title: "Option select",
    button: "",
    canvas: "",
    form: {
      formIdJq: "eventOpSelectJq",
      formIdV: "eventOpSelectV",
      formLabel: "Change into another option",
      selectJq: "formSubmitNameJq",
      selectV: "formSubmitNameV",
      selectOptions: ['Banana', 'Apple', 'Orange', 'Strawberry', 'Lemon']
    },
    list: "",
    vanillaCode: `
    const selectionMessage = document.createElement('p')
    function eventOptionSelect () {
      document.querySelector('#eventOpSelectV select').addEventListener('change', (e) => {
        selectionMessage.innerHTML = 'Your selection is {e.target.value}'
        document.getElementById('eventOpSelectV').parentNode.appendChild(selectionMessage)
      })
    }
    `,
    jQueryCode: `
    const selectMessage = $('<p></p>')
    function eventOptionSelect () {
      $('#eventOpSelectJq select').change(() => {
        let option = $(event.target).val()
        selectMessage.html('Selected: <span class="text-highlight">{option}</span>')
        $('#eventOpSelectJq').after(selectMessage)
      })
    }
    `,
  },
  eventChecked:
  {
    title: "Checked / unchecked",
    button: "",
    canvas: "",
    form: {
      formIdJq: "eventCheckJq",
      formIdV: "eventCheckV",
      formLabel: "Check / uncheck option",
      checkInputJq: "checkJq",
      checkInputV: "checkV"
    },
    list: "",
    vanillaCode: `
    const checkMessage = document.createElement('p')
    function eventChecked () {
      document.getElementById('checkV').addEventListener('click', (e) => {
        let checkbox = e.target.checked
        checkbox ? checkMessage.textContent = 'Checked!!': checkMessage.textContent = 'Unchecked'
        document.getElementById('eventCheckV').parentNode.appendChild(checkMessage)
      })
    }
    `,
    jQueryCode: `
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
    `,
  },
  eventShow:
  {
    title: "Show",
    button: "",
    canvas: "",
    form: "",
    list: {
      listIdJq: "showListJq",
      listIdV: "showListV"
    },
    vanillaCode: `
    const listMessage = document.createElement('p')
    function eventShow () {
      let itemsList = document.querySelectorAll('#showListV li')
      itemsList.forEach(item => item.addEventListener('click', (e) => {
        listMessage.innerHTML= 'You clicked <span class="text-highlight">{e.target.innerText}</span>'
        document.getElementById('showListV').parentNode.appendChild(listMessage)
      }))
    }
    `,
    jQueryCode: `
    const listMessage = $('<p></p>')
    function eventShow () {
      $('#showListJq li').on('click', () => {
        listMessage.html('You clicked {$(event.target).text()}')
        $('#showListJq').after(listMessage)
      })
    }
    `,
  },
  eventLoad:
  {
    title: "load",
    button: {
      buttonIdJq: "loadImgJq",
      buttonIdV: "loadImgV",
      buttonText: "Load",
      buttonParagraph: ""
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const imageUrl = document.createElement('img')
    let imageLoaded = true
    document.getElementById('loadImgV').addEventListener('click', () => {
      imageUrl.addEventListener('load', () => imageLoaded )
      imageUrl.src = 'assets/images/hello-kitty-dface.jpg'
      imageLoadedMessage.innerHTML = "The load of the image is $imageLoaded"

      if(imageLoaded) document.getElementById('loadImgV').parentNode.append(imageUrl)
      document.getElementById('loadImgV').parentNode.append(imageLoadedMessage)
    })
    `,
    jQueryCode: `
    const loadImageMessage = $('\<p>\</p>')
    let loadImage = true
    const imgUrl = $('<img>')
    $('#loadImgJq').on('click', () => {
      imgUrl.on('load', () => loadImage)
      loadImageMessage.html("The load of the image is $loadImage")
      imgUrl.attr('src', 'assets/images/hello-kitty-dface.jpg')
      if(loadImage) $('#loadImgJq').parent().append(imgUrl)
      $('#loadImgJq').parent().append(loadImageMessage)
    })
    `,
  },
  eventLoadFail:
  {
    title: "load image failed",
    button: {
      buttonIdJq: "loadImgFailJq",
      buttonIdV: "loadImgFailV",
      buttonText: "Load",
      buttonParagraph: ""
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const imageLoadedFailMessage = document.createElement('p')
    const imageFailUrl = document.createElement('img')
    let imageFailLoaded = false
    function eventLoadFail () {
      document.getElementById('loadImgFailV').addEventListener('click', () => {
        imageFailUrl.addEventListener('error', () => imageFailLoaded = true)
        imageFailUrl.src = 'errorImage.jpg'
        imageLoadedFailMessage.innerHTML = 'The load of the image is <span class="text-highlight">{imageFailLoaded}</span>'
    
        // if(imageFailLoaded) document.getElementById('loadImgFailV').parentNode.append(imageFailUrl)
        document.getElementById('loadImgFailV').parentNode.append(imageLoadedFailMessage)
      })
    }
    `,
    jQueryCode: `
    const loadImageMessage = $('<p></p>')
    function eventLoad () {
      let loadImage = true
      const imgUrl = $('<img>')
      $('#loadImgJq').on('click', () => {
        imgUrl.on('load', () => loadImage)
        loadImageMessage.html('The load of the image is <span class="text-highlight">{loadImage}</span>')
        imgUrl.attr('src', 'assets/images/hello-kitty-dface.jpg')
        if(loadImage) $('#loadImgJq').parent().append(imgUrl)
        $('#loadImgJq').parent().append(loadImageMessage)
      })
    }
    `,
  },
  functionCreateValue:
  {
    title: "Create element",
    button: {
      buttonIdJq: "createValueJq",
      buttonIdV: "createValueV",
      buttonText: "Create",
      buttonParagraph: ""
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const createMessage = document.createElement('p')
    function functionCreateValue () {
      document.getElementById('createValueV').addEventListener('click', () => {
        createMessage.textContent = 'The new HTML value created is a <p> tag'
        document.getElementById('createValueV').parentNode.appendChild(createMessage)
      })
    }
    `,
    jQueryCode: `
    const createMessage = $('<p></p>')
    function functionCreateValue () {
      $('#createValueJq').on('click', () => {
        createMessage.text('The new HTML value created is a <p> tag')
        $('#createValueJq').after(createMessage)
      })
    }
    `,
  },
  functionRemoveValue:
  {
    title: "Remove element",
    button: {
      buttonIdJq: "removeBtnJq",
      buttonIdV: "removeBtnV",
      buttonText: "Remove",
      buttonParagraph: {
        buttonParagraphTxt: "Remove this message",
        buttonParagraphJq: "removeTextJq",
        buttonParagraphV: "removeTextV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    function functionRemoveValue () {
      document.getElementById('removeBtnV').addEventListener('click', () => {
        document.getElementById('removeTextV').remove()
      })
    }
    `,
    jQueryCode: `
    function functionRemoveValue () {
      $('#removeBtnJq').on('click', () => {
        $('#removeTextJq').remove()
      })
    }
    `,
  },
  functionAppendElement:
  {
    title: "Append element to a parent element",
    button: {
      buttonIdJq: "appendBtnJq",
      buttonIdV: "appendBtnV",
      buttonText: "Append",
      buttonParagraph: {
        buttonParagraphTxt: "Append a new HTML element below this paragrapn",
        buttonParagraphJq: "appendTextJq",
        buttonParagraphV: "appendTextV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const appendMessage = document.createElement('p')
    function functionAppendElement () {
      document.getElementById('appendBtnV').addEventListener('click', () => {
        appendMessage.textContent = 'This message is sibiling of paragraph above, and child of <div class="tab__inner">'
        document.getElementById('appendBtnV').parentNode.appendChild(appendMessage)
      })
    }
    `,
    jQueryCode: `
    const appendMessage = $('<p></p>')
    function functionAppendElement () {
      $('#appendBtnJq').on('click', () => {
        appendMessage.text('This message is sibiling of paragraph above, and child of <div class="tab__inner">')
        $('#appendBtnJq').parent().append(appendMessage)
      })
    }
    `,
  },
  functionPrependElement:
  {
    title: "Prepend element to a parent element",
    button: {
      buttonIdJq: "prependBtnJq",
      buttonIdV: "prependBtnV",
      buttonText: "Prepend",
      buttonParagraph: {
        buttonParagraphTxt: "Prepend a new HTML element above this paragrapn",
        buttonParagraphJq: "prependTextJq",
        buttonParagraphV: "prependTextV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const prependMessage = document.createElement('p')
    function functionPrependElement () {
      document.getElementById('prependBtnV').addEventListener('click', () => {
        prependMessage.textContent = 'This message is sibiling of paragraph below, and first child of <div class="tab__inner">'
        document.getElementById('prependBtnV').parentNode.prepend(prependMessage)
      })
    }
    `,
    jQueryCode: `
    const prependMessage = $('<p></p>')
    function functionPrependElement () {
      $('#prependBtnJq').on('click', () => {
        prependMessage.text('This message is sibiling of paragraph below, and first child of <div class="tab__inner">')
        $('#prependBtnJq').parent().prepend(prependMessage)
      })
    }
    `,
  },
  functionAfterElement:
  {
    title: "Create and add after element",
    button: {
      buttonIdJq: "afterBtnJq",
      buttonIdV: "afterBtnV",
      buttonText: "After",
      buttonParagraph: "",
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const prependMessage = document.createElement('p')
    const afterMessage = document.createElement('p')
    function functionAfterElement () {
      document.getElementById('afterBtnV').addEventListener('click', () => {
        afterMessage.textContent = 'This message is sibiling of the button'
        document.getElementById('afterBtnV').after(afterMessage)
      })
    }
    `,
    jQueryCode: `
    const afterMessage = $('<p></p>')
    function functionAfterElement () {
      $('#afterBtnJq').on('click', () => {
        afterMessage.text('This message is sibiling of the button')
        $('#afterBtnJq').after(afterMessage)
      })
    }
    `,
  },
  functionBeforeElement:
  {
    title: "Create and add before element",
    button: {
      buttonIdJq: "beforeBtnJq",
      buttonIdV: "beforeBtnV",
      buttonText: "Before",
      buttonParagraph: "",
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    const beforeMessage = document.createElement('p')
    function functionBeforeElement () {
      document.getElementById('beforeBtnV').addEventListener('click', () => {
        beforeMessage.textContent = 'This message is sibiling of the button'
        document.getElementById('beforeBtnV').before(beforeMessage)
      })
    }
    `,
    jQueryCode: `
    const beforeMessage = $('<p></p>')
    function functionBeforeElement () {
      $('#beforeBtnJq').on('click', () => {
        beforeMessage.text('This message is sibiling of the button')
        $('#beforeBtnJq').before(beforeMessage)
      })
    }
    `,
  },
  functionClone:
  {
    title: "Create and add before element",
    button: {
      buttonIdJq: "cloneBtnJq",
      buttonIdV: "cloneBtnV",
      buttonText: "Clone",
      buttonParagraph: {
        buttonParagraphTxt: "Clone this message",
        buttonParagraphJq: "textElementJq",
        buttonParagraphV: "textElementV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    function functionClone () {
      document.getElementById('cloneBtnV').addEventListener('click', () => {
        const text = document.getElementById('textElementV')
        const clone = text.cloneNode(true)
        text.after(clone)
      })
    }
    `,
    jQueryCode: `
    function functionClone () {
      $('#cloneBtnJq').on('click', () => {
        const clone = $('#textElementJq').clone()
        $('#textElementJq').after(clone)
      })
    }
    `,
  },
  functionAddClass:
  {
    title: "Add a class",
    button: {
      buttonIdJq: "addBtnJq",
      buttonIdV: "addBtnV",
      buttonText: "Add",
      buttonParagraph: {
        buttonParagraphTxt: "Add a class on this message",
        buttonParagraphJq: "textAddJq",
        buttonParagraphV: "textAddV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    function functionAddClass () {
      document.getElementById('addBtnV').addEventListener('click', () => {
        const text = document.getElementById('textAddV')
        text.classList.add('text-highlight')
      })
    }
    `,
    jQueryCode: `
    function functionAddClass () {
      $('#addBtnJq').on('click', () => {
        $('#textAddJq').addClass('text-highlight')
      })
    }
    `,
  },
  functionRemoveClass:
  {
    title: "Remove a class",
    button: {
      buttonIdJq: "removeClassBtnJq",
      buttonIdV: "removeClassBtnV",
      buttonText: "Remove",
      buttonParagraph: {
        buttonParagraphTxt: "Remove a class on this message",
        buttonParagraphJq: "textRemoveClassJq",
        buttonParagraphV: "textAddV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    function functionRemoveClass () {
      document.getElementById('removeClassBtnV').addEventListener('click', () => {
        const text = document.getElementById('textRemoveV')
        text.classList.remove('text-highlight')
      })
    }
    `,
    jQueryCode: `
    function functionRemoveClass () {
      $('#removeClassBtnJq').on('click', () => {
        $('#textRemoveClassJq').removeClass('text-highlight')
      })
    }
    `,
  },
  functionToggleClass:
  {
    title: "Toggle a class",
    button: {
      buttonIdJq: "toggleClassBtnJq",
      buttonIdV: "toggleClassBtnV",
      buttonText: "Toggle",
      buttonParagraph: {
        buttonParagraphTxt: "Toggle a class on this message",
        buttonParagraphJq: "textToggleClassJq",
        buttonParagraphV: "textToggleV"
      },
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    function functionToggleClass () {
      document.getElementById('toggleClassBtnV').addEventListener('click', () => {
        document.getElementById('textToggleV').classList.toggle('text-highlight')
        })
    }
    `,
    jQueryCode: `
    function functionToggleClass () {
      $('#toggleClassBtnJq').on('click', () => {
        $('#textToggleClassJq').toggleClass('text-highlight')
      })
    }
    `,
  },
  functionAddDisabled:
  {
    title: "Add disabled attribute",
    button: {
      buttonIdJq: "disableBtnJq",
      buttonIdV: "disableBtnV",
      buttonText: "Disable",
    },
    canvas: "",
    form: "",
    list: "",
    vanillaCode: `
    function functionAddDisabled () {
      document.getElementById('disableBtnV').addEventListener('click', () => {
        const button = document.getElementById('disableBtnV')
        button.disabled = true
        button.textContent = 'DISABLED'
      })
    }
    `,
    jQueryCode: `
    function functionAddDisabled () {
      $('#disableBtnJq').on('click', () => {
        const button = $('#disableBtnJq').prop('disabled', true)
        button.text('DISABLED')
      })
    }
    `,
  },
  functionRemoveDisabled:
  {
    title: "Remove disabled attribute",
    button: "",
    canvas: "",
    form: {
      formIdJq: "enableBtnJq",
      formIdV: "enableBtnV",
      checkInputJq: "enableCheckJq",
      checkInputV: "enableCheckV",
      formLabel: "Click to enable button",
      formButton: "Disabled"
    } ,
    list: "",
    vanillaCode: `
    function functionRemoveDisabled () {
      document.getElementById('enableCheckV').addEventListener('change', () => {
        const button = document.getElementById('enableBtnV')
        button.disabled = false
        button.textContent = 'ENABLED'
      })
    }
    `,
    jQueryCode: `
    function functionRemoveDisabled () {
      $('#enableCheckJq').on('change', () => {
        const button = $('#enableBtnJq').prop('disabled', false)
        button.text('ENABLED')
      })
    }
    `,
  },
  functionSetData:
  {
    title: "Set a dataset attribute",
    button: {
      buttonIdJq: "datasetButtonJq",
      buttonIdV: "datasetButtonV",
      buttonText: "Load",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    const datasetImgV = document.createElement('img')
    function functionSetData () {
      document.getElementById('datasetButtonV').addEventListener('click', () => {
        datasetImgV.setAttribute('src', 'assets/images/hello-kitty-dface.jpg')
        datasetImgV.setAttribute('alt', 'Hello kitty d-face in Tokyo')
        document.getElementById('datasetButtonV').parentNode.appendChild(datasetImgV)
      })
    }
    `,
    jQueryCode: `
    function functionSetData () {
      $('#datasetButtonJq').on('click', () => {
        const img = $('#functionSetData img')
        img.attr('src', 'assets/images/hello-kitty-dface.jpg')
        $('#datasetButtonJq').after(img)
      })
    }
    `,
  },
  functionRemoveData:
  {
    title: "Remove a dataset attribute",
    button: {
      buttonIdJq: "datasetRButtonJq",
      buttonIdV: "datasetRButtonV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function functionRemoveData () {
      document.getElementById('datasetRButtonV').addEventListener('click', () => {
        document.getElementById('imgRemoveV').removeAttribute('src')
      })
    }
    `,
    jQueryCode: `
    function functionRemoveData () {
      $('#datasetRButtonJq').on('click', () => {
        $('#imgRemoveJq').removeAttr('src')
      })
    }
    `,
  },
  functionHide:
  {
    title: "Hide an HTML element on click",
    button: {
      buttonIdJq: "hideButtonJq",
      buttonIdV: "hideButtonV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function functionHide () {
      document.getElementById('hideButtonV').addEventListener('click', () => {
        document.getElementById('imgHideV').style.display = 'none'
      })
    }
    `,
    jQueryCode: `
    function functionHide () {
      $('#hideButtonJq').on('click', () => {
        $('#imgHideJq').css('display', 'none')
      })
    }
    `,
  },
  functionShow:
  {
    title: "Show an HTML element on click",
    button: {
      buttonIdJq: "showButtonJq",
      buttonIdV: "showButtonV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function functionShow () {
      document.getElementById('showButtonV').addEventListener('click', () => {
        document.getElementById('imgShowV').style.display = 'block'
      })
    }
    `,
    jQueryCode: `
    function functionShow () {
      $('#showButtonJq').on('click', () => {
        $('#imgShowJq').css('display', 'block')
      })
    }
    `,
  },
  functionFadein:
  {
    title: "Fade in an HTML element using jQuery",
    button: {
      buttonIdJq: "fadeinButtonJq",
      buttonIdV: "",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
      nothing
    `,
    jQueryCode: `
    function functionFadein () {
      $('#fadeinButtonJq').on('click', () => {
        $('#imgFadeinJq').fadeIn(3000)
      })
    }
    `,
  },
  functionFadeout:
  {
    title: "Fade out an HTML element using jQuery",
    button: {
      buttonIdJq: "fadeoutButtonJq",
      buttonIdV: "",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
      nothing
    `,
    jQueryCode: `
    function functionFadeout () {
      $('#fadeoutButtonJq').on('click', () => {
        $('#imgFadeoutJq').fadeOut('slow')
      })
    }
    `,
  },
  functionAnimate:
  {
    title: "Animate an item after 2 seconds",
    button: {
      buttonIdJq: "btnAnimateJq",
      buttonIdV: "btnAnimateV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function functionAnimate () {
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
    }
    `,
    jQueryCode: `
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
    `,
  },
  selectorIterateChange:
  {
    title: "Apply change of style on a collection",
    button: "",
    canvas: "",
    form: "" ,
    list: {
      listBtnJq: "btnChangeStyleJq",
      listBtnV: "btnChangeStyleV",
      listBtnTxt: "Change style",
      listIdJq: "listChangeStyleJq",
      listIdV: "listChangeStyleV"
    },
    vanillaCode: `
    function selectorIterateChange () {
      document.getElementById('btnChangeStyleV').addEventListener('click', () => {
        const list = document.querySelectorAll('#listChangeStyleV li')
        list.forEach(item => {
          item.textContent += ' iterated'
          item.classList.toggle('text-highlight')
        })
      })
    }
    `,
    jQueryCode: `
    function selectorIterateChange () {
      $('#btnChangeStyleJq').on('click', () => {
        $('#listChangeStyleJq li').each(function(){
          $(this).toggleClass('text-highlight')
          $(this).text($(this).text() + ' iterated')
        })
      })
    }
    `,
  },
  selectorParentFont:
  {
    title: "Get parent element and change font weight",
    button: "",
    canvas: "",
    form: "" ,
    list: {
      listBtnJq: "btnParentFontJq",
      listBtnV: "btnChangeStyleV",
      listBtnTxt: "Change title",
      listIdJq: "listChangeStyleJq",
      listIdV: "listChangeStyleV"
    },
    vanillaCode: `
    function selectorParentFont () {
      document.getElementById('btnParentFontV').addEventListener('click', () => {
        const item = document.getElementById('btnParentFontV').parentNode
        item.style.fontWeight = '700'
        item.style.color = '#d83f87'
      })
    }
    `,
    jQueryCode: `
    function selectorParentFont () {
      $('#btnParentFontJq').on('click', () => {
        let item = $('#itemParentFontJq').parent().prev()
        item.css('font-weight', '100')
        item.css('color', '#d83f87')
      })
    }
    `,
  },
  selectorChildrenFont:
  {
    title: "Get children and change its font weight",
    button: "",
    canvas: "",
    form: "" ,
    list: {
      listBtnJq: "btnChildrenFontJq",
      listBtnV: "btnChildrenFontV",
      listBtnTxt: "Change children",
      listIdJq: "itemChildrenFontJq",
      listIdV: "itemChildrenFontV"
    },
    vanillaCode: `
    function selectorChildrenFont () {
      document.getElementById('btnChildrenFontV').addEventListener('click', () => {
        const items = document.getElementById('itemChildrenFontV').children
        for (let i = 0; i < items.length; i++) {
          items[i].style.fontWeight = '700'
          items[i].style.color = '#d83f87'
        }
      })
    }
    `,
    jQueryCode: `
    function selectorChildrenFont () {
      $('#btnChildrenFontJq').on('click', () => {
        let items = $('#itemChildrenFontJq').children()
        items.css('font-weight', '700')
        items.css('color', '#d83f87')
      })
    }
    `,
  },
  selectorCertainFont:
  {
    title: "Get certain class and change font weight",
    button: {
      buttonIdJq: "btnCertainFontJq",
      buttonIdV: "btnCertainFontV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function selectorCertainFont () {
      document.getElementById('btnCertainFontV').addEventListener('click', () => {
        const items = document.querySelectorAll('.certain-classv')
        items.forEach (item => {
          item.style.fontWeight = '100'
          item.style.color = '#d83f87'
        })
      })
    }
    `,
    jQueryCode: `
    function selectorCertainFont () {
      $('#btnCertainFontJq').on('click', () => {
        $('.certain-class').each(function() {
          $(this).css('font-weight', '100')
          $(this).css('color', '#d83f87')
        })
      })
    }
    `,
  },
  selectorGetIdFont:
  {
    title: "Get an item by id and change its font weight",
    button: {
      buttonIdJq: "btnItemIdJq",
      buttonIdV: "btnIdFontV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function selectorGetIdFont () {
      document.getElementById('btnIdFontV').addEventListener('click', () => {
        const item = document.getElementById('itemIdV')
        item.style.fontWeight = '100'
        item.style.color = '#d83f87'
      })
    }
    `,
    jQueryCode: `
    function selectorGetIdFont () {
      $('#btnItemIdJq').on('click', () => {
        $('#itemIdJq').css('font-weight', '100')
        $('#itemIdJq').css('color', '#d83f87')
      })
    }
    `,
  },
  selectorGetClassDisplay:
  {
    title: "Get elements by class and change style properties",
    button: {
      buttonIdJq: "btnGetClassJq",
      buttonIdV: "btnGetClassV",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function selectorGetClassDisplay () {
      document.getElementById('btnGetClassV').addEventListener('click', () => {
        const items = document.getElementsByClassName('get-class-v')
        for (let item of items) {
          item.style.display = 'block'
          item.style.color = '#d83f87'
        }
      })
    }
    `,
    jQueryCode: `
    function selectorGetClassDisplay () {
      const itemClass = $('.get-class-jq').hide()
      $('#btnGetClassJq').on('click', () => {
        itemClass.show()
        itemClass.css('color', '#d83f87')
      })
    }
    `,
  },
  selectorAttSelected:
  {
    title: "Get the options of selected elements",
    button: {
      buttonIdJq: "",
      buttonIdV: "",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    const attrMessage = document.createElement('p')
    function selectorAttSelected () {
      document.querySelector('#formAttrV select').addEventListener('change', () => {
        let result = document.querySelector('#formAttrV select').value
        attrMessage.innerHTML = 'Your selection is {result}'
        document.querySelector('#formAttrV').appendChild(attrMessage)
      })
    }
    `,
    jQueryCode: `
    const messageAttr = $('<p></p>')
    function selectorAttSelected () {
      $('#formAttrJq select').on('change', () => {
        let selected = $(event.target).val()
        messageAttr.html('Your selection is <span class="text-highlight">{selected}</span>')
        $('#formAttrJq').after(messageAttr)
      })
    }
    `,
  },
  selectorAttLink:
  {
    title: "Change the href attribute of the first a element",
    button: {
      buttonIdJq: "",
      buttonIdV: "",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    const attrLinkMessage = document.createElement('p')
    function selectorAttLink () {
      document.querySelector('#btnAttrLinkV').addEventListener('click', () => {
        let firstItem = document.querySelector('#listAttrLinkV > li').firstChild
        firstItem.setAttribute('href', 'https://www.google.com/')
        firstItem.setAttribute('target', '_blank')
        attrLinkMessage.textContent = 'Click on the first item'
        document.querySelector('#listAttrLinkV').appendChild(attrLinkMessage)
      })
    }
    `,
    jQueryCode: `
    const message = $('<p>Click on the first item</p>')
    function selectorAttLink () {
      $('#btnAttrLinkJq').on('click', () => {
        let firstLink = $('#listAttrLinkJq').find('a').first()
        firstLink.attr('href', 'https://www.google.com/')
        firstLink.attr('target', '_blank')
        $('#listAttrLinkJq').after(message)
      })
    }
    `,
  },
  selectorShowAlert:
  {
    title: "Show an alert with the value of the first input",
    button: {
      buttonIdJq: "",
      buttonIdV: "",
      buttonText: "",
      buttonParagraph: "",
    },
    canvas: "",
    form: "" ,
    list: "",
    vanillaCode: `
    function selectorShowAlert () {
      document.getElementById('formShowAlertV').addEventListener('submit', (e) => {
        e.preventDefault()
        let firstInput = document.querySelectorAll('#formShowAlertV input')[0].value
        if(firstInput) alert('The value of the first input is: ' + firstInput)
      })
    }
    `,
    jQueryCode: `
    function selectorShowAlert () {
      $('#formShowAlertJq').on('submit', (e) => {
        e.preventDefault()
        let firstInput = $('#formShowAlertJq').find('input').first().val()
        if(firstInput) alert('The value of first input is: ' + firstInput)
      })
    }
    `,
  },
  selectorRemove:
  {
    title: "Remove all items from a specific selector",
    button: "",
    canvas: "",
    form: "" ,
    list: {
      listBtnJq: "btnRemoveJq",
      listBtnV: "btnRemoveV",
      listBtnTxt: "Remove",
      listIdJq: "listJq",
      listIdV: "listV"
    },
    vanillaCode: `
    function selectorRemove () {
      document.getElementById('btnRemoveV').addEventListener('click', (e) => {
        let items = document.querySelectorAll('#listV li')
        for (let item of items) item.remove()
      })
    }
    `,
    jQueryCode: `
    function selectorRemove () {
      $('#btnRemoveJq').on('click', () => {
        let items = $('#listJq li')
        items.each(function () {
          $(this).remove()
        })
      })
    }
    `,
  }
}