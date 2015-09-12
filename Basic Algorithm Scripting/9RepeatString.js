function repeat(str, num) {
    "use strict";
    if (num < 0) {
        str = "";
        return str;
    } else {
        str = str.repeat(num);
        return str;
    }
}