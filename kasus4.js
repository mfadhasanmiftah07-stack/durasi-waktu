const prompt = require("prompt-sync")({sigint : true});
let x = Number(prompt("x: "))
let y = Number(prompt("y: "))
let z = Number(prompt("z: "))

console.log(`NILAI AWAL : x = ${x}, y = ${y}, z = ${z}`)
let sisa = x
x = y 
y = z
z = sisa

console.log(`NILAI AKHIR : x = ${x}, y = ${y}, z = ${z}`)