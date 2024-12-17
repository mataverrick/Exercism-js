// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let totalBird = 0;

    for (let index = 0; index < birdsPerDay.length; index++) {
        totalBird += birdsPerDay[index];
    }

    return totalBird;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    let totalBird = 0;
    let index = (week-1) * 7;
    let finish = index + 7;

    for (index; index < finish; index++) {
        totalBird += birdsPerDay[index];
    }

    return totalBird;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
    for (let index = 0; index < birdsPerDay.length; index+=2) {
        birdsPerDay[index]+=1;        
    }
    return birdsPerDay;
}
