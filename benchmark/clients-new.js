import { randomUUID } from 'crypto'

export default class Clients {
  constructor () {
    this.id = randomUUID()
  }
}