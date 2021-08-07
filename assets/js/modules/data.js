export const data = {
  eventDomLoad:
  {
    title: "DOM Content loaded",
    buttonIdJq: "eventLoadJq",
    buttonIdV: "eventLoadV",
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
    buttonIdJq: "eventClickJq",
    buttonIdV: "eventClickV",
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
    buttonIdJq: "eventDblClickJq",
    buttonIdV: "eventDblClickV",
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
  }
}