import { data } from '../data.js'

function renderOptions (data) {
    data.forEach(option => `<option>${option}</option>`)
}

const optionsHTML = renderOptions(data.eventOptionSelect.form.selectOptions)?.join('')

export { optionsHTML }