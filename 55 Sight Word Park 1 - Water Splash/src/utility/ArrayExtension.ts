interface Array<T> {
    distinct(): T[];
    equals(array): boolean;
}

Array.prototype.distinct = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(arr.indexOf(this[i]) < 0) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

interface ArrayConstructor {
    range: (start: number, length: number) => number[];
}

Array.range = (start: number, length) => Array.from({length: length}, (v, k) => k + start);