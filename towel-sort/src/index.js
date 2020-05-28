// You should implement your task here.

module.exports = function towelSort(matrix) {
    var result = [];

    if (matrix == null || matrix.length == 0)
        return result

    for (var i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j]);
            }
        } else {
            for (var j = matrix[i].length - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        }
    }

    return result;
}