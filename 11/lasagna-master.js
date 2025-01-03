/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 */

export function cookingStatus(timer) {
    if (timer === undefined) return 'You forgot to set the timer.';

    return timer === 0 ? 'Lasagna is done.' : 'Not done, please wait.'
}

export function preparationTime(layers, time) {
    if (time === undefined) {
        time = 2;
    }

    return layers.length * time;
}

export function quantities(args) {
    const obj = {
        noodles: 0,
        sauce: 0
    }

    args.forEach((value) => {
        console.log(value);
        if (value == 'noodles') {
            obj.noodles += 50;
        }

        if (value === 'sauce') obj.sauce += 0.2

    })

    return obj;

}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
    return;
}

export const scaleRecipe = (recipe, portions) => {
    const recipeCopy = { ...recipe }
    Object.keys(recipeCopy).forEach((key) => {
        recipeCopy[key] = recipeCopy[key] * (portions / 2)
    })

    return recipeCopy
}