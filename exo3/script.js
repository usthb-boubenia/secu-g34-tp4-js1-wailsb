"use strict"
// definition des etudiants
let Etudiants=[
    {id: 1000, nom: "JOHN", prenom: "DOE", moy: 14, moy2: 5},
    {id: 2000, nom: "BOB", prenom: "CARLTON", moy: 7, moy2: 1},
    {id: 3000, nom: "RAYANE", prenom: "SMITH", moy: 13, moy2: 3}
]
// function B
function B(moy){
    return moy>10.0;
}
// function A pour deliberation
function A(){
    for(let e of Etudiants){
        if(B(((e.moy+e.moy2)/2)+5)){
            console.log(e.id+": ADMIS");
        }else{
            console.log(e.id+": AJOURNE");
        }
    }
}