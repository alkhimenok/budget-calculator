import { doClassList } from './scripts/utils.js'
import { requestRates } from './scripts/rates/request.js'
import { loader } from './scripts/UI/loader.js'
import { setSizeForScrol, setHeight } from './scripts/general/setSize.js'
import { setDefaultCurrency, loadOpeationFromDataBase, loadDefaultRates, addOptionDefaultRates } from './scripts/general/memory.js'
import { loadAllRate } from './scripts/rates/addRate.js'
import { selectOperations } from './scripts/budget/selectHistory.js'
import { clearInput } from './scripts/general/clearInputs.js'

import { $iconBurger, showMenu } from './scripts/general/menuBurger.js'
import { $btnClearAll, deleteAllOperation } from './scripts/budget/clearAll.js'
import { $btnAddOperation, getDescriptionOperation } from './scripts/budget/form.js'
import { $userIcon, showForm } from './scripts/login/render.js' ////////////////


window.addEventListener('DOMContentLoaded', () => {
  try {
    requestRates()
    loader()
    window.addEventListener('load', start)
  } catch (error) {
    console.log(error)
  }
})


const start = () => {
  if (checkEndUrl('currentRates.html')) {

    setSizeForScrol('.current-rate', '.current-rate__header', '.rate')
    loadDefaultRates()

  } else if (checkEndUrl('history.html')) {

    setSizeForScrol('.history', '.history__header', '.operation')
    loadOpeationFromDataBase()
    selectOperations()

  } else if (checkEndUrl('addCurrency.html')) {

    loadAllRate()

  } else if (checkEndUrl('news.html')) {

    console.log('news')

  } else {

    setSizeForScrol('.current-rate', '.current-rate__header', '.rate')
    setSizeForScrol('.history', '.history__header', '.operation')
    setHeight('.wallet__body', 'min')

    loadOpeationFromDataBase()
    selectOperations()
    setDefaultCurrency()
    loadDefaultRates()
    addOptionDefaultRates()
    clearInput()

    $btnClearAll.addEventListener('click', deleteAllOperation)
    $btnAddOperation.addEventListener('click', getDescriptionOperation)

  }

  $userIcon.addEventListener('click', showForm)
  $iconBurger.addEventListener('click', showMenu)

  doClassList('.wrapper', 'add', '_show')
  loader('stop')
}


const checkEndUrl = (url) => location.href.endsWith(url)