module.exports = function check(str, bracketsConfig) {
    openningBrackets = []
    closingBrackets = []

    for (var brackets of bracketsConfig) {
        openningBrackets.push(brackets[0])
        closingBrackets.push(brackets[1])
    }

    closings = []
    for (var item in str) {
        if (openningBrackets.includes(str[item]) && closingBrackets.includes(str[item])) {
            if (closings.includes(str[item])) {
                closings.pop()
                continue
            } else {
                closings.push(str[item])
            }
        }
        else if (openningBrackets.includes(str[item])) {
            closings.push(closingBrackets[openningBrackets.indexOf(str[item])])
        } else if (str[item] == closings[closings.length - 1]) {
            closings.pop()
            continue
        } else {
            return false
        }
    }

    if (closings.length != 0) {
        return false
    }
    return true
}