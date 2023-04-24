import Benchmark from "benchmark";
import ClientsTotalAgeOld from "./clients-total-age-old.js";
import ClientsTotalAgeNew from "./clients-total-age-new.js";
import ClientsNew from "./clients-new.js"
import ClientsOld from "./clients-old.js"
import ClientsRmvNew from "./clients-rmv-empty-objs-new.js"
import ClientsRmvOld from "./clients-rmv-empty-objs-old.js"
import database from '../database.js'

const suite = new Benchmark.Suite;

// suite
//   .add('Clients#clientsIdUUID', function () {
//     new ClientsOld()
//   })
//   .add('Clients#clientsIdCrypto', function () {
//     new ClientsNew()
//   })
//   .on('cycle', (event) => console.log(String(event.target)))
//   .on('complete', function (event) {
//     console.log(`fastest is ${this.filter('fastest').map('name')}`)
//   })
//   .run()

// suite
//   .add('Clients#clientsRmvMAP', function () {
//     new ClientsRmvOld(database)
//   })
//   .add('Clients#clientsRmvFOR', function () {
//     new ClientsRmvNew(database)
//   })
//   .on('cycle', (event) => console.log(String(event.target)))
//   .on('complete', function (event) {
//     console.log(`fastest is ${this.filter('fastest').map('name')}`)
//   })
//   .run({ async: true})

suite
  .add('Clients#clientsTotalAgeOLD', function () {
    new ClientsTotalAgeOld(database)
  })
  .add('Clients#clientsTotalAgeNEW', function () {
    new ClientsTotalAgeNew(database)
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function (event) {
    console.log(`fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true})
