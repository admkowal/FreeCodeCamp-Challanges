function end(str, target) {
    "use strict";
    var targetLength = target.length;
    var strCheck = str.substr(-targetLength);
    var i = 0;
    
    for (i = 0; i < strCheck.length; i++) {
        if (strCheck.charAt(i) === target.charAt(i)) {
            if (i === strCheck.length - 1) {
                return true;
            }
        } else {
            return false;
        }
    }
}