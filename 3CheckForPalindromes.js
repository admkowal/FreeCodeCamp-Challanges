function palindrome(str) {
    "use strict";
    var re = /(\W+)/g;
    var re1 = /(\_)/g;
    var check = 0;
    var i = 0;
    
    function trim(str) {
        str = str.replace(re, "");
        str = str.replace(re1, "");
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
}

palindrome("eye");
