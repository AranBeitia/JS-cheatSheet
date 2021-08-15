import { data } from '../data.js'

function renderOptions (data) {
  return data.forEach(option => `<option>${option}</option>`)
}

export { renderOptions }