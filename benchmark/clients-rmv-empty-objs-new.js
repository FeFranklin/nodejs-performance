import Client from "../src/entities/client.js"

export default class Clients {
  constructor ({ clients }) {
    this.clients = this.removeUndefinedRoles(clients)
  }

  removeUndefinedRoles (clients) {
    const result = []
    for (const client of clients) {
      const keys = Reflect.ownKeys(client)
      if (!keys.length) continue;

      result.push(new Client(client))
    }

    return result
  }
}