const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var limit = 10;
    var result = []
    for (var i = 0; i < expr.length; i += limit) {
        digital_letters = expr.substr(i, limit)
        if (digital_letters == '**********') {
            result.push(' ')
            continue
        }
        decoded_letters = []
        for (var j = 0; j < digital_letters.length; j += 2) {
            element = digital_letters.substr(j, 2)
            if (element == '00') continue
            else if (element == '10') decoded_letters.push('.')
            else if (element == "11") decoded_letters.push('-')
        }

        decoded_str = decoded_letters.join('')
        result.push(MORSE_TABLE[decoded_str])
    }

    return result.join('')
}

module.exports = {
    decode
}