import { getDomElement } from "../utils.js"
import { addToDataBase } from "../general/dataBase.js"
import { getIdUnique } from "../general/id.js"
import { User } from './User.js'


export const addNewUser = ($checkboxTerms) => {
  const $inputEmail = getDomElement('#inputEmail')
  const $inputPassword = getDomElement('#inputPassword')
  const $btnEntry = getDomElement('.login__entry')

  $inputEmail.addEventListener('change', setCredentials)
  $inputPassword.addEventListener('change', setCredentials)
  $btnEntry.addEventListener('click', registrationUser)
  $checkboxTerms.addEventListener('click', checkTerms)
}


const credentials = {
  email: null,
  password: null,
  id: null,
}


const setCredentials = (event) => {
  if (event.target.id === 'inputEmail') {
    credentials.email = event.target.value
  } else if (event.target.id === 'inputPassword') {
    credentials.password = event.target.value
  }
}


const checkTerms = () => {
  //
}


const registrationUser = (event) => {
  event.preventDefault()
  credentials.id = getIdUnique()
  const newUser = new User(credentials)
  addToDataBase(newUser, 'users', 'obj')
}