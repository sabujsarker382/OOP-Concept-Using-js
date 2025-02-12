var createCounter = function(a) {
    console.log(a)
    function antherFunction(b){
        const s=b;
        console.log(s);
      
       console.log('Sum:',a+b);
    }
   return antherFunction;
};
createCounter(12)(34);
