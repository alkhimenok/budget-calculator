import { getDomElement, createElement, getRoundToHundredths } from "../utils.js"
import { changeValueRates } from './converter.js'
import { clearInput } from '../general/clearInputs.js'


const $rateList = getDomElement('.rate')
const rateItems = []


export const createRate = (description) => { 
  const { currency, iconName, id, sum } = description

  const bodyRate = `
    <li class="rate__item _hide" id="${id}">
      <p class="rate__currency_word">
        ${currency}
      </p>
      <div class="rate__form">
        <input class="rate__input" type="tel" value="${getRoundToHundredths(sum)}">
        <span class="rate__btn_clear btn-clear">
          <span class="btn-clear__line _line_one"></span>
          <span class="btn-clear__line _line_two"></span>
        </span>
      </div>
      <div class="rate__img">
        <img class="icon_city" src="${location.href.endsWith('index.html' || 'counting-deductions_app/') ? '' : '../'}src/rateImgs/png/${iconName}.png" alt="city">
      </div>
    </li>`

  renderRate(bodyRate)
}


const renderRate = (rate) => { ///////////////////////////////
  createElement($rateList, rate, 'afterbegin')

  const $rateItem = $rateList.querySelector('.rate__item')

  rateItems.push($rateItem)

  clearInput()
  showRate($rateItem)
  changeValueRates(rateItems)
}

const showRate = (currentRateItem) => {
  setTimeout(() => currentRateItem.classList.remove('_hide'), 0)
}