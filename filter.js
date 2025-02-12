
var filter = function(arr, fn) {
    let filteredArray=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
var  res=filter([0,9,33,44,55],function(val){
return val>10;
})
console.log(res);