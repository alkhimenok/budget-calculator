import { getDomElement, createElement, removeModalElement, doClassList, isClassNameContains } from '../utils.js';
import { addNewUser } from './addUser.js'

export const selectActivForm = (event) => {
  const $loginForm = getDomElement('.login__form')
  const $btnEntry = getDomElement('.login__entry') //////

  // $btnEntry.disabled = true

  if (isClassNameContains(event.target, '_option-sign-up')) {
    doClassList(event.currentTarget, 'remove', '_focus-sign-in')
    doClassList(event.currentTarget, 'add', '_focus-sign-up')
    addTermsOfUse($loginForm)
    $btnEntry.textContent = 'sign up'

  } else if (isClassNameContains(event.target, '_option-sign-in')) {
    doClassList(event.currentTarget, 'remove', '_focus-sign-up')
    doClassList(event.currentTarget, 'add', '_focus-sign-in')
    removeTermsOfUse($loginForm)
    $btnEntry.textContent = 'sign in'

  } else {
    return
  }
}


const addTermsOfUse = (form) => {
  if (form.querySelector('.login__terms')) return

  const termsContent = `
    <div class="login__terms">
      <input class="login__checbox" id="checkboxTermsOfUse" type="checkbox">
      <!-- <label class="login__label_castom-checkbox" id="castomCheckbox" for="checkboxTermsOfUse">ывафываыва</label> -->
      <label class="login__label_text" for="checkboxTermsOfUse">I accept the terms of the agreement</label>
    </div>`

  createElement(form, termsContent)

  const $checkboxTerms = form.querySelector('.login__terms') ///////

  setTimeout(() => doClassList($checkboxTerms, 'add', '_show'), 0)

  addNewUser($checkboxTerms)
}


const removeTermsOfUse = (form) => {
  const $checkboxTerms = form.querySelector('.login__terms') ///////

  if (!$checkboxTerms) return

  removeModalElement($checkboxTerms, '_show')
}