export const data = {
  eventDomLoad:
    {
      id: 1,
      type: "event",
      title: "DOM Content loaded",
      buttonIdJq: "eventLoadJq",
      buttonIdV: "eventLoadV",
      vanillaCode: `
      const loadHTML = document.createElement('span')
      document.addEventListener('DOMContentLoaded' , () => loadHTML )

      document.getElementById('eventLoadV').addEventListener('click', (e) => {
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
      id: 2,
      type: "event",
      title: "Click",
      buttonIdJq: "eventClickJq",
      buttonIdV: "eventClickV",
      vanillaCode: `
        document.querySelector("#ex-02-vanilla-btn").addEventListener("click", function (ev) {
          <div class="code-indentation">document.querySelector("#ex-02-vanilla-msg").classList.toggle("no-display");</div>
        });`,

      jQueryCode: `
        $("#ex-02-jquery-btn").on("click", function (ev) {
        <div class="code-indentation">$("#ex-02-jquery-msg").toggleClass("no-display");</div>
        });`,
    }
}