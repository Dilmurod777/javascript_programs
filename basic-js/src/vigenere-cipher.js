var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    cypher(column, row) {
        var index = (row + column) % 26
        return letters[index];
    }

    decypher(row, key) {
        var index = (row - key) >= 0 ? (row - key) : (26 + (row - key)) % 26
        return letters[index]
    }

    encrypt(message, key) {
        if (message == undefined || key == undefined) {
            throw Error
        }

        var result = '';
        var keyMessage = ''
        var j = 0

        for (var i = 0; i < message.length; i++) {
            keyMessage += key[j]
            j++;
            if (j >= key.length) {
                j = 0
            }
        }

        for (var i = 0, j = 0; i < message.length; i++, j++) {
            if (message[i].match(/[a-zA-Z]/) == null) {
                result += message[i]
                j--;
            }
            else {
                result += this.cypher(letters.indexOf(message.toUpperCase()[i]), letters.indexOf(keyMessage.toUpperCase()[j]));
            }
        }

        return this.direct ? result : result.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage == undefined || key == undefined) {
            throw Error
        }

        var result = '';
        var keyMessage = ''
        var j = 0

        for (var i = 0; i < encryptedMessage.length; i++) {
            keyMessage += key[j]
            j++;
            if (j >= key.length) {
                j = 0
            }
        }

        for (var i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
            if (encryptedMessage[i].match(/[a-zA-Z]/) == null) {
                result += encryptedMessage[i]
                j--;
            }
            else {
                result += this.decypher(letters.indexOf(encryptedMessage.toUpperCase()[i]), letters.indexOf(keyMessage.toUpperCase()[j]));
            }
        }

        return this.direct ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
