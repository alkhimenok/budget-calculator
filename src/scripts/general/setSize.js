import { getDomElement } from "../utils.js"


export const setHeight = (selector, flag) => {
  const $element = getDomElement(selector)
  const elementHeight = getHeightMainBody() || 300

  if (!$element) return

  if (flag === 'min') {
    $element.style.minHeight = `${elementHeight}px`
  } else if (flag === 'max') {
    $element.style.maxHeight = `${elementHeight}px`
  } else {
    $element.style.height = `${elementHeight}px`
  }

  return elementHeight
}


export const setSizeForScrol = (bodySelector, headerSelector, blockScrolSelector) => {
  const $body = getDomElement(bodySelector)
  const $header = getDomElement(headerSelector)
  const $blockScrol = getDomElement(blockScrolSelector)

  if (!$body || !$header || !$blockScrol) return

  const bodyHeight = setHeight($body) || 400
  const headerHeight = $header.clientHeight

  return $blockScrol.style.height = `${bodyHeight - headerHeight}px`
}


const getHeightMainBody = () => {
  const windowScreen = window.innerHeight
  const $wrapper = getDomElement('.wrapper') || document.body
  const $main = getDomElement('.main')
  const $mainBody = getDomElement('.main__body')

  if (!$wrapper || !$main || !$mainBody) return

  const wrapperHeight = $wrapper.clientHeight
  const mainHeight = $main.clientHeight
  const footerAndHeaderHeight = wrapperHeight - mainHeight
  const paddingBodyTop = parseFloat(getComputedStyle($mainBody).paddingTop)
  const paddingBodyBottom = parseFloat(getComputedStyle($mainBody).paddingBottom)

  const freeHeight = windowScreen - (footerAndHeaderHeight + paddingBodyTop + paddingBodyBottom + 1)

  return (freeHeight > 250) ? freeHeight : 250
}