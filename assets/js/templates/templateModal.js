let modalHTML = `
<article class="modal flex-center" id="eventDomLoad" data-animation="zoomInOut">
<div class="modal__content">
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
</article>
`
