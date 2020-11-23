function myBind(context, ...args) {
    let that = this;
    return function() {
        return that.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    }
}