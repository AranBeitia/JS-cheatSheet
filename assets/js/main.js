import { buildModal } from './modules/templateModal.js'
import { modal } from './modules/modal.js'
import { jquery } from './modules/jquery.js'
import { vanilla } from './modules/vanilla.js'

const modalEvent = document.querySelector('[data-open-modal="modalEvent"]')

jquery()
vanilla()

export { modalEvent, buildModal, modal }