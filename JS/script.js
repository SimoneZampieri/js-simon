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

  const testo = document.getElementById('inserimento')
  const numero1 = document.getElementById('num1')
  const numero2 = document.getElementById('num2')
  const numero3 = document.getElementById('num3')
  const numero4 = document.getElementById('num4')
  const numero5 = document.getElementById('num5') 
  
  function validazione(){
      
      
      const numeriInseriti = [
          parseInt(numero1.value), 
          parseInt(numero2.value), 
          parseInt(numero3.value), 
          parseInt(numero4.value), 
          parseInt(numero5.value)];


    if (numeriInseriti.includes(numCaso)){
        document.getElementById('vinto').innerHTML = 'Hai indovinato, che memoria!'
    } else {
        document.getElementById('vinto').innerHTML = 'Riprova!'
    }
  }

  