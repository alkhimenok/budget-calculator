import { getDomElement, getCorrectTextContent } from '../utils.js'
import { addToDataBase } from '../general/dataBase.js'
import { checkDescription } from '../general/checkForDataBase.js'
import { createOperation } from './newOperation.js'
import { createLabel, removeLabel } from '../UI/labels.js'
import { getIdUnique } from "../general/id.js"


const $inputOperationName = getDomElement('#inputOperationName')
const $inputSum = getDomElement('#inputSum')
const $inputOperatorPlus = getDomElement('#inputOperatorPlus')
const $inputOperatorMinus = getDomElement('#inputOperatorMinus')


export const $btnAddOperation = getDomElement('#btnAddOperation')


export const getDescriptionOperation = (event) => {
  event.preventDefault()

  if (!isOperationValid()) return

  const currentOperationDescription = setDataOperation()

  if (checkDescription(currentOperationDescription, 'operationList')) {
    addToDataBase(currentOperationDescription, 'operationList')
    createOperation(currentOperationDescription)
    clearForm()
  }
}


const isOperationValid = () => {
  if (!$inputOperationName.value) {
    createLabel($btnAddOperation, 'Enter name operation!')
    return false
  } else if (!$inputSum.value) {
    createLabel($btnAddOperation, 'Enter sum operation!')
    return false
  } else if ($inputSum.value.match(/\D/)) {
    createLabel($btnAddOperation, 'The amount must be a number!')
    return false
  } else if (!($inputOperatorPlus.checked || $inputOperatorMinus.checked)) {
    createLabel($btnAddOperation, 'Select operation value!')
    return false
  } else {
    removeLabel($btnAddOperation)
    return true
  }
}


const setDataOperation = () => {
  const currency = getCorrectTextContent('.select-currency__current')
  const date = new Intl.DateTimeFormat().format(new Date())
  const id = getIdUnique()
  const name = $inputOperationName.value
  const operator = ($inputOperatorPlus.checked) ? '+' : '-'
  const status = ($inputOperatorPlus.checked) ? '_operation-earnings' : '_operation-spending'
  const sum = $inputSum.value
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`

  return {
    currency,
    date,
    id,
    name,
    operator,
    status,
    sum,
    time,
  }
}


const clearForm = () => {
  $inputOperationName.value = null
  $inputSum.value = null
  $inputOperatorPlus.checked = false
  $inputOperatorMinus.checked = false
}