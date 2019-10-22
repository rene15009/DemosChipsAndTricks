"use strict";

/** @description Determina la suma de los términos.
 * @param {number} termino Termino a sumar
 * @param {number} termino2 Termino a sumar
 * @param {number} termino3 Termino a sumar
 * @return {number} Suma de los términos
 */
function sumar(termino, termino2, termino3) {
    
    return termino + termino2;
}

/** @description Determina la resta de los términos.
 * @param {number} minuendo Termino a restar
 * @param {number} substraendo Termino b restar
 * @return {number} Resta de los términos
 */
function resta(minuendo, substraendo) {

    return minuendo - substraendo;
}


/** @description Determina la multiplicar de los términos.
 * @param {number} factor Termino a sumar
 * @param {number} factor2 Termino b sumar
 * @return {number} Multiplicación de los términos
 */
function multiplica(factor, factor2) {

    return factor * factor2;
}

/** @description Determina la división de los términos.
 * @param {number} dividendo Termino 
 * @param {number} divisor Termino 
 * @return {number} Suma de los términos
 */
function dividir(dividendo, divisor) {
    
    return !!divisor && (dividendo / divisor);
}