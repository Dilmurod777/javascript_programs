const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value == undefined) {
            this.chain.push(null);
        } else {
            this.chain.push(value);
        }
        return this;
    },
    removeLink(position) {
        if (position != undefined && parseInt(position) == position && position < this.getLength() && position > 0 && position % 1 == 0) {
            this.chain.splice(position - 1, 1)
            return this;

        } else {
            this.chain = []
            throw Error;
        }
    },
    reverseChain() {
        this.chain.reverse()
        return this;
    },
    finishChain() {
        var result = '';

        for (var index in this.chain) {
            if (index == 0) {
                result += '( ' + this.chain[index] + ' )'
            } else {
                result += '~~( ' + this.chain[index] + ' )'
            }
        }
        this.chain = [];
        return result;
    }
};

module.exports = chainMaker;