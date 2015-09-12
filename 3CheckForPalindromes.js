function palindrome(str) {
    "use strict";
    var re = /(\W+)/g;
    var check = 0;
    
    function trim(str) {
        str = str.replace(re, "");
        str = str.toLowerCase();
        return str;
    }
    str = trim(str);

    for (i = 0; i <= str.length - 1; i++) { 
        if (str.charAt(i) === str.charAt(str.length - i - 1)) {
            check = 1;
        } else {
            return false;
        }
    }   

    if (check === 1) {
        return true;
    } else {
        return false;
    }
