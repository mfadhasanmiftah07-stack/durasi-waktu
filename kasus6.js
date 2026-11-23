const prompt = require("prompt-sync")({sigint : true});
let x = Number(prompt(`jarak : `))
const METER_KE_CM = 100
const KILOMETER_KE_CM = 100000

let meter = kilometer1 = sisa = 0 

kilometer1 = parseInt(x / KILOMETER_KE_CM)
sisa = x % KILOMETER_KE_CM
console.log(sisa)
meter = parseInt(sisa / METER_KE_CM)
sisa %= METER_KE_CM
console.log(`${kilometer1} km ${meter} = ${sisa} cm`)