const stock = {
    items: [
        { name: 'bread', price: 3, quantity: 100 },
        { name: 'milk', price: 6, quantity: 50 },
        { name: 'cheese', price: 30, quantity: 70 }
    ], // массив товаров
    totalCost: 0, // суммарная стоимость всех товаров
    addItem(item) { // example of item: { name, price, quantity } 
        // TODO
        const existingItem = this.items.find(e => e.name === item.name);

        if (existingItem) {
            existingItem.quantity += item.quantity;
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
    stock.items.forEach(e => {
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

    let itemsCount = stock.items.length;
    let totalCost = stock.totalCost;
    let totalQuantity = stock.items.reduce((acc, item) => acc + item.quantity, 0);
    
    let topPrice = 0; 
    stock.items.forEach(e => {
        (e.price > topPrice)
        ? topPrice = e.price 
        : 1  
    })

    let averagePrice = stock.items.reduce((counter, item) => counter + item.price, 0);;
    averagePrice = averagePrice/itemsCount;

    let minPrice = stock.items[0].price;
    stock.items.forEach(e => {
        (e.price < minPrice)
        ? minPrice = e.price 
        : 1  
    })

    statsList.innerHTML = '';  
    // 1. создаем HTML Element
    const li = document.createElement('li');
    // 2. Наделяем его текстовым контентом
    li.textContent = `
        Number of Products: ${itemsCount},
        Total Price of all the Products in Stock: ${totalCost},
        Total Quantity of all the Products in Stock: ${totalQuantity},
        Highest Product Price: ${topPrice},
        Average Product Price: ${averagePrice},
        Minimal Product Price: ${minPrice}
    `;
    // 3. Добавляем его в statsList
    statsList.appendChild(li);
}

