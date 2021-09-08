import { translationCurrency } from '../general/currencyTranslation.js'


export const changeValueRates = (rateItems) => {
  rateItems.forEach((rate, i, arr) => {
    const $sumInput = rate.querySelector('.rate__input')
    const { id } = rate

    const handlerWrapper = handlerChanges(arr, id)

    $sumInput.addEventListener('input', handlerWrapper)
  })
}


const handlerChanges = (rateItem, rateId) => {
  let cords

  return (event) => {
    clearTimeout(cords)

    cords = setTimeout(() => {
      rateItem
        .filter(item => item.id !== rateId)
        .forEach(item => {
          translationCurrency(rateId, item.id, item.querySelector('.rate__input'), event.target)
        })
    }, 300)

    return cords
  }
}