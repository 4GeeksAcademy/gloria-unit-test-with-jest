// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yen
    let valueInYen = (valueInDollar * 156.5)/1.07;
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Pound
    let valueInPound = (valueInYen * 0.87)/156.5;
    // Retornamos el valor en yenes
    return valueInPound;
}

// Contenido de app.js 
console.log("Hello World")
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}