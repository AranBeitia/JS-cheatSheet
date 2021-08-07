import { buildModal } from './modules/modal/templateModal.js'
import { modal } from './modules/modal/modal.js'
import  *  as jquery from './modules/jquery.js'
import * as vanilla from './modules/vanilla.js'

const modalEvent = document.querySelector('[data-open-modal="modalEvent"]')
modal()

export { modalEvent, buildModal, modal, jquery, vanilla }