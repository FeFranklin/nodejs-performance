import Client from "../src/entities/client.js"

export default class Clients {
  constructor ({ clients }) {
    this.clients = this.removeUndefinedRoles(clients)
  }

  removeUndefinedRoles (clients) {
    const clientEntity = clients
    .filter(client => !!Reflect.ownKeys(client).length)
    .map(client => new Client(client))

    return clientEntity
  }
}