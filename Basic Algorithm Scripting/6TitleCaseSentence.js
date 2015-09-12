function titleCase(str) {
    "use strict";
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.substr(1);
    var re = /\s\w/g;
    function firstBig(match) {
        return match.toUpperCase();
    }
    return str.replace(re, firstBig);
}