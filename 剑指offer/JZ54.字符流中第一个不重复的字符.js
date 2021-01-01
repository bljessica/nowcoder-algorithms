let str;
function Init()
{
    // write code here
    str = '';
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    str += ch;
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) 
            return str[i];
    }
    return '#';
}

module.exports = {
	Init : Init,
    Insert : Insert,
    FirstAppearingOnce: FirstAppearingOnce
};