export const data = {
  eventDomLoad:
  {
    title: "DOM Content loaded",
    button: {
      buttonIdJq: "eventLoadJq",
      buttonIdV: "eventLoadV",
      buttonText: "Test me",
    },
    canvas: '',
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
    canvas: '',
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
    canvas: '',
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
    button: '',
    canvas: {
      canvasMouseJq: "eventMouseMoveJq",
      canvasMouseV: "eventMouseMoveV",
    },
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
        coordenates.html('Coordinates: (coorX, oorY))
        $('#eventMouseMoveJq').after(coordenates)
      })
    }
    `,
  },
  eventMouseOver:
  {
    title: "Mouse over",
    button: '',
    canvas: {
      canvasMouseJq: "eventMouseOverJq",
      canvasMouseV: "eventMouseOverV",
    },
    vanillaCode: `
    Canvan mouse and coordinates
    `,
    jQueryCode: `
    Canvan mouse and coordinates
    `,
  },
  eventKeyboard:
  {
    title: "Keyboard",
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
    buttonText: "keyboard",
    vanillaCode: `
    Canvan mouse and coordinates
    `,
    jQueryCode: `
    Canvan mouse and coordinates
    `,
  },
  eventSubmit:
  {
    title: "Submit",
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
    buttonText: "Submit",
    vanillaCode: `
    Form label input button
    `,
    jQueryCode: `
    Form label input button
    `,
  },
  eventChange:
  {
    title: "Submit",
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
    buttonText: "Change",
    vanillaCode: `
    Form label input
    `,
    jQueryCode: `
    Form label input
    `,
  },
  eventOptionSelect:
  {
    title: "Option select",
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
    buttonText: "Select",
    vanillaCode: `
    Form label select
    `,
    jQueryCode: `
    Form label select
    `,
  },
  eventChecked:
  {
    title: "Option select",
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
    buttonText: "Checked",
    vanillaCode: `
    Form label input
    `,
    jQueryCode: `
    Form label input
    `,
  },
  eventShow:
  {
    title: "Option select",
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
    buttonText: "Show",
    vanillaCode: `
    Paragraph list
    `,
    jQueryCode: `
    Paragraph list
    `,
  },
  eventLoad:
  {
    title: "Option select",
    buttonIdJq: "loadImgJq",
    buttonIdV: "loadImgV",
    buttonText: "Load",
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
  }
}