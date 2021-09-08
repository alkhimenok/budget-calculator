import { getDomElement, doClassList, isClassNameContains } from '../utils.js'
import { operations } from './act.js'


const $historySelectBlock = getDomElement('.select-history')
const historyoptions = Array.from($historySelectBlock?.children || [])


export const selectOperations = () => {
  $historySelectBlock.addEventListener('click', (event) => {
    const idCurrenOption = event.target.id

    if (idCurrenOption === 'earningsOption') {
      filterOperation(operations, '_operation-earnings')
    } else if (idCurrenOption === 'spendingOption') {
      filterOperation(operations, '_operation-spending')
    } else {
      filterOperation(operations, 'operation__item')
    }

    activeOption(idCurrenOption)
  })
}


const activeOption = (currentId) => {
  historyoptions.forEach(option => (option.id !== currentId)
    ? doClassList(option, 'remove', '_current')
    : doClassList(option, 'add', '_current'))
}


const filterOperation = (operations, className) => {
  operations.filter(operation => {
    isClassNameContains(operation, className)
      ? operation.style.display = 'block'
      : operation.style.display = 'none'
  })
}