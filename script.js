// Pseudokod
//// Stegen
// Sätt variabel mål till 1
// Sätt variabel antalKast till 0
// Loopa tills mål är större än 6
//// Sätt variabel resultat till slumpat nummer mellan 1 och 6
//// Öka på antalKast med 1
//// Kontrollera om resultat är lika med mål
////// Öka på mål med 1
// Meddela resultat

let goal = 1;
let numberOfRolls = 0;

while (goal <= 6) {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log('Du rullade ' + result);
    numberOfRolls++;
    if (result === goal) {
        goal++;
        console.log('Träff!');
        
    }
}

console.log(`Det tog ${numberOfRolls} kast för att nå mål 6.`);