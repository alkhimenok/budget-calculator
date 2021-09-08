import { getDomElement, createElement, changeValue } from '../utils.js'
import { addHandlerForСhangeCurrency } from '../budget/selectCurrency.js'
import { getDataBase } from './dataBase.js'
import { createOperation } from '../budget/newOperation.js'
import { createRate } from '../rates/newRates.js'


export const setDefaultCurrency = () => {
  const $allCurrencyWord = getDomElement('._currency_word', true)
  const operationList = getDataBase('operationList', 'arr')
  const mainCurrency = getDataBase('mainCurrency', 'str') || operationList[0]?.currency || 'EUR'

  $allCurrencyWord.forEach(currencyWord => {
    changeValue(currencyWord, mainCurrency)
  })
}


export const loadOpeationFromDataBase = () => {
  const descriptionOperation = getDataBase('operationList')

  descriptionOperation.forEach(description => {
    createOperation(description)
  })
}


export const loadDefaultRates = () => {
  const rateItems = getDataBase('ratesList', 'obj')
  const defaultCurrency = getDefaultCurrency()


  defaultCurrency.forEach(currency => {
    createRate(rateItems[currency])
  })
}


export const addOptionDefaultRates = () => {
  const $ratesSelect = getDomElement('.select-currency__body')
  const defaultCurrency = getDefaultCurrency()

  defaultCurrency.forEach(currency => {
    const newBtn = `
      <button class="select-currency__option _currency-value _btn">
        ${currency}
      </button>`

    createElement($ratesSelect, newBtn, 'afterbegin')
  })

  addHandlerForСhangeCurrency()
}


const getDefaultCurrency = () => {
  return getDataBase('defaultCurrency', 'arr').length
    ? getDataBase('defaultCurrency', 'arr').map(item => item.currency)
    : ['EUR', 'USD', 'RUB', 'BYN']
}