"use strict"
// definition des etudiants
let Etudiants=[
    {id: 1000, nom: "JOHN", prenom: "DOE", moy: 14, section: 5},
    {id: 2000, nom: "BOB", prenom: "CARLTON", moy: 7, section: 1},
    {id: 3000, nom: "RAYANE", prenom: "SMITH", moy: 13, section: 3}
]
// function B
function B(moy){
    return moy>10.0;
}
// function A pour deliberation
function A(){
    for(let e of Etudiants){
        if(B(e.moy)){
            console.log(e.id+": ADMIS");
        }else{
            console.log(e.id+": AJOURNE");
        }
    }
}