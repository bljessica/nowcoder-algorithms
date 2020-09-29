/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
function LRU( operators ,  k ) {
    // write code here
    let res = [];//结果
    let map = new Map();//map是有序的，最后一个极为最近使用，第一个即为最少使用
    for(let item of operators) {
        let [opt, key, value] = item;
        //set
        if(opt === 1) {
            if(map.size === k) {
                map.delete(map.keys().next().value);
                if(map.has(key)) {
                    map.delete(key);
                }
            }
            else {
                if(map.has(key)) {
                    map.delete(key);
                }
            }
            map.set(key, value);
        }
        //get
        else if(opt === 2) {
            if(map.has(key)) {
                let value = map.get(key);
                res.push(value);
                map.delete(key);
                map.set(key, value);
            }
            else {
                res.push(-1);
            }
        }
    }
    return res;
}

module.exports = {
    LRU : LRU
};