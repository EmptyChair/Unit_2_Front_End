// HOMEWORK

/* 
    Необходимо создать объект bankAccount (дебетовая карта),
    представляющий собой банковский счёт со следующими свойствами:

    1. accountNumber: '123456789';
    2. accountHolderName: 'Alice';
    3. balance: 0;
    4. deposit(sum) - для описания действия по добавлению суммы на баланс счёта;
    5. withdraw(sum) - для описания действия по списанию суммы с баланса счёта;
    6. checkBalance() - для проверки баланса.
*/

console.log("=======Using the most realistic account=======");
console.log("=======It can't dip below 0=======");
console.log("=======It doesn't accept deposits below 5 and above 10.000 EUR=======");
console.log("=======It doesn't accept withdrawal larger than 5000=======");
const realisticBankAccount = {
    accountNumber: '123456789',
    accountHolderName: 'Alice',   
    balance: 0,
    
    deposit: (sum) => {
        (sum>=5 && sum<=10000) 
        ? realisticBankAccount.balance += sum 
        : realisticBankAccount.sumWarning(sum)
    }, 

    sumWarning: (x) => {
        (x<5) 
        ? alert('The sum you are offering ('+x+' Euros) is too small! Get richer, '+realisticBankAccount.accountHolderName+'!') 
        : alert("The sum you are offering ("+x+" Euros) is too big to be processed without a manager. Please contact one of our colleagues at the desk.")
    },  

    checkBalance: () => { 
        console.log("Current Balance of "+realisticBankAccount.accountHolderName+"´s account equals "+realisticBankAccount.balance)
    },

    withdraw: (sum) => {
        (realisticBankAccount.balance>=sum && sum<=5000 && sum>0) 
        ? realisticBankAccount.balance -= sum 
        : realisticBankAccount.withdrawalAlert(sum)       
        //this function doesn't return anything, it's like a void function 
    },

    withdrawalAlert: (x) => {
        if (x<=0) {
            alert(realisticBankAccount.accountHolderName+", you can't withdraw zero or negative sums.")    
        }
        else if (x>5000) {
            alert(realisticBankAccount.accountHolderName+", this sum is too great to be withdrawn without your account manager's approval. The limit is 5000 EUR.")
        } else {
            alert(realisticBankAccount.accountHolderName+", you only have "+realisticBankAccount.balance+" Euros to your name.")
        }            
    }    
};

console.log("=======Adding acceptable amounts to realistic account=======");
realisticBankAccount.checkBalance();
realisticBankAccount.deposit(20);
realisticBankAccount.checkBalance();
realisticBankAccount.deposit(5);
realisticBankAccount.checkBalance();
realisticBankAccount.deposit(10000);
realisticBankAccount.checkBalance();
console.log("=======Adding unacceptable amounts to realistic account=======");
realisticBankAccount.deposit(4);
realisticBankAccount.checkBalance();
realisticBankAccount.deposit(10000.05);
realisticBankAccount.checkBalance();
console.log("=======Withdrawing acceptable amounts from a realistic account=======");
realisticBankAccount.withdraw(40);
realisticBankAccount.checkBalance();
console.log("=======Withdrawing unacceptable amounts from a realistic account=======");
realisticBankAccount.withdraw(-3);
realisticBankAccount.checkBalance();
realisticBankAccount.withdraw(5000.05);
realisticBankAccount.checkBalance();
console.log("=======Withdrawing too much from a realistic account=======");
realisticBankAccount.withdraw(2000);
realisticBankAccount.checkBalance();
realisticBankAccount.withdraw(2000);
realisticBankAccount.checkBalance();
realisticBankAccount.withdraw(2000);
realisticBankAccount.checkBalance();
realisticBankAccount.withdraw(2000);
realisticBankAccount.checkBalance();
realisticBankAccount.withdraw(2000);
realisticBankAccount.checkBalance();