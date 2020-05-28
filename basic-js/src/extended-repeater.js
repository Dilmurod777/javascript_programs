module.exports = function repeater(str, options) {
    var result = ''
    var add = '';
    var separator = 'separator' in options ? options['separator'].toString() : '+'
    var additionSeparator = 'additionSeparator' in options ? options['additionSeparator'].toString() : '|'
    var addition = 'addition' in options ? options['addition'] : ''
    var additionRepeatTimes = 'additionRepeatTimes' in options ? options['additionRepeatTimes '] : 0 

    for (var i = 0; i < options['additionRepeatTimes'] - 1; i++) {
        add += addition
        add += additionSeparator
    }
    add += addition

    for (var i = 0; i < options['repeatTimes'] - 1; i++) {
        result += str + add
        result += separator
    }
    result += str + add

    return result
};
