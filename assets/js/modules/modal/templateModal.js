import { modalEvent, jquery, vanilla } from '../../main.js'
import { data } from '../data.js'

/* TODO:
    1. import jquery functions with id as param
    2. import vanilla functions
*/
function buildModal(id) {
  modalEvent.setAttribute('id', id)
  renderModal(id)
  jquery.jqueryFunctions()
  console.log(vanilla);
  // jquerys.eventDomLoad()
}

function renderModal(titleId) {
  let modalHtml = ''
  const modal = data[titleId]

  modalHtml = `
    <div class="modal__content">
      <button class="button--close" data-close>X</button>
      <h1>${modal.title}</h1>
      <section class="grid grid-2 tab">
        <input name="tab-nav" type="radio" id="jquery" class="tab__radiobutton" checked="checked" />
        <div class="tab__content">
          <div class="tab__inner">
            <div>
              <button id="${modal.buttonIdJq}" class="button margin-x2">Test me</button>
            </div>
            <pre class='code'><code>${modal.jQueryCode}</code></pre>
          </div>
        </div>
        <label class="tab__nav flex-center" for="jquery">JQuery</label>
        <input name="tab-nav" type="radio" id="Vanillajs" class="tab__radiobutton" />
        <div class="tab__content">
          <div class="tab__inner">
            <div>
              <button id="${modal.buttonIdJq}" class="button margin-x2">Test me</button>
            </div>
            <pre class='code'><code>${modal.vanillaCode}</code></pre>
          </div>
        </div>
        <label class="tab__nav flex-center" for="Vanillajs">Vanilla JS</label>
      </section>
    </div>
  `

  modalEvent.innerHTML = modalHtml
}

export { buildModal }