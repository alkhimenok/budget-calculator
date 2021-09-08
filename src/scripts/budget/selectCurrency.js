import { getDomElement, getCorrectTextContent, changeValue } from "../utils.js"
import { addToDataBase } from "../general/dataBase.js"
import { translationCurrency } from '../general/currencyTranslation.js'


const $currencySelectBlock = getDomElement('.select-currency')
const $currentOption = getDomElement('.select-currency__current')


export const addHandlerForСhangeCurrency = () => {
  const $optionsCurrency = getDomElement('.select-currency__option', true)

  $currentOption.addEventListener('click', () => {
    $currencySelectBlock.classList.toggle('_active')

    $optionsCurrency.forEach(option => {
      option.addEventListener('click', setMainCurrency)
    })
  })
}


const setMainCurrency = (event) => {
  const $allCurrencyWord = getDomElement('._currency_word', true)
  const oldСurrency = getCorrectTextContent($currentOption)
  const newCurrency = getCorrectTextContent(event?.target)

  $allCurrencyWord.forEach(currency => changeValue(currency, newCurrency))

  translationCurrency(oldСurrency, newCurrency)

  $currencySelectBlock.classList.remove('_active')

  addToDataBase(newCurrency, 'mainCurrency', 'str')
}