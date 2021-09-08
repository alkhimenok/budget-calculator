import { getKeysForDataBase } from './dataBase.js'


export const checkDescription = (item, key) => {
  if (!key) return false

  if (key === 'operationList') {
    if (!item.currency
      || !item.date
      || !item.id
      || !item.name
      || !item.operator
      || !item.status
      || !item.sum) return false
  }

  return true
}


export const checkElement = (element, key) => {
  const dataBaseKeys = getKeysForDataBase()
  const elementId = element.id

  return elementId && dataBaseKeys.includes(key)
}