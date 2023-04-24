import database from "../database.js";

import Clients from "./entities/clients.js";

const clients = new Clients(database)
console.log(clients)