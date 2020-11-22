function insertSort(arr) {
    let len = arr.length;
    for(let i = 1; i < len; i++) {
        let cur = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > cur) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
}

let arr = [4, 7, 11, 2, 3, 0, 98, 111, 101];
insertSort(arr);
console.log(arr)