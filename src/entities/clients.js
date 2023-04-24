import Client from "./client.js"
import {v4 as uuid} from 'uuid'

export default class Clients {
  constructor ({ clients }) {
    this.clients = this.removeUndefinedRoles(clients)
    this.id = uuid()
    this.totalAge = this.getClientsTotalAge()
  }

  removeUndefinedRoles (clients) {
    const clientEntity = clients
    .filter(client => !!Reflect.ownKeys(client).length)
    .map(client => new Client(client))

    // remove undefined props
    return clientEntity
  }

  getClientsTotalAge() {
    return this.clients
      .map(client => client.profile.getAge())
      .reduce((prev, next) => prev + next, 0)
  }
}