var cantidadDeGatos = 5;
var cantidadDePasos = 3;

console.log("");
console.log("Ejercicio b");
for(i=1; i<=cantidadDeGatos ; i++){
    var pasos="";
    for(j=1;  j<=cantidadDePasos; j++){
        pasos += "🐾";
    }
    console.log("Gato #" + i + ": 🐈 " + pasos);
    
}
