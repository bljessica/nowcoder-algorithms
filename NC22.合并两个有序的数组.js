/**
 * 
 * @param A int整型一维数组 
 * @param B int整型一维数组 
 * @return void
 */
function merge( A, m, B, n ) {
    // write code here
    let index = m + n - 1, i = m - 1, j = n - 1;
    while(i >=0 && j >= 0) {
        if(A[i] >= B[j]) {
            A[index--] = A[i--];
        }
        else {
            A[index--] = B[j--];
        }
    }
    if(j >= 0) {
        for(let k = 0; k <= j; k++) {
            A[k] = B[k];
        }
    }
    return A;
}

module.exports = {
    merge : merge
};