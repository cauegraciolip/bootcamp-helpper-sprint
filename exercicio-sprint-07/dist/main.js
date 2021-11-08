"use strict";
/* ======= FUNCTIONAL ======== */
class GetArrayFunctional {
    constructor(receivedArray) {
        this._receivedArray = receivedArray;
    }
    ;
    checkIfNumeric() {
        for (let index of this._receivedArray) {
            if (isNaN(this._receivedArray[index])) {
                return false;
            }
            ;
            return true;
        }
        ;
    }
    ;
    getMinMaxAverage() {
        if (this.checkIfNumeric()) {
            return [
                Math.max(...this._receivedArray),
                Math.min(...this._receivedArray),
                this._receivedArray.reduce(((primaryNumber, next) => primaryNumber + next)) / this._receivedArray.length
            ];
        }
        ;
        return [];
    }
    ;
}
;
const list = new GetArrayFunctional([1, 244, 6, 7, 2]);
console.log(list.getMinMaxAverage());
/* ======= IMPERATIVE ======== */
class GetArrayImperative {
    constructor(paramsArray) {
        this._paramsArray = paramsArray;
        this.maximum = this._paramsArray[0];
        this.minimum = this._paramsArray[0];
    }
    ;
    checkIfIsNumeric() {
        for (let index in this._paramsArray) {
            if (isNaN(this._paramsArray[index])) {
                return true;
            }
            ;
            return true;
        }
        ;
    }
    ;
    impGetMaxMinAverage() {
        let accumulated = 0;
        if (this.checkIfIsNumeric()) {
            for (let index of this._paramsArray) {
                accumulated += index;
                if (index < this.minimum) {
                    this.minimum = index;
                }
                else if (index > this.maximum) {
                    this.maximum = index;
                }
                else {
                    index++;
                }
                ;
            }
            ;
        }
        ;
        return [this.maximum, this.minimum, accumulated / this._paramsArray.length];
    }
    ;
}
;
const listImperative = new GetArrayImperative([10, 4, 5, 65, 7, 123]);
console.log(listImperative.impGetMaxMinAverage());
