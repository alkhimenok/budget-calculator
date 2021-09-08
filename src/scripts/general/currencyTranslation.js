import { getDomElement, changeValue, getRoundToHundredths } from '../utils.js'
import { getDataBase } from './dataBase.js'


export const translationCurrency = (currentCurrency, newCurrency, item, target) => {
  const rateItems = getDataBase('ratesList')

  if (item) {
    const newSum = getNewSum(target.value, currentCurrency, newCurrency, rateItems)

    item.value = newSum
  } else {
    const allSumValue = getDomElement('._sum', true)

    allSumValue.forEach(sum => {
      const newSum = getNewSum(sum.textContent, currentCurrency, newCurrency, rateItems)

      changeValue(sum, newSum)
    })
  }
}


const getNewSum = (oldSum, oldValue, newValue, rates) => getRoundToHundredths((oldSum / rates[oldValue.toUpperCase()].sum) * rates[newValue.toUpperCase()].sum)