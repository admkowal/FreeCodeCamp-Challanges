function factorialize(num) {
    "use strict";
    var i = 0;
    i = num - 1;
    for (i; i > 0; i--) {
        num *= i;
    }
    return num;
}