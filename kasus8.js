const prompt = require("prompt-sync")({sigint : true});
let tinggi = Number(prompt(`tinggi badan : `))
console.log(`
TINGGI BADAN : ${tinggi}
TINGGI BADAN : ${tinggi - 100 - 0.10}`)