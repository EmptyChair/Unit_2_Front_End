console.log(multiply(2, 5));

function multiply(a, b) { // регулярная функция
    return a * b;
}

console.log(multiply(2, 5));


// multiplyArrow(3, 4); ReferenceError (слепая зона)

const multiplyArrow = (a, b) => a * b; // стрелочная функция
const divideArrow = (a,b) => a/b;

multiplyArrow(3, 4);
divideArrow(3,4);

// const multiplyArrow = (a, b) => {
//     return a * b
// };

let arr = ['one', 'two', 'Three', 'eight', 'tHree', 'thrEE', 'six', 'Agamemnon Titanomachius'];

console.log('============ indexOf ============');
let res = arr.indexOf('Three'); // Возвращает индекс элемента или -1, если элемент не найден
console.log(res);
res = arr.indexOf(1); // Возвращает индекс элемента или -1, если элемент не найден
console.log(res);
res = arr.indexOf('Three', 3); // ищет Three с 3ей ячейки - нет потому что оно во второй
console.log(res);

console.log('============ includes ============');
res = arr.includes('two'); // Возвращает true, если искомый элемент есть в массиве и false, если нет
console.log(res);
res = arr.includes('karamba'); // Возвращает true, если искомый элемент есть в массиве и false, если нет
console.log(res);

console.log('============ findIndex ============');
// метод findIndex ищет по массиву.
// тестирует все элементы на свойство (первый аргумент)
// можно тестировать с индекса X (второй аргумент)
// predicate должен возвращать true, когда элемент подходит к искомому
res = arr.findIndex((element, index) => element.length >= 3 && index > 2); 
// element - итерируемый элемент
// index - его индекс
// мы ищем строчку - минимум три символа, начиная с индекса три 
// Возвращает индекс элемента или -1, если элемент не найден
console.log(res);
console.log(arr[res]);

// а теперь с 4й ячейки и длина > 6
res = arr.findIndex((element, index) => element.length > 6 && index > 3); 
console.log(res);
console.log(arr[res]);


res = arr.findIndex(predicateLength3);
// в принципе то же самой, что и предыдущий вариант, но предикат укатан в отдельную функцию 
// и теперь не >= 3, а просто равно
function predicateLength3(e, i) {
    return e.length === 3 && i > 2;
}
console.log(res);
console.log(arr[res]);

// Object
// все - одна строка, только запятые, никаких точек с запятой
// шесть пар ключ-значение, включая 4 параметра и 2 функции
const person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 45,
    address: {
        country: 'USA',
        city: 'NY',
        house: {
            street: 'Roosevelt',
            number: 111,
            liter: 'a',
            apartment: 16
        }
    },
    // даёт имя
    fullName: () => console.log(person.firstName + ' ' + person.lastName),
    example: () => console.log(this) // Ключевое слово this в стрелочной функции ведёт на глобальный объект window!
};

person.example();
person.fullName();

res = Object.keys(person); // Массив ключей объекта person, всегда массив строк!
console.log("Keys of peter parker object");
console.log(res);

res = Object.values(person); // Массив значений объекта person
console.log("Values of peter parker object");
console.log(res);

res = Object.entries(person); // Массив, где каждым элементом является массив из двух элементов: ключ, значение!
console.log("Keys and Values of peter parker object, paired up");
console.log(res);


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

console.log("=======Using basic account=======");
const bankAccount = {
    accountNumber: '123456789',
    accountHolderName: 'Alice',   
    balance: 0,
    deposit: (sum) => bankAccount.balance += sum,
    withdraw: (sum) => bankAccount.balance -= sum,
    checkBalance: () => console.log("Current Balance of "+bankAccount.accountHolderName+"´s account equals "+bankAccount.balance)
};

bankAccount.checkBalance();
bankAccount.deposit(20);
bankAccount.checkBalance();
bankAccount.withdraw(40);
bankAccount.checkBalance();


console.log("=======Using more realistic account=======");
const worseBankAccount = {
    accountNumber: '123456789',
    accountHolderName: 'Alice',   
    balance: 0,
    deposit: (sum) => worseBankAccount.balance += sum,    
    checkBalance: () => console.log("Current Balance of "+worseBankAccount.accountHolderName+"´s account equals "+worseBankAccount.balance),
    withdraw: (sum) => (worseBankAccount.balance>=sum) ? worseBankAccount.balance -= sum : console.log("Alice, your ass is too broke for such withdrawals"),
};

worseBankAccount.checkBalance();
worseBankAccount.deposit(20);
worseBankAccount.checkBalance();
worseBankAccount.withdraw(40);
worseBankAccount.checkBalance();
worseBankAccount.deposit(20);
worseBankAccount.checkBalance();
