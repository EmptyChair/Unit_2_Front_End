const stock = {
    items: [
        { name: 'milk', price: 6, quantity: 50 },
        { name: 'cheese', price: 30, quantity: 70 },
        { name: 'meat', price: 30, quantity: 40 },
        { name: 'pizza', price: 30, quantity: 110 },
        { name: 'bread', price: 3, quantity: 100 }
    ], // массив товаров
    totalCost: 0, // суммарная стоимость всех товаров CRUD
    addItem(item) { // example of item: { name, price, quantity } 
        // TODO
        const existingItem = this.items.find(e => e.name === item.name);

        if (existingItem) {
            existingItem.quantity += item.quantity;
            // 
        } else {
            this.items.push(item);
        }

        this.updateTotalCost();
    },
    // itemName - наименование товара, itemCount - кол-во удаляемого товара
    removeItem(itemName, itemCount) { 
        // TODO
        const index = this.items.findIndex(e => e.name === itemName);

        if (index !== -1 && itemCount <= this.items[index].quantity) {
            itemCount === this.items[index].quantity ?
                this.items.splice(index, 1) :
                this.items[index].quantity -= itemCount
        } else {
            alert('Данного товара недостаточно на складе');
        }

        this.updateTotalCost();
    },
    updateTotalCost() { // Обновление значения лежащего по ключу totalCost
        // TODO
        // let acc = 0;
        // for (let i = 0; i < this.items.length; i++) {
        //     acc += this.items[i].price * this.items[i].quantity
        // }
        // for (const item of this.items) {
        //     acc += item.price * item.quantity
        // }
        // this.totalCost = acc;

        // Итерирует массив, не меняет оригинал
        this.totalCost = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}

stock.updateTotalCost();
console.log(stock.totalCost);

// const add = document.getElementById('add');
add.onclick = addHandler;

function addHandler() {
    const name = productName.value.trim();
    const price = +productPrice.value.trim();
    const quantity = +productQuantity.value.trim();

    if ( name && price && price > 0 && quantity && quantity > 0 ) {
        stock.addItem({ name, price, quantity });
    }

    productName.value = productPrice.value = productQuantity.value = '';

    productsList.innerHTML = '';
    
    // 1. Перебор элементов массива 
    stock.items.forEach((e, i) => {
        // 2. При каждой итерации создаем HTML Element
        const li = document.createElement('li');
        // 3. Наделяем его текстовым контентом
        li.textContent = `
            Product name: ${e.name},
            Product price: ${e.price},
            Product quantity: ${e.quantity},
        `;
        // 4. Добавляем его в productsList
        productsList.appendChild(li);
    })
}

stats.onclick = statsHandler;

function statsHandler() {
    // Количество позиций товаров
    // Итоговая стоимость всех продуктов
    // Итоговое количество всех продуктов
    // Максимальная цена
    // Средняя цена
    // Минимальная цена

    // [
        // { name: 'milk', price: 6, quantity: 50 },
        // { name: 'cheese', price: 30, quantity: 70 },
        // { name: 'meat', price: 30, quantity: 40 },
        // { name: 'pizza', price: 30, quantity: 110 },
        // { name: 'bread', price: 3, quantity: 100 }
    // ]

    // CRUD - Create Read Update Delete

    const itemsCount = stock.items.length;
    const totalCost = stock.totalCost;
    const totalQuantity = stock.items.reduce((acc, item) => acc + item.quantity, 0);
    // Итерирует элементы массива и меняет их на новое значение
    const arrPrices = stock.items.map(e => e.price);
    const maxPrice = Math.max(...arrPrices);
    const minPrice = Math.min(...arrPrices);
    const avgPrice = arrPrices.reduce((acc, item) => acc + item, 0) / arrPrices.length;

    // Сортировка по цене (в сторону увеличения)
    console.log(stock.items.sort((a, b) => a.price - b.price));
    // Сортировка по кол-ву (в сторону увеличения)
    console.log(stock.items.sort((a, b) => a.quantity - b.quantity));
    // Сортировка по длине кол-ву букв в наименовании товара (в сторону увеличения)
    console.log(stock.items.sort((a, b) => a.name.length - b.name.length));

    console.log(stock.items.sort((a, b) => {
        if (a.price === b.price) {
            return a.quantity - b.quantity
        }
        return a.price - b.price
    }));


    // let max = 0; // -Infinity;
    // let avg = 0;
    // let min = Infinity;
    // let quantity2 = 0;
    // let sumOfPrices = 0;

    // for (const item of stock.items) {
    //     sumOfPrices += item.price;
    //     quantity2 += item.quantity;
    //     if (item.price > max) {
    //         max = item.price;
    //     }
    //     if (item.price < min) {
    //         min = item.price;
    //     }
    // }

    // avg = sumOfPrices / itemsCount;

    statsList.innerHTML = `
        <li>
            <p>Count of items: ${itemsCount}</p>
            <p>Total cost: ${totalCost}</p>
            <p>Total Quantity: ${totalQuantity}</p>
            <p>Min price: ${minPrice}</p>
            <p>Average price: ${avgPrice}</p>
            <p>Max price: ${maxPrice}</p>
        </li>
    `;
}

let countSort = 0;
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            countSort++;
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


const numbers = [1, 9, 2, 8, 3, 7, 4, 6, 5];
bubbleSort(numbers);
console.log(numbers);

console.log(countSort);

//HOMEWORK 1

/*
* дз: Необходимо реализовать 2 действия с помощью новых методов массива:

    У вас есть массив чисел. Необходимо написать программу, которая фильтрует положительные числа, 
    затем удваивает каждое число и возвращает сумму всех положительных чисел после этого преобразования.
    Formula: c X 1,8 + 32
*/

const cTemp = [1, 9.2, -2.5, 8, -3, 7, 4, -6, 5.75,-5,0];
console.log("Celsius values "+cTemp);
const fTemp = cTemp.map(e => 1.8*e+32);
console.log("Fahrenheit values "+fTemp);

//HOMEWORK 2

/*
* дз: Необходимо реализовать 2 действия с помощью новых методов массива:

    У вас есть массив чисел. Необходимо написать программу, которая фильтрует положительные числа, 
    затем удваивает каждое число и возвращает сумму всех положительных чисел после этого преобразования.
*/

const zahlen = [1, 2.5, -2.5, 0, -3];
console.log("Original numbers "+zahlen);
const zahlenT = zahlen.filter(number => number>0).reduce((sum, number) => sum+=2*number,0)
console.log("Transformed numbers by means of filter and reduce "+zahlenT);

const zahlenT2 = zahlen.reduce((sum,number) => ( (number>0) ? sum+=2*number : 0  ), 0)
console.log("Transformed numbers by means of reduce "+zahlenT);






