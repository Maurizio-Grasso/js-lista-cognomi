var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

var cognomeUtente = prompt("Inserisci cognome");

listaCognomi.push(cognomeUtente);

listaCognomi.sort();
console.log(listaCognomi);
for ( i = 0; i < listaCognomi.length; i++ ) {

    if ( cognomeUtente == listaCognomi[i] ) {
        console.log(cognomeUtente+" trovato in posizione "+(i+1));
    }
}