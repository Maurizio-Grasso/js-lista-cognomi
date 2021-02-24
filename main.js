var listaCognomiOriginale = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];


// Preservo la lista dei cognomi originale lavorando su una copia
var listaCognomiNuova = listaCognomiOriginale;  

var cognomeUtente = prompt("Inserisci cognome");

listaCognomiNuova.push(cognomeUtente);

for ( i = 0; i < listaCognomiNuova.length; i++ ) {
    // questo ciclo for serve soltanto a rimuovere le lettere maiuscole dai cognomi
    // altrimenti non funzionerebbe il sort dell'array
    listaCognomiNuova[i] = listaCognomiNuova[i].toLowerCase();
}

listaCognomiNuova.sort();

for ( i = 0; i < listaCognomiNuova.length; i++ ) {

    if ( cognomeUtente == listaCognomiNuova[i] ) {
        console.log(cognomeUtente+" trovato in posizione "+(i+1));
    }
}