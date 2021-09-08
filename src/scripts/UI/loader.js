import { getDomElement, createElement, removeModalElement, doClassList } from '../utils.js'


export const loader = (stop) => {
  if (stop) {
    return setTimeout(() => removeModalElement('.loader', '_show'), 500)
  }
  
  if (getDomElement('.loader')) return

  const spinner = `
    <div class="loader">
      <span class="loader-line"></span>
      <span class="loader-line"></span>
      <span class="loader-line"></span>
    </div>`

  createElement('body', spinner)
  
  setTimeout(() => doClassList('.loader','add', '_show'), 0)
}