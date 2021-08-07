export const data = {
  eventDomLoad:
    {
      id: 1,
      type: "event",
      title: "DOM Content loaded",
      jQueryContent: `<button id="eventLoadJq" class="button">Test me</button>`,
      vanillaContent: `<button id="eventLoadV" class="button">Test me</button>`,
      vanillaCode: `
        document.addEventListener("DOMContentLoaded", function (ev) {
        <div class="code-indentation">document.querySelector("#ex-01-vanilla").classList.remove("no-display");</div>
        });
      `,

      jQueryCode: `
        $(function (ev) {
        <div class="code-indentation">$('#ex-01-jquery').removeClass("no-display");</div>
        });

      `,
    },
    eventClick:
    {
      id: 2,
      type: "event",
      title: "Click",
      jQueryContent: `<button id="eventClickJq" class="button">Test me</button>`,
      vanillaContent: `<button id="eventClickV" class="button">Test me</button>`,
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