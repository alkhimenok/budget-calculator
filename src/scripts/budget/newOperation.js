import { getDomElement, createElement } from "../utils.js"
import { actOperation } from './act.js'


export const $operationList = getDomElement('.operation')


export const createOperation = (description) => {
  const { currency, date, id, name, operator, status, sum, time } = description

  const bodyOperation = `
    <li class="operation__item ${status} _hide" id="${id}">
      <div class="operation__body">
        <p class="operation__name">
          ${name}
        </p>
        <p class="operation__time">
          ${time}
        </p>
        <p class="operation__date">
          ${date}
        </p>
        <button class="operation__btn_delete">
          delete
        </button>
        <p class="operation__sum">
          <span class="operation__symbol">
            ${operator}
          </span>
          <span class="operation__value _sum">
            ${sum}
          </span>
          <span class="operation__currency _currency_word">
            ${currency}
          </span>
        </p>
      </div>
    </li>`

  renderOperation(bodyOperation)
}


const renderOperation = (operation) => {
  createElement($operationList, operation, 'afterbegin')

  actOperation()
}