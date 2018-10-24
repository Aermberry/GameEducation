// TypeScript file
interface Array<T> {
    /** 混洗 */
    shuffle(): void;
    all(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): boolean;
    any(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): boolean;
}

Array.prototype.shuffle = function(): void 
{
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

Array.prototype.all = function<T>(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): boolean
{
    return this.filter(callbackfn, this).length == this.length;
}

Array.prototype.any = function<T>(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): boolean
{
    return this.filter(callbackfn, this).length > 0;
}