
function modal () {
  const buttonsOpen = document.querySelectorAll('[data-open]')
  const buttonsClose = document.querySelectorAll('[data-close]')

  buttonsOpen.forEach(button => button.addEventListener('click', event => {
    const modalId = event.target.dataset.open
    buildModal(modalId)
    document.getElementById(modalId).classList.add('--is-visible')
  }))

  buttonsClose.forEach(button => button.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove('--is-visible')
  }))

  document.addEventListener('click', event => {
    let modal = document.querySelector('.modal.--is-visible')
    if(event.target === modal) {
      modal.classList.remove('--is-visible')
    }
  })

  document.addEventListener('keyup', event => {
    let modal = document.querySelector('.modal.--is-visible')
    if(event.key === 'Escape' && modal) {
      modal.classList.remove('--is-visible')
    }
  })
}
function buildModal(id) {
  const tontuna = document.getElementById('tontuna')
  let modalHTML = `
  <div class="modal__content" id="eventDomLoad">
    <button class="button--close" data-close>X</button>
    <h1>Event DOM Content loaded</h1>
    <section class="grid grid-2 tab">
      <input name="tab-nav-el" type="radio" id="jqueryEl" class="tab__radiobutton" checked="checked" />
      <div class="tab__content">
        <div class="tab__inner">
          <button id="eventLoadJq" class="button">Test me</button>
        </div>
      </div>
      <label class="tab__nav flex-center" for="jqueryEl">JQuery</label>
      <input name="tab-nav-el" type="radio" id="VanillajsEl" class="tab__radiobutton" />
      <div class="tab__content">
        <div class="tab__inner">
          <button id="eventLoadV" class="button">Test me</button>
        </div>
      </div>
      <label class="tab__nav flex-center" for="VanillajsEl">Vanilla JS</label>
    </section>
  </div>
`
tontuna.innerHTML = modalHTML
}
modal ()

 export { modal }
