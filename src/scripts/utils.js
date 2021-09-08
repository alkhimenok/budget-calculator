export const getDomElement = (selector, all) => {
  if (typeof selector !== 'string') return selector

  if (all) return document.querySelectorAll(selector)

  return document.querySelector(selector)
}


export const createElement = (selector, value, position = 'beforeend') => {
  const $element = getDomElement(selector)
  
  return $element.insertAdjacentHTML(position, value)
}


export const removeModalElement = (selector, deleteClass, delay = 300) => {
  const $element = getDomElement(selector)

  if (!$element) return

  doClassList($element, 'remove', deleteClass)

  setTimeout(() => getDomElement(selector).remove(), delay)
}


export const doClassList = (selector, type, ...classNames) => {
  const $element = getDomElement(selector)

  classNames.forEach(className => {
    if (type === 'remove') {
      $element.classList.remove(className)
    } else if (type === 'toggle') {
      $element.classList.toggle(className)
    } else if (type === 'add') {
      $element.classList.add(className)
    } else {
      throw new Error(`element.classList.${type} is not a function`)
    }
  })
}


export const isClassNameContains = (selector, className) => {
  const $element = getDomElement(selector)
  
  return $element?.classList?.contains(className)
}



export const getCorrectTextContent = (selector) => {
  const $element = getDomElement(selector)
  
  return $element?.textContent.trim()
}


export const changeValue = (selector, massage, className = '_hide') => {
  const $element = getDomElement(selector)

  doClassList($element, 'add', className)
  setTimeout(() => $element.textContent = massage, 300)
  setTimeout(() => doClassList($element, 'remove', className), 300)
}


export const getRoundToHundredths = (num) => Math.round(parseFloat(num) * 100) / 100