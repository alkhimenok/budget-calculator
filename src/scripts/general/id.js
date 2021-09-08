import { getDataBase, addToDataBase } from './dataBase.js'


export const getIdUnique = () => {
  const newId = getNewId()
  const ids = getAllIds()

  if (isIdUniqueId(ids, newId)) {
    addToDataBase(newId, 'allIds')
    return newId
  } else {
    getIdUnique()
  }
}


const getNewId = () => +(Math.round(Math.random() * 1000) + String(Date.now()))


const getAllIds = () => getDataBase('allIds')


const isIdUniqueId = (ids, newId) => !Boolean(ids.filter(id => id === newId).length)