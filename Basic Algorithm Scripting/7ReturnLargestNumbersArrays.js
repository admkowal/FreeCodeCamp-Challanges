function largestOfFour(arr) {
    "use strict";
    var i = 0;
    
    for (i = 0; i < arr.length; i++) {
        var maxNumber = Math.max.apply(null, arr[i]);
        arr[i] = maxNumber;
    }
    return arr;
}