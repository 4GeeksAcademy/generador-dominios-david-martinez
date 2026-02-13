// Definimos arrays de palabras
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io']; // El bonus de extensiones

//  Usamos bucles anidados para combinar todo
for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let ext of extensions) {
                // Imprimimos la combinación en la consola
                console.log(`${p}${a}${n}${ext}`);
            }
        }
    }
}