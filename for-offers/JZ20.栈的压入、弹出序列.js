function IsPopOrder(pushV, popV)
{
    // write code here
    if(pushV.length == 0 || popV.length == 0 || pushV.length !== popV.length) return false;
    let s = [];
    while(popV.length > 0) {
        let num = popV.shift(); //检查第一个
        //栈中是否有此元素
        if(s.indexOf(num) === -1) { //没有
            if(!pushV.includes(num)) return false;
            while(s[s.length - 1] !== num) {
                s.push(pushV.shift());
            }
            s.pop();
        }
        else { //有
            if(s[s.length - 1] !== num) return false;
            else {
                s.pop();
            }
        }
    }
    return s.length === 0;
}