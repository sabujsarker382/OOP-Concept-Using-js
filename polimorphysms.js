// Base class
class PaymentMethod {
    constructor(name) {
        this.name = name;
    }
    // Abstract method to be overridden by subclasses
    processPayment(amount) {
        throw new Error("processPayment() must be implemented in the subclass.");
    }
}

// Subclass: Credit Card Payment
class CreditCard extends PaymentMethod {
    constructor(cardNumber, cardHolder) {
        super('CreditCard');
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
    }

    processPayment(amount) {
        console.log(`Processing ${amount} USD using Credit Card.`);
        console.log(`Card Holder: ${this.cardHolder}`);
        console.log(`Card Number: ${this.cardNumber.slice(-4).padStart(this.cardNumber.length, '*')}`);
        return `Payment of ${amount} USD completed using Credit Card.`;
    }
}

// Subclass: PayPal Payment
class PayPal extends PaymentMethod {
    constructor(email) {
        super('PayPal');
        this.email = email;
    }

    processPayment(amount) {
        console.log(`Processing ${amount} USD using PayPal.`);
        console.log(`PayPal Email: ${this.email}`);
        return `Payment of ${amount} USD completed using PayPal.`;
    }
}

// Subclass: Crypto Payment
class Crypto extends PaymentMethod {
    constructor(walletAddress) {
        super('Crypto');
        this.walletAddress = walletAddress;
    }

    processPayment(amount) {
        console.log(`Processing ${amount} USD using Crypto.`);
        console.log(`Wallet Address: ${this.walletAddress.slice(0, 6)}...${this.walletAddress.slice(-6)}`);
        return `Payment of ${amount} USD completed using Crypto.`;
    }
}

// Usage
const payments = [
    new CreditCard('1234567812345678', 'John Doe'),
    new PayPal('johndoe@example.com'),
    new Crypto('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')
];

payments.forEach(paymentMethod => {
    console.log('---------------------------');
    console.log(paymentMethod.processPayment(100));
});
