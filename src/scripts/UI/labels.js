import { getDomElement, createElement, doClassList, changeValue } from "../utils.js"


export const removeLabel = (selector) => {
  const $element = getDomElement(selector)

  if (!$element) return

  const label = $element.querySelector('._dinamick-label')

  if (!label) return

  doClassList(label, 'add', '_hide')
  setTimeout(() => {
    label.remove()
    doClassList($element, 'remove', '_relative')
  }, 300)
}


export const createLabel = (selector, massage) => {
  const $element = getDomElement(selector)

  if (!$element) return

  doClassList($element, 'add', '_relative')
  createElement($element, `<span class="_dinamick-label _hide">${massage}</span>`)

  const label = $element.querySelector('._dinamick-label')

  if (label) return changeValue(label, massage,)

  setTimeout(() => doClassList(label, 'remove', '_hide'), 0)
}