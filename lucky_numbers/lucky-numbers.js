// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const num1 = Number (array1.join(''));
    const num2 = Number(array2.join(''))
    

    return num2 + num1;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    let vall = String (value);
    let val = vall.split('');
    const long  = val.length-1;

    for(let i = 0; i <val.length/2;i++){
        let aux = val[i];
        val[i] = val[long-i];
        val[long-i] = aux
    }

    return Number(val.join('')) === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if(input === null || input ===undefined || input.length === 0) return 'Required field';

    if(!(Number(input) > 0)) return 'Must be a number besides 0'

    return '';
}
