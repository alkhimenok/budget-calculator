import { getDomElement, doClassList, isClassNameContains } from "../utils.js"
import { deleteFromDataBase } from '../general/dataBase.js'
import { checkElement } from '../general/checkForDataBase.js'
import { $operationList } from './newOperation.js'
import { setStatus } from './balance.js'


export const operations = []


export const actOperation = () => {
  const $newOperation = $operationList.querySelector('.operation__item')
  
  operations.push($newOperation)

  $newOperation.addEventListener('click', activeOperation)

  showOperation($newOperation)
  addHandlerDeletingOperation()
  checkPresence()
  setStatus()
}


export const deleteOperation = (operation) => {
  if (checkElement(operation, 'operationList')) {
    removeOperation(operation)
    deleteFromDataBase(operation.id, 'operationList')
  }
}


const showOperation = (operation) => {
  setTimeout(() => doClassList(operation, 'remove', '_hide'), 0)
}


const activeOperation = (event) => {
  const $operation = event.target.closest('.operation__item')

  operations.forEach(el => doClassList(el, 'remove', '_active'))

  doClassList($operation, 'add', '_active')
}


const addHandlerDeletingOperation = () => {
  const $btnsDeleteOperation = getDomElement('.operation__btn_delete', true)

  $btnsDeleteOperation.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const targetOperation = event.target.closest('.operation__item')

      deleteOperation(targetOperation)
    })
  })
}


const removeOperation = (element) => {
  doClassList(element, 'add', '_hide')

  setTimeout(() => {
    element.remove()
    setStatus()
    setTimeout(checkPresence, 0)
  }, 300)
}


const checkPresence = () => {
  const $operationEmpty = getDomElement('.operation__empty')
  const containsOperation = Array.from($operationList.children)
    .some(li => isClassNameContains(li, 'operation__item'))

  if (!containsOperation) {
    doClassList($operationEmpty, 'remove', '_hide')
  } else {
    doClassList($operationEmpty, 'add', '_hide')
  }
}