/* 1.-Crear un programa que, ingresada una palabra, muestre como salida:
1. El número de apariciones de cada letra en la palabra.
2. Ordene alfabéticamente todas las letras de la palabra.
Ejemplo: Amarillo → [a -> 2, m -> 1, r -> 1, i -> 1, l -> 2, o -> 1] [aaillmor] */

const contadorPalabras= (text)=>{
    let cadena = text.toLowerCase().replace(/ /g, '').split('').sort();


    const numPalabras = cadena.reduce((acc, el) => {
      
         if (acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    },{})
 return numPalabras;

}

console.log(contadorPalabras("aAmarillo amarillo cual quier color que se repita dime el numero de veces que se repite la letra en este texto"))
