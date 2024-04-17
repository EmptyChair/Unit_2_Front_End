// create empty array of bank accounts
const bank = [];

// bank account class
const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,

  deposit: (sum) => {
    (sum>=5 && sum<=10000) 
    ? this.balance += sum 
    : this.depositAlert(sum)
  }, 

  depositAlert: (x) => {
    (x<5) 
    ? alert('The sum you are offering ('+x+' Euros) is too small! Get richer, '+this.accountHolderName+'!') 
    : alert("The sum you are offering ("+x+" Euros) is too big to be processed without a manager. Please contact one of our colleagues at the desk.")
  },  

  withdraw: (sum) => {
    (this.balance>=sum && sum<=5000 && sum>0) 
    ? this.balance -= sum 
    : this.withdrawalAlert(sum)       
  },

  withdrawalAlert: (x) => {
      if (x<=0) {
          alert(this.accountHolderName+", you can't withdraw zero or negative sums.")    
      }
      else if (x>5000) {
          alert(this.accountHolderName+", this sum is too great to be withdrawn without your account manager's approval. The limit is 5000 EUR.")
      } else {
          alert(this.accountHolderName+", you only have "+this.balance+" Euros to your name.")
      }            
  },    

  checkBalance() {
    alert(this.balance + "€");
  },
};

// Inputs stores in cost - why not vars? Because it's a REFERENCE to the element. REFERENCE WONT CHANGE
const nameInput = document.getElementById("name");
const accountIdInput = document.getElementById("accountId");
const amountInput = document.getElementById("amount");

// constant which stores account list
const accountsListOl = document.getElementById("accountsList");

const withdrawBtn = document.getElementById("withdraw");
const depositBtn = document.getElementById("deposit");

const date = new Date();
console.log(date.getTime()); // кол-во миллисекунд, которое прошло с 1 января 1970 года

// 1713175494805 / 1000 ms / 60 s / 60 m / 24 hrs / 365.25 days = the amount fo years which have passed

function createAccount() {
  if (nameInput.value.trim()) {
    const date = new Date();
    bank.push({
      ...bankAccount,
      accountNumber: date.getTime() + "",
      accountHolderName: nameInput.value.trim(),
    });
    nameInput.value = "";
    console.log(bank);
  }
  //empty the values
  accountIdInput.value = amountInput.value = amountInput.value = "";
}

function showAccounts() {
  accountsListOl.innerHTML = "";
  bank.forEach((account) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <p>Username: ${account.accountHolderName}</p>
            <p>Account Number: ${account.accountNumber}</p>
            <p>Balance: ${account.balance}</p>
        `;
    accountsListOl.appendChild(li);
  });
  //empty the values
  accountIdInput.value = amountInput.value = amountInput.value = "";
}

// HOMEWORK

withdrawBtn.onclick = function () {
  //checking whether we actually have something for account ID
  if (accountIdInput.value.trim().length == 0) {
    alert("No account ID provided");
    //empty the values and jump out
    accountIdInput.value = amountInput.value = nameInput.value = "";
    return;  
  }
  //checking whether we actually have something for sum
  if (amountInput.value.trim().length == 0) {
    alert("No amount of money provided");
    //empty the values and jump out
    accountIdInput.value = amountInput.value = nameInput.value = "";
    return;  
  }

  //If we lasted so far - let's find the account with this ID
  var index = findAccountIndexByID(accountIdInput.value.trim());

  // if the account with Id was actually found
  if (index !== -1) {
    var cash = +(amountInput.value.trim());
    bank[index].withdraw(cash);
    bank[index].checkBalance();
  } else {
    alert("Account not found!");
  }
  //empty the values
  accountIdInput.value = amountInput.value = nameInput.value = "";
};


depositBtn.onclick = function () {
  //checking whether we actually have something for account ID
  if (accountIdInput.value.trim().length == 0) {
    alert("No account ID provided");
    //empty the values and jump out
    accountIdInput.value = amountInput.value = nameInput.value = "";
    return;  
  }
  //checking whether we actually have something for sum
  if (amountInput.value.trim().length == 0) {
    alert("No amount of money provided");
    //empty the values and jump out
    accountIdInput.value = amountInput.value = nameInput.value = "";
    return;  
  }

  //If we lasted so far - let's find the account with this ID
  var index = findAccountIndexByID(accountIdInput.value.trim());

  // if the account with Id was actually found
  if (index !== -1) {
    var cash = +(amountInput.value.trim());
    bank[index].deposit(cash);
    bank[index].checkBalance();
  } else {
    alert("Account not found!");
  }
  //empty the values
  accountIdInput.value = amountInput.value = nameInput.value = "";
};

function findAccountIndexByID(ID) {
  // work through the entire Bank, find either index or return -1 if there is no index
  for (i = 0; i < bank.length; i++) {    
    if (ID === bank[i].accountNumber) {
      return i;
    }
  }
  return -1;
}
