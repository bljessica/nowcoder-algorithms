let stack1 = [], stack2 = [];

function pop() {
    if(stack2.length > 0) {
        return stack2.pop();
    }
    while(stack1.length > 0) {
        stack2.push(stack1.pop());
    }
    return stack2.pop();
}

function push(val) {
    stack1.push(val);
}

module.exports = {
    push : push,
    pop : pop
};