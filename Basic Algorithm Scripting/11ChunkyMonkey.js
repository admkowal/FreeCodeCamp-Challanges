function chunk(arr, size) {
    "use strict";
    var arrSmall = [];
    var arrBig = [];
    var x = 0;
    
    for (x = 0; x <= arr.length; x++) {
        if (arrSmall.length === size) {
            arrBig.push(arrSmall);
            arrSmall = [];
            arrSmall.push(arr[x]);
        } else if (arrSmall.length < size) {
            if (x === arr.length) {
                arrBig.push(arrSmall);
            } else {
                arrSmall.push(arr[x]);
            }
        }
    }
   
    return arrBig;
}