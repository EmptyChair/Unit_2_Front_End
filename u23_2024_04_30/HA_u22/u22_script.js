const BASE_URL = "https://jsonplaceholder.typicode.com/";
//such named constants are supposed to be actually constant
const data = document.createElement("data"); 
const search = document.getElementById("search"); 
const usersList = document.getElementById("usersList"); 

async function fetchUsers() {
    try {
        // await - wait till data arrives
        const response = await fetch(`${BASE_URL}/users`); 
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error.message);
    }    
}

function displayUsers(users) {    
    usersList.innerHTML = "";

    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.onclick = () => displayIndividual(user);   
        // displayIndividual - function name
        // displayIndividual(user)  - activating function with a parameter 
        // () => displayIndividual - wrapper function
        usersList.appendChild(li);       
    });
}

const result = async () => {
    const users = await fetchUsers();

    // every time search changes, we launch a function
    //
    search.addEventListener("input", (e) => {
        console.log(e.target.value);
        const filter = e.target.value.toLowerCase();
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
        displayUsers(filteredUsers);
    })
    
    /* DOES THE SAME THING USING .oninput
    search.oninput = (e) => {
        console.log(e.target.value);
        const filter = e.target.value.toLowerCase();
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
        displayUsers(filteredUsers);    
    }
    */

    //in case the server doesn't respond
    if (users) {
        displayUsers(users);
    } else {
        console.log("No users found!");
    } 
 
}



//destructurization - for code readability
function displayIndividual({
    name, 
    email, 
    phone, 
    website, 
    company: { name: brand },  //alias!!! to avoid duplicate use of "name" parameter
    address: { street, suite, city }
    }) {    
    data.innerHTML = `
    <h3>${name}</h3>
    <h5><strong>Email:</strong> ${email}</h5>
    <h5><strong>Phone:</strong> ${phone}</h5> 
    <h5><strong>Website:</strong> ${website}</h5>
    <h5><strong>Company Name:</strong> ${brand}</h5>
    <h5><strong>Address:</strong> ${street},  ${suite},  ${city}</h5>
    `;
    if (userContent.childNodes.length == 0) {
        userContent.appendChild(data);
    } else {
        userContent.removeChild(userContent.firstChild);
        userContent.appendChild(data);
    }
    
}

result();