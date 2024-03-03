// BankAccount class
class BankAccount {
    constructor(accountNumber, ownerName, balance, interestRate = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        this.updateBalanceDisplay();
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.updateBalanceDisplay();
        } else {
            console.log("Insufficient funds");
        }
    }
    checkBalance() {
        console.log(
            `Account Number: ${this.accountNumber}, Balance: $${this.balance}`
        );
    }
    monthlyInterest() {
        const interest = (this.balance * this.interestRate) / 100;
        this.balance -= interest;
        this.updateBalanceDisplay();
    }
    updateBalanceDisplay() {
        document.getElementById(
            `balance${this.accountNumber}`
        ).textContent = `Balance: $${this.balance}`;
    }
}

// Create bank accounts
const savingsAccount = new BankAccount(1, "John Doe", 1000, 2);
const currentAccount = new BankAccount(2, "Jane Doe", 2000, 50);

// Wire up buttons to call methods on bank accounts
document.getElementById("deposit1").addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter amount to deposit:"));
    savingsAccount.deposit(amount);
});
document.getElementById("withdraw1").addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter amount to withdraw:"));
    savingsAccount.withdraw(amount);
});
document.getElementById("check-balance1").addEventListener("click", () => {
    savingsAccount.checkBalance();
});
document.getElementById("monthly-interest1").addEventListener("click", () => {
    savingsAccount.monthlyInterest();
});