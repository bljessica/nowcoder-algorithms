function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence == null || sequence.length === 0) return false;
    function judge(l, r) {
        if(l >= r) return true;
        let root = sequence[r];
        let rightIdx = r;
        //左右分界
        for(let i = l; i < r; i++) {
            if(sequence[i] > root) {
                rightIdx = i;
                break;
            }
        }
        //右边是否出现小于root的值
        for(let i = rightIdx; i < r; i++) {
            if(sequence[i] < root) return false;
        }
        return judge(l, rightIdx - 1) && judge(rightIdx, r - 1)
    }
    return judge(0, sequence.length - 1);
}