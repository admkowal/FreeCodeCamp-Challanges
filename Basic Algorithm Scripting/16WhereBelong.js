function where(arr, num) {
    
    function compareNumbers(a, b) {
        return a - b;    
    }
    
    var sortedArr = arr.sort(compareNumbers);
    var i = 0;
    
    for (i = sortedArr.length - 1; i >= 0; i--) {
        if (num > sortedArr[i]) {
            return i + 1;    
        } else if (num === sortedArr[i]) {
            return i;
        }
    }
    
    return num;
}