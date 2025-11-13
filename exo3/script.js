"use strict"
// definition des etudiants table of obj page 40 function page 46
let Etudiants=[
    {id: 1000, nom: "JOHN", prenom: "DOE", moy: 14, moy2: 5},
    {id: 2000, nom: "BOB", prenom: "CARLTON", moy: 7, moy2: 1},
    {id: 3000, nom: "RAYANE", prenom: "SMITH", moy: 13, moy2: 3}
]
// function B page46
function B(moy){
    return moy>10.0;
}
// function A pour deliberation page 46 function concept
function A(){
    // for page 44
    for(let e of Etudiants){
        //if page 19
        if(B(((e.moy+e.moy2)/2)+5)){
            console.log(e.id+": ADMIS");
        }else{
            console.log(e.id+": AJOURNE");
        }
    }
}
