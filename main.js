// dichiarazioni variabili
var nome = prompt('Come ti chiami?')
var email = prompt('Inserisci la tua mail');
var lista = ['mario@gmail.com', 'andrea@gmail.com', 'paola@gmail.com', 'marian@gmail.com', 'lorenzo@gmail.com', 'cristiana@gmail.com', 'cecilia@gmail.com', 'matteo@gmail.com'];
var accesso = 'negato';
var rndPc
var rndUser
var numeri = document.getElementById('numeri');
// fine dichiarazioni

// Controllo l'acesso
for (var i = 0; i < lista.length; i++){
  if (lista[i] === email){
    document.getElementById('accesso').innerText = 'Accesso consentito, puoi proseguire...';
    accesso = 'consentito'
    break;
  }
}

if (accesso === 'negato') {
  document.getElementById('accesso').innerText = 'Accesso negato! Non puoi proseguire';
} else { // fine controllo accesso

  // eseguo gioco con acesso consentito
  prompt('Premi Ok per giocare ed estrarre il numero casuale');
  rndUser = Math.floor(Math.random() * (6 - 2 + 1) + 2 );
  rndPc = Math.floor(Math.random() * (6 - 2 + 1) + 2 );
  numeri.append('\nIl tuo numero è: ' + rndUser + '\n Il numero del computer è: ' + rndPc) ;



  if (rndUser > rndPc) {
    document.getElementById('risultato').innerText = 'Hai vinto!!'
  } else if (rndUser < rndPc) {
    document.getElementById('risultato').innerText = 'Hai perso. Ritenta, sarai più fortunato.';
  } else {
    document.getElementById('risultato').innerText = 'Siete pari!!';
  }



}
