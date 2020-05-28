function eval() {
    // Do not use eval!!!
    return;
}

symbols = ['(', ')', '*', '/', '+', '-']

function calcSingleExpression(o1, o2, operator) {
    if (operator == '*') {
        return o1 * o2;
    } else if (operator == '/') {
        if (o2 == 0) {
            throw Error('TypeError: Division by zero.');
        }
        return o1 / o2;
    } else if (operator == '+') {
        return o1 + o2;
    } else if (operator == '-') {
        return o1 - o2;
    }
}

function splitExpr(expr) {
    var splittedExpr = []
    var item = ''
    var operatorFound = false

    for (var symbolIndex in expr) {
        if ((operatorFound || symbolIndex == 0) && expr[symbolIndex] == '-') {
            item += expr[symbolIndex]
            continue
        }

        if (symbols.includes(expr[symbolIndex])) {
            if (item != '') {
                splittedExpr.push(item)
            }
            item = ''
            splittedExpr.push(expr[symbolIndex])
            operatorFound = true
        } else {
            item += expr[symbolIndex]
            operatorFound = false
        }
    }
    splittedExpr.push(item)

    return splittedExpr;
}

function checkPairBrackets(expr) {
    pair = 0
    for (var item of expr) {
        if (item == '(') {
            pair++
        } else if (item == ')') {
            pair--
        }
    }
    if (pair != 0) {
        throw Error('ExpressionError: Brackets must be paired')
    }
}

function calcSingleBracketExpr(expr) {
    // console.log(expr)
    for (var index = 0; index < expr.length; index++) {
        if (expr[index] == '*' || expr[index] == '/') {
            expr[index] = calcSingleExpression(parseFloat(expr[index - 1]), parseFloat(expr[index + 1]), expr[index]).toString()
            expr.splice(index + 1, 1)
            expr.splice(index - 1, 1)
            index -= 2;
        }
    }

    // console.log(expr)
    for (var index = 0; index < expr.length; index++) {
        if (expr[index] == '+' || expr[index] == '-') {
            expr[index] = calcSingleExpression(parseFloat(expr[index - 1]), parseFloat(expr[index + 1]), expr[index]).toString()
            expr.splice(index + 1, 1)
            expr.splice(index - 1, 1)
            index -= 2;
        }
    }
    // console.log(expr)
    return expr
}

function calcMultipleBracketExpr(expr) {
    var result = ''
    var index = 0

    for (index = 0; index < expr.length; index++) {
        if (expr[index] == '(') {
            temp = expr
            temp.splice(0, index + 1)
            temp = calcMultipleBracketExpr(temp)
            result += temp[0]
            index = temp[1]
        } else if (expr[index] == ')') {
            break
        } else {
            result += expr[index]
        }
    }
    // console.log(result)
    splittedResult = splitExpr(result)
    result = calcSingleBracketExpr(splittedResult)
    // console.log(result)
    return [result, index]
}

function expressionCalculator(expr) {
    expr = expr.replace(/\s/g, '').split('').join('')

    expr = splitExpr(expr)

    checkPairBrackets(expr)

    expr = calcMultipleBracketExpr(expr)

    return parseFloat(expr)
}

module.exports = {
    expressionCalculator
}