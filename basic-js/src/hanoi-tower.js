module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var result = {
        'turns': 0,
        'seconds': 0
    };

    result['turns'] = Math.pow(2, disksNumber) - 1;

    result['seconds'] = result['turns'] / (turnsSpeed / 3600);

    return result;
}