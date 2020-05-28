exports.min = function min(array) {
    if (array != undefined && array != null && array.length != 0) {
        var min = array[0];
        for (var number of array) {
            if (number < min) {
                min = number
            }
        }

        return min;
    }

    return 0;
}

exports.max = function max(array) {
    if (array != undefined && array != null && array.length != 0) {
        var max = array[0];
        for (var number of array) {
            if (number > max) {
                max = number
            }
        }

        return max;
    }

    return 0;
}

exports.avg = function avg(array) {
    if (array != undefined && array != null && array.length != 0) {
        var avg = 0;
        for (var number of array) {
            avg += number;
        }

        return avg / array.length;
    }

    return 0;
}