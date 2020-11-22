function mergeSort(arr) {
    let len = arr.length;
    if(len < 2) return arr;
    function merge(left, right) {
        let res = [];
        let i = j = 0;
        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]) res.push(left[i++]);
            else res.push(right[j++]);
        }
        if(i < left.length) res = res.concat(left.slice(i));
        if(j < right.length) res = res.concat(right.slice(j));
        return res;
    }
    let mid = Math.floor(len / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}


let arr = [4, 7, 11, 2, 3, 0, 98, 111, 101];
console.log(mergeSort(arr));