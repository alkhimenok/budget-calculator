// operationList
// ratesList
// allIds
// defaultCurrency

export const getDataBase = (key, type = 'arr') => {
  const responseLocalStorage = localStorage.getItem(key)

  if (type === 'arr') {
    return JSON.parse(responseLocalStorage) || []
  } else if (type === 'obj') {
    return JSON.parse(responseLocalStorage) || {}
  } else {
    return JSON.parse(responseLocalStorage)
  }
}


export const getKeysForDataBase = () => Object.keys(localStorage)


export const addToDataBase = (item, key, type = 'arr') => {
  let dataВaseResponse = getDataBase(key, type)

  if (type === 'arr') {
    dataВaseResponse.push(item)
  } else if (type === 'obj') {
    dataВaseResponse[item.id] = item
  } else {
    dataВaseResponse = item
  }

  localStorage.setItem(key, JSON.stringify(dataВaseResponse))
}


export const deleteFromDataBase = (id, key, type = 'arr') => {
  let dataВaseResponse = getDataBase(key, type)
  let newDataBase

  if (type === 'arr') {
    newDataBase = dataВaseResponse.filter(item => item.id !== checkTepeof(id))
  } else if (type === 'obj') {
    delete dataВaseResponse.id
    newDataBase = dataВaseResponse
  } else {
    dataВaseResponse = null
  }

  removeUnnecessaryIds(id)
  localStorage.setItem(key, JSON.stringify(newDataBase))
}


const removeUnnecessaryIds = (currentId) => {
  const ids = getDataBase('allIds')

  const resulIds = ids.filter(id => id !== +currentId)

  localStorage.setItem('allIds', JSON .stringify(resulIds))
}


const checkTepeof = (el) => +el ? +el : el