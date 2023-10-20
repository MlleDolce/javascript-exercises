const removeFromArray = function(array, element) {
    const alteredArray = [];
    let excluded

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                excluded = true;
                continue;
            }
        }

        if (!excluded) {
            alteredArray.push(array[i]);
        }
        excluded = false;
    }

    return alteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
