function mutation(arr) {
    str1 = arr[0];
    str2 = arr[1];
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    function stringToArray(str) {
        var arr = [];
        var x = 0;
    
        for (x = 0; x < str.length; x++) {
            arr[x] = str.charAt(x);    
        }
        return arr;
    }

    arr1 = stringToArray(str1);
    arr2 = stringToArray(str2);
    
    var i = 0;
    var check = 0;
    
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) === -1) {
            return false;
        } else {
            check = 1;
        }
    }
    if (check === 1) {
        return true;
    } else {
        return false;
    }
}