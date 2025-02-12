var n=1234567986;
function Recusion(n){
    if(n==0)
        return 0;
    return (n%10 + Recusion(parseInt(n/10)))
}
var result=Recusion(n);
console.log(result);