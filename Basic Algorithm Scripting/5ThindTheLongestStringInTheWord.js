function findLongestWord(str) {
    "use strict";
    str = str.split(" ");
    var i = 0;
    var biggest = 0;
    
    for (i = 0; i < str.length; i++) {
        if (str[i].length > biggest) {
            biggest = str[i].length;
        }
    }
    return biggest;
}