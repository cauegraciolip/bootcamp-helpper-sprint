"use strict";
var input = [10, 10, 45, 21, 6, 71, 1, 22, 3];
var maior = input[0];
var menor = input[0];
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var i = input_1[_i];
    if (i < menor) {
        menor = i;
        i++;
    }
    else if (i > maior) {
        maior = i;
        i++;
    }
    else {
        i++;
    }
}
console.log(maior, menor);
