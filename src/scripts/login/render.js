import { getDomElement, createElement, removeModalElement, doClassList } from '../utils.js'
import { selectActivForm } from './inOrUp.js'


export const $userIcon = getDomElement('.header__user')


export const showForm = () => {
  const form = `
    <div class="login">
      <div class="login__body">
        <div class="login__select _focus-sign-in">
          <button class="login__options _option-sign-in">
            sign in
          </button>
          <button class="login__options _option-sign-up">
            sign up
          </button>
        </div>
        <form class="login__form" id="loginForm">
          <span class="login__btn_close btn-close">
            <span class="btn-close__line _line_one"></span>
            <span class="btn-close__line _line_two"></span>
          </span>
          <div class="login__item _login__email">
            <input class="login__input _input-email" id="inputEmail" type="email" placeholder=" ">
            <label class="login__label _label-email" for="inputEmail">
              <span class="login__icon_label _icon-email">
                <i class="fas fa-envelope"></i>
              </span>
              email or phone
            </label>
          </div>
          <div class="login__item _login__password">
            <input class="login__input _input-password" id="inputPassword" type="password" placeholder=" ">
            <label class="login__label _label-password" for="inputPassword">
              <span class="login__icon_label _icon-password">
                <i class="fas fa-unlock-alt"></i>
              </span>
              password
            </label>
          </div>
          <button class="login__entry">
            sign in
          </button>
        </form>
      </div>
    </div>`

  createElement('.wrapper', form)
  setTimeout(() => doClassList('.login', 'add', '_show'))
  doClassList(document.body, 'add', '_overflow-hidden')

  const $btnClose = getDomElement('.login__btn_close')
  const $loginSelect = getDomElement('.login__select')

  $btnClose.addEventListener('click', hideForm)
  $loginSelect.addEventListener('click', selectActivForm)
}


const hideForm = (event) => {
  const $login = event.target.closest('.login')

  removeModalElement($login, '_show')
  doClassList(document.body, 'remove', '_overflow-hidden')
}
