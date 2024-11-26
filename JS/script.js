//logica: 
/*pensare prima in italiano e dividere in piccoli problemi la consegna: 
//problema 1: timer che decrementa prima di nascondere i numeri
//generare 5 numeri randomici che poi verranno nascosti
//creare bottone 'submit/genera/vai/conferma' che validerà i numeri inseriti
//creare le 5 caselle nelle quali verranno inseriti i numeri 

//numeri casuali*/

const max = 5;
const min = 1;
    
let numCaso = []

for (let i = 0; i < 5; i++){

    numCaso.push(Math.floor(Math.random((max - min) +min) * 5))

}
    
console.log(numCaso)

//