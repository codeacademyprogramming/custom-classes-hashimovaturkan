// TASK - 1 : IMPLEMENT CUSTOMMATH CLASS 
class CustomMath{
    constructor(number){
        this.number=number;  
    }
    add(addNumber) {
        this.number=this.number+addNumber;
        return this;
    }
    minus(minusNumber){
        this.number=this.number-minusNumber;
        return this;
    }
    multiply(multiNumber){
        this.number=this.number*multiNumber;
        return this;
    }
    divide(divideNumber){
        this.number=this.number/divideNumber;
        return this.number;
    }
}


const customMath=new CustomMath(5);
console.log(customMath.add(10).minus(5).multiply(3).divide(2));


/* TASK - 2 : IMPLEMENT SOMETHING THAT I CAN DO SOME OPERATIONS ON NUMBERS */
Number.prototype.add = function (num) {
    return num + this;
}
console.log((1).add(5));

/* TASK - 3 : [].customFilter, [].customMap,...  */
//Concat
Array.prototype.customConcat = function (array) {
    const arr=[];
    for(let i=0; i<this.length;i++){
        arr.push(this[i]);
    }
    for(let i=0; i<array.length;i++){
        arr.push(array[i]);
    }
    return arr;
}

const a=[1,2,3].customConcat([1,2,3]);
console.log(a);

//Filter
Array.prototype.customFilter = function (func) {
    const newArr=[];
    for(let i=0;i<this.length;i++){
        if(func(this[i],i,this)) 
        newArr.push(this[i]);
    }
    return newArr;
}

console.log([1,2,3,4].customFilter(value=>value>2));

//Map

Array.prototype.customMap = function (func) {
    const newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(func(this[i],i,this));
    }
    return newArr;
}

console.log([1,2,3,4].customMap(value=>value*2));

//ForEach
Array.prototype.customForEach = function (func) {
    for(let i=0;i<this.length;i++){
        console.log(this[i]);
    }
    
}

console.log([1,2,3].customForEach(value=>console.log(value)));
//sondaki undefined????

//Some
Array.prototype.customSome = function (func) {
    for(let i=0;i<this.length;i++){
        if(func(this[i],i,this))
        return true;
    }
    return false;
}

console.log([1,2,3].customSome(value=>value>12));

//Every
Array.prototype.customEvery = function (func) {
    for(let i=0;i<this.length;i++){
        if(!(func(this[i],i,this)))
        return false;
    }
    return true;
}

console.log([1,2,3].customEvery(value=>value>0));



