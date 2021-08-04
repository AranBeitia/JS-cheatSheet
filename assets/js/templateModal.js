import { data } from './data.js'

const modalTemplate = document.querySelector('[data-open="modalTemplate"]')
function buildModal(id) {
  modalTemplate.setAttribute('id', id)
  renderModal(id)
}

function renderModal(titleId) {
  let modalHTML = ''
  
  for (let it in data) {
    const modal = data[titleId]
    modalHTML = `
    <div class="modal__content">
      <button class="button--close" data-close>X</button>
      <h1>${modal.title}</h1>
      <section class="grid grid-2 tab">
        <input name="tab-nav-el" type="radio" id="jqueryEl" class="tab__radiobutton" checked="checked" />
        <div class="tab__content">
          <div class="tab__inner">${modal.jQueryContent}</div>
        </div>
        <label class="tab__nav flex-center" for="jqueryEl">JQuery</label>
        <input name="tab-nav-el" type="radio" id="VanillajsEl" class="tab__radiobutton" />
        <div class="tab__content">
          <div class="tab__inner">${modal.vanillaContent}</div>
        </div>
        <label class="tab__nav flex-center" for="VanillajsEl">Vanilla JS</label>
      </section>
    </div>
    `
  }
  modalTemplate.innerHTML = modalHTML
}

export { buildModal }