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
    return this.clients
      .map(client => client.profile.getAge())
      .reduce((prev, next) => prev + next, 0)
  }
}