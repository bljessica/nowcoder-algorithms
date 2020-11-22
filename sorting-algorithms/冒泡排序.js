function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = len - 1; j > 0; j--) {
            if(arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
}

let arr = [4, 7, 11, 2, 3, 0, 98, 111, 101];
bubbleSort(arr);
console.log(arr)