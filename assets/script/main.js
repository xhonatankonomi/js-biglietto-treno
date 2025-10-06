// inizializzo le costanti

// Le costanti servono a stabilire i prezzi fissi delle tariffe. Servono a impedire che possano variare in seguito

const eur_km = 0.21;
const children = eur_km - (eur_km * 0.2)
const senior = eur_km - (eur_km * 0.4)

// Dichiaro una variabile let che mi permetterà di rgolare i decimali dell'output in seguito

let output_price

// Richiedo l'input km all'utente con un alert carino per introdurlo!

alert("Salve, scopri quanto spenderai in base alla strada che percorrerai e la tua età! Clicca ok per continuare!")
let km;
km = prompt("Inserisci i km che percorrerai: ")
console.log(km)
alert("Perfetto, vedo che percorrerai " + km + "km")

// richiedi l'età

alert("Adesso scopriamo la tua età! Quanti anni hai?")
let età;
età = prompt("Inserisci la tua età:")
console.log(età)

alert("Vedo che hai " + età + " anni! Li porti bene. Adesso farò i calcoli e ti dirò quanto spenderai!")

// condizioni di confronto delle età

if (età <= 18) {

    output_price = km * children;
    output_price = output_price.toFixed(2); 
    console.log(output_price);
    alert("Dato che hai " + età + " anni, pagherai " + output_price + "€")

}  
    else if (età >= 65) {

        output_price = km * senior;
        output_price = output_price.toFixed(2); 
        console.log(output_price);
        alert("Dato che hai " + età + " anni, pagherai " + output_price + "€")

}  
    else {

        output_price = km * eur_km;
        output_price = output_price.toFixed(2); 
        console.log(output_price);
        alert("Dato che hai " + età + " anni, pagherai " + output_price + "€")

}