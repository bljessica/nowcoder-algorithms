function selectSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let minIdx = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = tmp;
    }
}

let arr = [4, 7, 11, 2, 3, 0, 98, 111, 101];
selectSort(arr);
console.log(arr)