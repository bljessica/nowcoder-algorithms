function shellSort(arr) {
    let len = arr.length;
    for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for(let i = gap; i < len; i++) {
            let cur = arr[i];
            let j = i - gap;
            while(j >= 0 && arr[j] > cur) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = cur;
        }
    }
}

let arr = [4, 7, 11, 2, 3, 0, 98, 111, 101];
shellSort(arr);
console.log(arr)