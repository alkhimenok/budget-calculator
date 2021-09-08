import { getDomElement, getCorrectTextContent, changeValue } from "../utils.js"

const $balance = getDomElement('.wallet__balance')
const $costs = getDomElement('._status-costs')
const $income = getDomElement('._status-income')
const balanceValue = $balance?.querySelector('.wallet__value')
const costsValue = $costs?.querySelector('.status__value')
const incomeValue = $income?.querySelector('.status__value')


export const setStatus = () => {
  if ( !$balance) return
  const allSpending = Array.from(getDomElement('._operation-spending', true))
  const allEarnings = Array.from(getDomElement('._operation-earnings', true))

  const sumSpending = calculateSum(allSpending)
  const sumEarnings = calculateSum(allEarnings)

  
  changeValue(costsValue, sumSpending)
  changeValue(incomeValue, sumEarnings)

  changeValue(balanceValue, sumEarnings - sumSpending)
}


const calculateSum = (arr) => {
  return arr.reduce((acc, el) => {
    return acc += +getCorrectTextContent(el.querySelector('.operation__value'))
  }, 0)
}