function printMatrix(matrix)
{
    // write code here
    if(matrix.length === 0 || matrix[0].length === 0) return [];
    let res = [];
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    while(top <= bottom && left <= right) {
        //右
        for(let i = left; i <= right; i++) res.push(matrix[top][i]);
        top++;
        //下
        for(let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;
        //左
        if(top <= bottom) { //!
            for(let i = right; i >= left; i--) res.push(matrix[bottom][i]);
            bottom--;
        }
        //上
        if(left <= right) { //!
            for(let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }
    return res;
}