class Encaptulation{
    #balance;
    constructor(accounHolder,intialDp=0){
        this.accounHolder=accounHolder;
        this.#balance=intialDp
    }
    get holder(){
        console.log(`Account holder ${this.accounHolder} has ${this.#balance} taka`);
    }
    get balance(){
        console.log(`${this.#balance}`)
    }

}
const akash=new Encaptulation("Akash Sarker",2500);
akash.holder;
akash.balance
console.log(`${akash.intialDp}`)
