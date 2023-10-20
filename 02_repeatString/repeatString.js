const repeatString = function(string, num) {
    let singleString = string;

    for (let i = 1; i < num; i++) {
        string += singleString;
    }
    if (num == 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
