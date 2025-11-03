"use strict"
// function f1 pour tb
function F1() {
    console.log("Etudiant1");
    console.log("Etudiant2");
    console.log("Etudiant3");
}
// function f2 pour etudiant
function F2() {
    console.log({nom: "John", prenom: "Doe", age: 30});
}
// function f3 pour tb etudiants

function F3() {
    // definition tableau d'objets etudiants
    let etudiants = [
        {nom: "nom1", prenom: "prenom1", age: 21},
        {nom: "nom2", prenom: "prenom2", age: 22},
        {nom: "nom3", prenom: "prenom3", age: 23}
    ];
    // affichage des etudiants comme enoncé
    for (let e of etudiants) {
        console.log(e.nom+"-"+e.prenom+"-"+e.age);
    }
}