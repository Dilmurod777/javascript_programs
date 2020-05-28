module.exports = function transform(arr) {
    var temp = [];
    var result = []
    var skip = false;
    var double_item = false;

    for (var item of arr) {
        if (double_item) {
            temp.push(item)
            temp.push(item)
            double_item = false;
            continue;
        }

        if (item == '--double-next') {
            double_item = true;
            continue;
        } else if (item == '--double-prev') {
            if (temp.length != 0) {
                var el = temp.pop()
                temp.push(el);
                temp.push(el);
            }
            continue;
        } else {
            temp.push(item);
        }
    }

    for (var item of temp) {
        if (skip) {
            skip = false;
            continue;
        }

        if (item == '--discard-next') {
            skip = true;
            continue;
        } else if (item == '--discard-prev') {
            if (result.length != 0)
                result.pop()
            continue;
        } else {
            result.push(item)
        }
    }

    return result;
};