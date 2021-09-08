import { getDomElement } from "../utils.js"
import { operations, deleteOperation } from './act.js'


export const $btnClearAll = getDomElement('.wallet__btn_clear')


export const deleteAllOperation = () => {
  operations.forEach(operation => {
    deleteOperation(operation)
  })
}