const prompt = require('prompt-sync')();

let annee = Number(prompt("Entrez le nombre d'annes : "));

console.log(`
         MENU 
1. Convertir en mois
2. Convertir en jours
3. Convertir en heures
4. Convertir en minutes
5. Convertir en secondes
`);

let choix = Number(prompt("Choisissez une option : "));

switch (choix) {
    case 1:
        console.log(`Resultat : ${annee * 12} mois`);
        break;

    case 2:
        console.log(`Resultat : ${annee * 365} jours`);
        break;

    case 3:
        console.log(`Resultat : ${annee * 365 * 24} heures`);
        break;

    case 4:
        console.log(`Resultat : ${annee * 365 * 24 * 60} minutes`);
        break;

    case 5:
        console.log(`Resultat : ${annee * 365 * 24 * 60 * 60} secondes`);
        break;

    default:
        console.log("Choix invalide.");
}