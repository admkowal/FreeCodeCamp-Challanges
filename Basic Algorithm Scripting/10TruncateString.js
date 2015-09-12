function truncate(str, num) {
    "use strict";
    if (str.length <= num) {
        return str;    
    } else {
        return str.slice(0, num - 3) + "...";    
    }
}