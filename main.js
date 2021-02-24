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

    // nell'HTML, all'interno della <ol> aggiunge un <li> contenente il nome dell'elemento iterato, al quale assegna un id univoco.
    document.getElementById("my-list").innerHTML += "<li id=\"list-item-"+(i+1)+"\">"+listaCognomiNuova[i]+"</li>";
    
    if ( cognomeUtente == listaCognomiNuova[i] ) {

        console.log(cognomeUtente+" trovato in posizione "+(i+1));  // Indica la posizione umana che coincide con il cognome inserito
        document.getElementById("list-item-"+(i+1)).style = "color:red;"    // e colora il rispettivo <li> di rosso nell'HTML
    
    }


}