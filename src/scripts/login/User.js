import { addToDataBase } from '../general/dataBase.js'

export class User {
  constructor(credentials) {
    this.userData
    this.email = credentials?.email
    this.password = credentials?.password
    this.term = credentials?.term
    this.id = credentials?.id
    this.date = credentials?.date

    console.log(credentials);
    this.addUser()
  }

  addUser() {
    // addToDataBase(this.userData, 'users', 'obj')
  }
} 