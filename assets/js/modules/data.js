export const data = {
  eventDomLoad:
  {
    title: "DOM Content loaded",
    button: {
      buttonIdJq: "eventLoadJq",
      buttonIdV: "eventLoadV",
      buttonText: "Test me",
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
  }
}