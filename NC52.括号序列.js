/**
  * 
  * @param s string字符串 
  * @return bool布尔型
  */
 function isValid( s ) {
    // write code here
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i])
        }
        else{
            if(stack.length == 0){
                return false;
            }
            let tmp = stack.pop();
            if((tmp == '(' && s[i] != ')') || (tmp == '{' && s[i] != '}') || (tmp == '[' && s[i] != ']')){
                return false;
            }
        }
    }
    return stack.length == 0;
}

module.exports = {
    isValid : isValid
};