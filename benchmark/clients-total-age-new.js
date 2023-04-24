import Client from "../src/entities/client.js"

export default class Clients {
  constructor ({ clients }) {
    this.clients = this.removeUndefinedRoles(clients)
    this.totalAge = this.getClientsTotalAge()
  }

  removeUndefinedRoles (clients) {
    const clientEntity = clients
    .filter(client => !!Reflect.ownKeys(client).length)
    .map(client => new Client(client))

    return clientEntity
  }

  getClientsTotalAge() {
    let result = 0
    for (const client of this.clients) {
      result += client.profile.getAge()
    }
    return result
  }
}