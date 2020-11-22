function quickSort(arr, left, right) {
    function partition(left, right) {
        let pivot = left;
        let idx = pivot + 1;
        for(let i = idx; i <= right; i++) {
            if(arr[i] < arr[pivot]) {
                swap(arr, i, idx);
                idx++;
            }
        }
        swap(arr, idx - 1, pivot);
        return idx - 1;
    }
    if(left < right) {
        let partitionIdx = partition(left, right);
        quickSort(arr, left, partitionIdx - 1);
        quickSort(arr, partitionIdx + 1, right);
    }
    return arr;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4, 7, 11, 2, 3, 0, 98, 111, 101];
console.log(quickSort(arr, 0, arr.length - 1))