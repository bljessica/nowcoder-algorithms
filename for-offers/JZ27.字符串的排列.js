function Permutation(str)
{
    // write code here
    if(str.length === 0) return [];
    if(str.length === 1) return [str[0]];
    let res = [];
    let map = {};//记录每个字符是否处理过
    for(let i = 0; i < str.length; i++) {
        let c = str[i];
        if(!map[c]) {
            let otherStr = str.slice(0, i) + str.slice(i + 1);
            let tmpRes = Permutation(otherStr);
            for(let s of tmpRes) {
                res.push(c + s);
            }
            map[c] = true;
        }
    }
    res.sort();
    return res;
}
module.exports = {
    Permutation : Permutation
};