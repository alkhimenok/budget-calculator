import { getDomElement, createElement, getRoundToHundredths } from '../utils.js'
import { getDataBase, addToDataBase, deleteFromDataBase } from '../general/dataBase.js'


export const loadAllRate = () => {
  const rateItems = getDataBase('ratesList')
  const rateDescription = Object.values(rateItems)

  rateDescription.forEach(descriptions => newOptionRate(descriptions))
}

const newOptionRate = (description) => {
  const { currency, iconName, id, sum } = description

  const bodyRate = `
    <li class="add-rate__item rate" id="${id}">
      <label class="rate__label">
        <input class="rate__checkbox" type="checkbox">
        <p class="rate__currency_word">
          ${currency}
        </p>
        <div class="rate__form">
          <input class="rate__input" type="tel" value="${getRoundToHundredths(sum)}" readonly>
        </div>
        <div class="rate__img">
          <img class="icon_city" src="../src/rateImgs/png/${iconName}.png" onError="this.style.display='none'" alt="city">
        </div>
      </label>
    </li>`

  createElement('.add-rate__list', bodyRate)
  renderOtionRate()
}

const renderOtionRate = () => {
  const $allRateItems = Array.from(getDomElement('.add-rate__list').children)
  const activeCurrency = getDataBase('defaultCurrency', 'arr')


  $allRateItems.forEach(rate => {
    const $checkbox = rate.querySelector('.rate__checkbox')

    activeCurrency.forEach(i => {
      if (i.id === rate.id) $checkbox.checked = true
    })

    rate.addEventListener('click', addOptionRateToDataBase)
  })
}


const addOptionRateToDataBase = (event) => {
  const rate = event.currentTarget
  const $checkbox = rate.querySelector('.rate__checkbox')

  const currenItem = {
    currency: rate.id,
    id: rate.id,
  }

  if ($checkbox.checked) {
    addToDataBase(currenItem, 'defaultCurrency', 'arr')
  } else {
    deleteFromDataBase(currenItem.id, 'defaultCurrency', 'arr')
  }
}