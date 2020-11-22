function cutRope(number)
{
    // write code here
    if(number == 2) return 1;
    if(number === 3) return 2;
    let tmp = Math.floor(number / 3);
    if(number % 3 === 0) return BigInt(Math.pow(3, tmp)).toString();
    if(number % 3 === 1) return BigInt(Math.pow(3, (tmp - 1)) * 4).toString();
    if(number % 3 === 2) return BigInt(Math.pow(3, tmp) * 2).toString();
}
module.exports = {
    cutRope : cutRope
};