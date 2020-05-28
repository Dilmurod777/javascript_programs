module.exports = function toReadable(number) {
    var SINGULAR = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    var DUAL = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }

    var N_TENTH = {
        '1': 'ten',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }

    if (number >= 0 && number <= 9) {
        return SINGULAR[number];
    } else if (number >= 10 && number <= 19) {
        return DUAL[number];
    } else if (number >= 20 && number <= 99) {
        var first = (Math.floor(number / 10)).toString();
        var second = (number % 10).toString();
        var result = '';

        if (second == 0) {
            result += N_TENTH[first];
        } else {
            result += N_TENTH[first] + " " + SINGULAR[second];
        }

        return result;
    } else if (number >= 100 && number <= 999) {
        var first = (Math.floor(number / 100)).toString();
        var second = (Math.floor(number / 10) % 10).toString();
        var third = (number % 10).toString();
        var result = '';

        if (third == '0') {
            if (second == '0') {
                result += SINGULAR[first] + ' hundred';
            } else {
                result += SINGULAR[first] + ' hundred ' + N_TENTH[second];
            }
        } else {
            if (second == '0') {
                result += SINGULAR[first] + ' hundred ' + SINGULAR[third];
            } else if (second == '1') {
                result += SINGULAR[first] + ' hundred ' + DUAL[second + third];
            } else {
                result += SINGULAR[first] + ' hundred ' + N_TENTH[second] + ' ' + SINGULAR[third];
            }
        }

        return result;
    }
}