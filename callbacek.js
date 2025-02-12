function makeDouble(number){
    return number*2;
}
function processHere(number,number2,call){
    const result=[];
    for(let i=0; i<number.length; i++){
        result.push(call(number[i],number2[i]));
    }
    return result;
}
function addDouble(num1,num2){
    return makeDouble(num1) + makeDouble(num2);
}
const number=[1,2,3,4,5,6];
const number2 =[10,22,33,44,55,33];
const output=processHere(number,number2,addDouble);
console.log(output);
