import {v4 as uuid} from 'uuid'

export default class Clients {
  constructor () {
    this.id = uuid()
  }
}