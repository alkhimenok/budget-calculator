import { getDomElement } from "../utils.js"


export const clearInput = () => {
  const $clearButtons = getDomElement('.btn-clear', true)
  
  $clearButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const $parentBlock = event.target.closest('div')
      const $currentInput = $parentBlock.querySelector('input')
      
      $currentInput.value = null
    })
  })
}