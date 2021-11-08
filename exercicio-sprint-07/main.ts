/* ======= FUNCTIONAL ======== */

class GetArrayFunctional {
    private _receivedArray: number[];
    constructor(receivedArray : number[]) {
        this._receivedArray = receivedArray;
    };

    private checkIfNumeric() : boolean | void {
        for(let index of this._receivedArray) {
            if(isNaN(this._receivedArray[index])) {
                return false;
            };
            return true;
        };


    };

    public getMinMaxAverage() : number[] {
        if(this.checkIfNumeric()) {
            return [
                Math.max(...this._receivedArray), 
                Math.min(...this._receivedArray), 
                this._receivedArray.reduce(((primaryNumber, next) => primaryNumber + next)) / this._receivedArray.length
            ]
        };

        return [];
    };

};

const list : GetArrayFunctional = new GetArrayFunctional([1, 244, 6, 7, 2]);

console.log(list.getMinMaxAverage());


/* ======= IMPERATIVE ======== */

class GetArrayImperative {
    private _paramsArray : number[];
    private maximum: number;
    private minimum: number;
    constructor(paramsArray : number[]) {
        this._paramsArray = paramsArray;
        this.maximum = this._paramsArray[0];
        this.minimum = this._paramsArray[0];
    };

    private checkIfIsNumeric() : boolean | void {
        for(let index in this._paramsArray) {
            if(isNaN(this._paramsArray[index])) {
                return true;
            };
            return true;
      
        };
    };

    public impGetMaxMinAverage() : number[] {
        let accumulated : number = 0;
        if(this.checkIfIsNumeric()) {           
            for(let index of this._paramsArray) {
               accumulated += index;

                if(index < this.minimum) {
                    this.minimum = index;
                } else if(index > this.maximum) {
                    this.maximum = index;
                }else {
                    index++;
                };                
            };

        };
        return [this.maximum, this.minimum, accumulated / this._paramsArray.length]
    };

};

const listImperative : GetArrayImperative = new GetArrayImperative([10, 4, 5, 65, 7, 123])

console.log(listImperative.impGetMaxMinAverage());

