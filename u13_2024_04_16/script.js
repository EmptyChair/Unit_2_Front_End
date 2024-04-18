// Stock
const stock = {
    items: [
        { name: 'bread', price: 3, quantity: 100 },
        { name: 'milk', price: 6, quantity: 50 },
        { name: 'cheese', price: 30, quantity: 70 }
    ],
    totalCost: 0,

    addItem(item) { 
        let index = this.findItemByName(item.name);         
        if (index == -1) {
            console.log("Item not found!");
            this.items.push(item);
        } else {
            console.log("Item already here!");
            this.items[index].quantity += item.quantity;
        }        
        //make sure the total cost was updated
        this.updateTotalCost();      
    },

    // either remove item completely, or reduce the number accordingly
    removeItem(itemName, count) { // example: ice cream, 10 items
        let index = this.findItemByName(itemName);  
        //if no such item 
        if (index == -1) {
            alert("Item not found!");
            return;
        } 
        // if demand to remove more of X than there is of X
        else if (this.items[index].quantity<count) {
            alert("No, we can't remove more items than we have!");
            return;
        } 
        // if there is more of X than demanded to be removed- reduce the number
        else if (this.items[index].quantity>count) {
            //reduce number
            this.items[index].quantity -= count;
            console.log(count+" of "+itemName+" removed from stock.");
        } 
        // the only case left is that we remove all of X
        else {
            //remove the element to hell
            this.items.splice(index,1);
            console.log(itemName+" removed from stock.");
        }   
        //make sure the total cost was updated
        this.updateTotalCost();
    },

    // re-calculate total cost of the goods
    updateTotalCost() {
        let cost = 0;
        //updates cost of all items in queque
        for (i=0; i<this.items.length; i++) {
            cost += this.items[i].price*this.items[i].quantity;
        }
        this.totalCost = cost;
    },

    // either find item with that name and return index i or return -1 if not present
    findItemByName(itemName) {        
        for (i= 0; i<this.items.length;i++){
            if (itemName === this.items[i].name) {
                console.log("found the item already in the list")
                return i;                
            }
        }
        console.log("didn't fint the item already in the list")
        return -1;
    }
}

// inputs
//const productName = document.getElementById("productName").value.trim();
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");

//buttons
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const statsBtn = document.getElementById("stats");

//Lists
const productsList = document.getElementById("productsList");
const statsList = document.getElementById("statsList");

function showProducts() {
    productsList.innerHTML = "";
    stock.items.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
              <p>Product: ${item.name}</p>
              <p>Price: ${item.price} EUR</p>
              <p>Quantity: ${item.quantity}</p>
          `;
          productsList.appendChild(li);
    });
    stock.updateTotalCost();
    const element = document.createElement("element");
    element.innerHTML = `
            <br />
            <p>Total Cost of Our Wares: ${stock.totalCost} EUR</p>
        `;
    productsList.appendChild(element);
    //empty the values
    productName.value = productPrice.value = productQuantity.value = "";
}

function removeItem() {
    //only need name and amount
    if (productName.value.trim().length>0 && productQuantity.value.trim().length>0) {
        if (productQuantity.value.trim()<1) {
            alert("Can't remove less than 1 of any product!")
            return;
        }    
        stock.removeItem(productName.value.trim(), productQuantity.value.trim());
    } else {
        alert("Product name and quantity needed!");
    }  
    showProducts(); 
    //empty the values
    productName.value = productPrice.value = productQuantity.value = "";
}

function addItem() {
    if (productName.value.trim().length>0 && productPrice.value.trim().length>0 && productQuantity.value.trim().length>0) {
        //price and quantity already checked in HTML (input "number")
        if (productPrice.value.trim()<0) {
            alert("Can't have products with negative prices!")
            return;
        }
        if (productQuantity.value.trim()<1) {
            alert("Can't add less than 1 of any product!")
            return;
        }
        let item = {
            name: productName.value.trim(),
            //don't forget to turn strings into numbers when it's numbers!
            price: +productPrice.value.trim(),            
            quantity: +productQuantity.value.trim()
        }
        stock.addItem(item);
    } else {
        alert("Product name, price and quantity needed!");
    }  
    showProducts(); 
    //empty the values
    productName.value = productPrice.value = productQuantity.value = "";    
}

