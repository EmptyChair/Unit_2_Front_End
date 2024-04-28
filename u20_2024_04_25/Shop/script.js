// ARRAY OF GOODS
const stock = {
  // pre-existing array of goods
  items: [
    { name: "milk", price: 6, quantity: 50, isSelected: false },
    { name: "cheese", price: 30, quantity: 70, isSelected: false },
    { name: "meat", price: 30, quantity: 40, isSelected: false },
    { name: "pizza", price: 30, quantity: 110, isSelected: false },
    { name: "bread", price: 3, quantity: 100, isSelected: false },
  ], 

  // cost of all items in stock
  totalCost: 0, 

  // add example of item: { name, price, quantity, isSelected } 
  addItem(item) {  

    const existingItem = this.items.find((e) => e.name === item.name);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    this.updateTotalCost();
  },

  // itemName - name of the good, itemCount - amount to be removed
  removeItem(itemName, itemCount) {
    const index = this.items.findIndex((e) => e.name === itemName);

    if (index !== -1 && itemCount <= this.items[index].quantity) {
      itemCount === this.items[index].quantity
        ? this.items.splice(index, 1)
        : (this.items[index].quantity -= itemCount);
    } else {
      alert("Insufficient items in stock!");
    }

    this.updateTotalCost();
  },

  updateTotalCost() {  
    // iterates along the arrays, but doesn't change it
    this.totalCost = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
};
  
// ADD BUTTON functionality
add.onclick = addHandler;

function addHandler() {
  //make sure all selected elements are un-selected
  //clearSelection();

  //read values
  const name = productName.value.trim();
  const price = +productPrice.value.trim();
  const quantity = +productQuantity.value.trim();

  //add values
  if (name && price && price > 0 && quantity && quantity > 0) {
    stock.addItem({ name, price, quantity, isSelected: false });
  }

  //create a list of elements
  writeList();   
}

function clearSelection() {
  stock.items.forEach((e) => { e.isSelected = false } );
}

function writeList() {
  // 1. Preparation: removing values, crafting list
  productName.value = productPrice.value = productQuantity.value = "";
  productsListSelected.innerHTML = "";
  productsList.innerHTML = "";

  // 2. Start working through the array and sort
  stock.items.sort((a, b) => {
    // if ((b.isSelected-a.isSelected) ===0 ) { //same thing

    if (!(b.isSelected - a.isSelected)) {
      if (a.price === b.price) {        
        return a.quantity - b.quantity;
      }
      return a.price - b.price;
    }
    return b.isSelected-a.isSelected
  }).forEach((e) => {
    // 2.1 Create a List
    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action");
    // 2.1.1 choose background color according to selection status
    if (e.isSelected) {
      li.style.backgroundColor = "grey";
    } else {
      li.style.backgroundColor = "white";
    }

    // 2.2 Create a Checkbox
    const box = document.createElement("input");    
    box.setAttribute("type", "checkbox");
    box.style.width = "50px";
    //bootstrap classes
    //box.classList.add("form-check-input", "mx-2")
    if (box.checked) {
      //Bootstrap class
      li.classList.add("list-group-item-secondary");
    }
    box.onclick = () => {
      e.isSelected = !e.isSelected;
      writeList();
    }

    //My version
    /*
    box.onclick = select;
    function select() {
      if (!e.isSelected) {
        e.isSelected = true;
        li.style.backgroundColor = "grey";
        writeList();
        //this.updateTotalCost();
      } else {
        e.isSelected = false;
        li.style.backgroundColor = "white";
        writeList();
        //this.updateTotalCost();
      }     
    }
    */

    // 2.3 Create a removal button
    const removeButton = document.createElement('button'); 
    removeButton.innerHTML = "X";
    removeButton.classList.add("btn", "btn-danger", "ms-auto");
    removeButton.onclick = remove;
    function remove() {
      alert("Item Removed!");
      stock.removeItem(e.name, e.quantity);
      li.remove();
      this.updateTotalCost();
    }            
    // 2.4 Fill list with text
    li.textContent = `
      Product: ${e.name},
      Price: ${e.price},
      Quantity: ${e.quantity}   
    `;
    // 2.5 Add checkbox to the list      
    li.appendChild(box);
    // 2.6 Add button to the list      
    li.appendChild(removeButton);
    productsList.appendChild(li);


    /* My Version
    // 2.5 Add List to either productsList or productsListSelected

    if (e.isSelected==true) {
      productsListSelected.appendChild(li); 
      //this.updateTotalCost();
    } else {
       productsList.appendChild(li);
      //this.updateTotalCost();
    } 
    */
  });  
}

// STATS BUTTON functionality
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
  const totalQuantity = stock.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  // Итерирует элементы массива и меняет их на новое значение
  const arrPrices = stock.items.map((e) => e.price);
  const maxPrice = Math.max(...arrPrices);
  const minPrice = Math.min(...arrPrices);
  const avgPrice =
    arrPrices.reduce((acc, item) => acc + item, 0) / arrPrices.length;

  // Сортировка по цене (в сторону увеличения)
  console.log(stock.items.sort((a, b) => a.price - b.price));
  // Сортировка по кол-ву (в сторону увеличения)
  console.log(stock.items.sort((a, b) => a.quantity - b.quantity));
  // Сортировка по длине кол-ву букв в наименовании товара (в сторону увеличения)
  console.log(stock.items.sort((a, b) => a.name.length - b.name.length));

  console.log(
    stock.items.sort((a, b) => {
      if (a.price === b.price) {
        return a.quantity - b.quantity;
      }
      return a.price - b.price;
    })
  );

  statsList.innerHTML = `
        <li class="list-group-item list-group-item-action">
            <p>Count of items: ${itemsCount}</p>
            <p>Total cost: ${totalCost}</p>
            <p>Total Quantity: ${totalQuantity}</p>
            <p>Min price: ${minPrice}</p>
            <p>Average price: ${avgPrice}</p>
            <p>Max price: ${maxPrice}</p>
        </li>
    `;
}


  stock.updateTotalCost();
  console.log(stock.totalCost);