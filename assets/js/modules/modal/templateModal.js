import { modalEvent, jquery, vanilla } from '../../main.js'
import { data } from '../data.js'
import { getInner } from './templatesInner.js'
// import { renderOptions } from './optionsForm.js'

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
              ${modal.button.buttonParagraph ? `<p id="${modal.button.buttonParagraph.buttonParagraphJq}">${modal.button.buttonParagraph.buttonParagraphTxt}</p>`: ''}
            </div>
            <div data-inner="canvas">
              <p>Move the mouse inside the box</p>
              <div id="${modal.canvas.canvasJq}" class="canvas-box flex-center"></div>
            </div>
            <div data-inner="form">
              <form action="" id="${modal.form.formIdJq}">
                <div class="form-group">
                  <label for="${modal.form.formNameIdJq}">${modal.form.formLabel}:</label>
                  ${modal.form.formNameIdJq ? `<input type="text" id="${modal.form.formNameIdJq}" class="input" required >` : ''}
                </div>
                ${modal.form.formButton ? `<button type="submit" class="button">${modal.form.formButton}</button>` : ''}
                ${modal.form.selectJq ? `<select name="${modal.form.selectJq}" multiple="multiple" class="select"><option>1op</option></select>` : ''}
                ${modal.form.checkInputJq ? `<input type="checkbox" id="${modal.form.checkInputJq}" class="checkbox">`: ''}
              </form>
            </div>
            <div data-inner="list">
              <ul id="${modal.list.listIdJq}" class="list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
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
              ${modal.button.buttonParagraph ? `<p id="${modal.button.buttonParagraph.buttonParagraphV}">${modal.button.buttonParagraph.buttonParagraphTxt}</p>`: ''}
              </div>
            <div data-inner="canvas">
              <p>${modal.canvas.canvasTitle}</p>
              <div id="${modal.canvas.canvasV}" class="canvas-box flex-center"></div>
            </div>
            <div data-inner="form">
              <form action="" id="${modal.form.formIdV}">
                <div class="form-group">
                  <label for="${modal.form.formNameIdV}">${modal.form.formLabel}:</label>
                  ${modal.form.formNameIdV ? `<input type="text" id="${modal.form.formNameIdV}" class="input" required >` : ''}
                </div>
                ${modal.form.formButton ? `<button type="submit" class="button">${modal.form.formButton}</button>` : ''}
                ${modal.form.selectV ? `<select name="${modal.form.selectV}" multiple="multiple" class="select"><option>1op</option></select>` : ''}
                ${modal.form.checkInputV ? `<input type="checkbox" id="${modal.form.checkInputV}" class="checkbox">`: ''}
              </form>
            </div>
            <div data-inner="list">
              <ul id="${modal.list.listIdV}" class="list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
            <pre class='code'><code>${modal.vanillaCode}</code></pre>
          </div>
        </div>
        <label class="tab__nav flex-center" for="Vanillajs">Vanilla JS</label>
      </section>
    </div>
  `
  modalEvent.innerHTML = modalHtml
  getInner (modal.button, modal.canvas, modal.form, modal.list)
}

export { buildModal }