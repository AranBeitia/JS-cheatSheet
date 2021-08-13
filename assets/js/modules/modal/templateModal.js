import { modalEvent, jquery, vanilla } from '../../main.js'
import { data } from '../data.js'
import { getInner } from './templatesInner.js'

/* TODO:
    1. import jquery functions with id as param
    2. import vanilla functions
*/
function buildModal(id) {
  modalEvent.setAttribute('id', id)
  renderModal(id)
  jquery[id]()
  vanilla[id]()
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
            <div data-inner="button">
              <button id="${modal.button.buttonIdJq}" class="button margin-x2">${modal.button.buttonText}</button>
            </div>
            <div data-inner="canvas">
              <p>Move the mouse inside the box</p>
              <div id="${modal.canvas.canvasJq}" class="canvas-box flex-center"></div>
            </div>
            <div data-inner="form">
              <form action="" id="${modal.form.formIdJq}">
                <div class="form-group">
                  <label for="yourNameJq">Your name:</label>
                  <input type="text" id="yourNameJq" class="input" required >
                </div>
                <button type="submit" class="button">Send</button>
              </form>
            </div>
            <pre class='code'><code>${modal.jQueryCode}</code></pre>
          </div>
        </div>
        <label class="tab__nav flex-center" for="jquery">JQuery</label>
        <input name="tab-nav" type="radio" id="Vanillajs" class="tab__radiobutton" />
        <div class="tab__content">
          <div class="tab__inner">
            <div data-inner="button">
              <button id="${modal.button.buttonIdV}" class="button margin-x2">${modal.button.buttonText}</button>
            </div>
            <div data-inner="canvas">
              <p>${modal.canvas.canvasTitle}</p>
              <div id="${modal.canvas.canvasV}" class="canvas-box flex-center"></div>
            </div>
            <div data-inner="form">
              <form action="" id="${modal.form.formIdV}">
                <div class="form-group">
                  <label for="yourNameJq">Your name:</label>
                  <input type="text" id="yourNameJq" class="input" required >
                </div>
                <button type="submit" class="button">Send</button>
              </form>
            </div>
            <pre class='code'><code>${modal.vanillaCode}</code></pre>
          </div>
        </div>
        <label class="tab__nav flex-center" for="Vanillajs">Vanilla JS</label>
      </section>
    </div>
  `
  modalEvent.innerHTML = modalHtml
  getInner (modal.button, modal.canvas, modal.form)
}

export { buildModal }