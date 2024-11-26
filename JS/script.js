//logica: 
/*pensare prima in italiano e dividere in piccoli problemi la consegna: 
//problema 1: timer che decrementa prima di nascondere i numeri
//generare 5 numeri randomici che poi verranno nascosti
//creare bottone 'submit/genera/vai/conferma' che validerà i numeri inseriti
//creare le 5 caselle nelle quali verranno inseriti i numeri 

//numeri casuali*/

const max = 50;
const min = 1;
    
let numCaso = []

for (let i = 0; i < 5; i++){

    numCaso.push(Math.floor(Math.random((max - min) + min) * 50))

}
    
console.log(numCaso)

document.getElementById('numerotti').innerHTML = numCaso.toString()

//countdown
let counter = 11;

const clock = setInterval(function(){
    counter--;

    document.getElementById('seconds').innerHTML = counter

    if(counter == 1){
     
      clearInterval(clock)
      document.getElementById('seconds').classList.add('d-none')
      document.getElementById('bottonz').classList.toggle('d-none')
      document.getElementById('numerotti').classList.add('d-none')
      document.getElementById('inserimento').classList.toggle('d-none')

    }
  },1000)

  //validazione numeri

  
  function validazione(){

    const testo = document.getElementById('caselle').value
    
    if (testo.includes(numCaso)){
        document.getElementById('vinto').innerHTML = 'Hai indovinato, che memoria!'
    } else {
        document.getElementById('vinto').innerHTML = 'Riprova!'
    }
  }

  