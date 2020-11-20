function GetNumberOfK(data, k)
{
    // write code here
    if(data.indexOf(k) === -1) return 0;
    return data.lastIndexOf(k) - data.indexOf(k) + 1;
}