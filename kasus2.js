const prompt = require("prompt-sync")({sigint : true});
let hari = Number(prompt("hari: "))
const tahun_ke_hari = 365
const bulan_ke_hari = 30

tahun = bulan = sisa = 0

tahun = parseInt(hari / tahun_ke_hari);
sisa  = hari % tahun_ke_hari

bulan = parseInt(sisa / bulan_ke_hari);
sisa %= bulan_ke_hari

console.log(`
${tahun} tahun ${bulan} bulan ${sisa} hari`)