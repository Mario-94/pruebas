/* Crear un programa que dada una palabra la separe en sus distintas silabas, siguiendo las
siguientes reglas:
1. Una sola consonante entre dos vocales se agrupa con la vocal que sigue.
Ejemplos: a-gu-je-ro, pe-lo-te-ro.
2. Dos consonantes entre dos vocales se agrupan una para cada vocal.
Ejemplos: in-men-son, gim-nas-ta.
Esta regla tiene una excepción: los grupos consonánticos pr, pl, br, bl, fr, fl, tr, tl, dr, dl, cr,
cl, gr, se unen a la vocal siguiente.
Ejemplos re-fres-co, a-flo-jar.
Las consonantes dobles en la escritura ch, ll, rr, responden a un solo fonema, por lo que
se consideran a los efectos de la separación silábica como una sola consonante.
Ejemplo, ca-lle, ce-rro.
3. Tres consonantes en medio de dos vocales se agrupan dos con la primera vocal y la
tercera con la vocal que sigue.
Ejemplos; ins-pec-tor, obs-ta-cu-li-zar.
Esta regla tiene la excepción anterior.
Ejemplos: A-tlan-ti-co, ham-bre.
4. Cuatro consonantes en medio de dos vocales se agrupan dos con la primera vocal y las
otras dos con la vocal que sigue.
Ejemplos: Cons-truc-ción, ins-truc-ción. */

const palabra = (cadena) => {
    const v = /[a e i o u]/g//vocales
    const srt = cadena.replace(/\s/g, '');
    const lowered = srt.toLowerCase();
    const splitted = lowered.split('');

    for (i=1;i<10;i++){ 
        document.write("<br><b>La tabla del " + i + ":</b><br>") 
        for (j=1;j<10;j++) { 
           document.write(i + " x " + j + ": ") 
           document.write(i*j) 
           document.write("<br>") 
        } 
 }
       

}    

console.log(palabra("agujero pelotero"));