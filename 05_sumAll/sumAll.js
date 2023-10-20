const sumAll = function(firstInt, secondInt) {
    const numberArray = [];

    if ((typeof firstInt !== "number") || (typeof secondInt !== "number")) return 'ERROR';
    if (firstInt < 0 || secondInt < 0) return 'ERROR';
    if (secondInt < firstInt) {
        [firstInt, secondInt] = [secondInt, firstInt];
    }

    for (let i = firstInt; i <= secondInt; i++) {
        numberArray.push(i);
    }

    function getSum(total, num) {
        return total + num;
    }

    return numberArray.reduce(getSum);
};

// Do not edit below this line
module.exports = sumAll;

