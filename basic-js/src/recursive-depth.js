module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var result = 1;
        var max = 0;
        for (var item of arr) {
            if (Array.isArray(item)) {
                var temp = this.calculateDepth(item)
                if (max <temp)
                    max = temp
            }
        }

        return result + max
    }
};