import { modalEvent } from '../main.js'
import { data } from './data.js'

function buildModal(id) {
  modalEvent.setAttribute('id', id)
  renderModal(id)
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
            <button id="${modal.buttonIdJq}" class="button">Test me</button>
          </div>
        </div>
        <label class="tab__nav flex-center" for="jquery">JQuery</label>
        <input name="tab-nav" type="radio" id="Vanillajs" class="tab__radiobutton" />
        <div class="tab__content">
          <div class="tab__inner">
            <button id="${modal.buttonIdV}" class="button">Test me</button>
          </div>
        </div>
        <label class="tab__nav flex-center" for="Vanillajs">Vanilla JS</label>
      </section>
    </div>
  `

  modalEvent.innerHTML = modalHtml
}

export { buildModal }