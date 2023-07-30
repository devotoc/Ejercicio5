var cantidadDeGatos = 5;
var cantidadDePasos = 3;

console.log("");
console.log("Ejercicio c");
for(i=1; i<=cantidadDeGatos ; i++){
    var pasos="";
    for(j=1;  j<=cantidadDePasos; j++){
        pasos += "🐾";
    }
    console.log("Gato #" + i + ": 🐈 " + ((i%2 ==0 )?"⬛ ":" " ) +  pasos);
    
}
