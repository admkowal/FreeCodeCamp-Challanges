function bouncer(arr) {
    
    function trashIt(value) {
        if (Boolean(value) === true) {
            return true;
        } else {
            return false;
        }
    }
    
    arr = arr.filter(trashIt);
    
    return arr;
}