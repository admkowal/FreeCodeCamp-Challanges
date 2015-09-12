function destroyer(arr) {
    var arrNew = arguments[0];
    var x = 0;
    var y = 0;
    
    for (x = 1; x < arguments.length; x++) {
        for (y = 0; y < arrNew.length; y++) {
            if (arguments[x] === arrNew[y]) {
                arrNew.splice(y, 1);
            }
        }
    }
    
    return arrNew;
}