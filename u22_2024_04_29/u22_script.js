const BASE_URL = "https://jsonplaceholder.typicode.com/";
//such named constants are supposed to be actually constant

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
    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.onclick = showInfo;
        function showInfo() {
            displayIndividual(user);
        }        
        /*
        const infoButton = document.createElement('button'); 
        infoButton.innerHTML = "?";
        infoButton.classList.add("btn", "btn-info", "ms-2");
        infoButton.onclick = showInfo;
        function showInfo() {
            displayIndividual(user);
        }        
        li.appendChild(infoButton);  
        */
        usersList.appendChild(li);       
    });
}

const result = async () => {
    const users = await fetchUsers();
    if (users) {
        displayUsers(users);
    } else {
        console.log("No users found!");
    }
    
}

function displayIndividual(user) {
    const data = document.createElement("data");
    data.innerHTML = `
    <h3>${user.name}</h3>
    <h5>Email: ${user.email}</h5>
    <h5>Phone: ${user.phone}</h5>
    <h5>Website: ${user.website}</h5>
    <h5>Company Name: ${user.company.name}</h5>
    <h5>Address: ${user.address.street},  ${user.address.suite},  ${user.address.city}</h5>
    `;
    if (userContent.childNodes.length == 0) {
        userContent.appendChild(data);
    } else {
        userContent.removeChild(userContent.firstChild);
        userContent.appendChild(data);
    }
    
}



result();
//console.log(displayUsers(fetchUsers()));