/*Crear un programa que te pida crear una contraseña, dicha contraseña debe respetar las
siguientes reglas:
1. Debe contener al menos 2 letras mayúsculas.
2. Debe contener al menos 3 números no repetidos.
3. Debe contener al menos 1 carácter de esta lista (* _ - ¿ ¡ ? # $)
4. No debe contener espacios en blanco.
5. Debe tener entre 8 y 15 caracteres, no más, no menos.
Ejemplo:
Contraseña: “FaciliTo22 ” ->
Error la contraseña no debe tener números repetidos
Error la contraseña debe tener 3 números
Error la contraseña debe tener al menos un carácter especial (* _ - ¿ ¡ ? # $)
Error la contraseña no debe tener espacios en blanco
Contraseña: “ContraseñA4953*”
Contraseña valida */
const checkDuplicate = arr => {
    let result = false;
    result = arr.some((element, index) => {
        return arr.indexOf(element) !== index;
    });

    return !!result;
};
const contraseña = (cadena) => {
    const errors = [];
    const caracteres = /[* _ - ¿ ¡ ? # $ ]/g;
    const num = /[1 2 3 4 5 6 7 8 9 0]/g;
    const letras = /[A-Z]/g;
    const n = cadena.match(num) < 3;
    
  
    if (cadena.length < 8 || cadena.length > 15) {
        errors.push('La contraseña debe tener minimo 8 caracteres y maximo 15');
    }
    if (cadena.includes(' ')) {
        errors.push('No debe contener espacios en blanco.');
    }
    if (!cadena.match(caracteres)) {
        errors.push('Debe contener al menos 1 caracter * _ - ¿ ¡ ? # $');
    }
    if (!cadena.match(letras) || cadena.match(letras).length < 2) {
        errors.push('debe tener al menos 2 letras mayusculas');
    }
    if (!cadena.match(num) || n === true || checkDuplicate(cadena.match(num))) {
        errors.push('Debe contener al menos 3 numeros y no ser repetidos');
    }
    if (errors.length) {
        console.log(errors.join(', '));
    }else{
        console.log("contraseña valida");
    }

};

console.log(contraseña("*FaciliTo21"));
