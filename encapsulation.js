class BankAccount{
    #balance;
    constructor(accountHolder,initialDeposit){
        this.accountHolder=accountHolder;
        this.#balance=initialDeposit;
    }
    getBalance(){
        return `hi ${this.accountHolder} your current balance is : ${this.#balance} BDT` ;
    }
    depositBalance(ammount){
        if(ammount>0){
            this.#balance +=ammount
            console.log(`Your Current banace is ${this.#balance}`);
        }else{
            console.log("Ammount must be greater than 0");
        }

    }
    withdrawBaance(ammount){
        if(ammount>0 && ammount<=this.#balance){
            this.#balance -=ammount;
            console.log(`your current balance is ${this.#balance}`)
        }else{
            console.log("Yodu dont have sufficient baance");
        }
    }
}
const account=new BankAccount('Sabuj Sarker',123000);
console.log(account.getBalance());