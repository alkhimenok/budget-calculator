import { getDomElement, doClassList } from "../utils.js"


export const $iconBurger = getDomElement('.burger__icon')


export const showMenu = (event) => {
  if (event.target !== $iconBurger) return

  const $headerMenu = getDomElement('.header__menu')
  const $body = document.body
  
  doClassList($iconBurger, 'toggle', '_active')
  doClassList($headerMenu, 'toggle', '_active')
  doClassList($body, 'toggle', '_overflow-hidden')
}