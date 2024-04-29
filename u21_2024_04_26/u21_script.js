//synchronous code
console.log("Start");

//asynchronous code - launch the function in 7 seconds, show 10 on console
setTimeout(() => console.log(10), 7000);

//synchronous code
console.log("Finish");

//NOTE: synchronous code will be executed before asynchronous code!!!
//такое спрашивают на собеседованиях

function giveFiveAfterSevenSeconds() {
    setTimeout(() => 5, 7000);  
}

function giveFiveAfterZeroSeconds() {
    setTimeout(() => 5, 0);  
}

//result will be undefined because of  the delay
//THIS IS A PROBLEM
let res = giveFiveAfterSevenSeconds();
console.log(res)
let res2 = giveFiveAfterZeroSeconds();
console.log(res2)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 7000);

})


promise
    .then((value) => console.log(value)) //return parameter if positive outcome (resolve)
    .catch((err) => console.log(err)) //return parameter if negative outcome (reject)
    .finally(console.log("Thank you for using the app!")); //will be executed no matter what

const usersList = document.getElementById("usersList");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(users => {
        users.forEach(e => {
            const li = document.createElement("li");
            li.textContent = `${e.name}`; 
            usersList.appendChild(li); 
            /*
            if (usersList) {
                li.textContent = `${e.name}`;
                usersList.appendChild(li); 
            } else {
                li.textContent = "Check element ID.";
                document.body.appendChild(li);
            }
            */    
        });
    })
//response provides information about the response, not response itself :.then((response) => console.log(response)) 

const postsList = document.getElementById("postsList");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(posts => {
        posts.forEach(e => {
            const l1 = document.createElement("l1");
            l1.textContent = `UserID: ${e.userId}`;
            const l2 = document.createElement("l2");
            l2.textContent = `PostID: ${e.id}`;
            const l3 = document.createElement("l3");
            l3.textContent = `Title: ${e.title}`;
            const l4 = document.createElement("l4");
            l4.textContent = `Text: ${e.body}`;
            l1.classList.add("d-flex", "mb-1");
            l2.classList.add("d-flex", "mt-3", "text-dark", "fw-bold");
            l3.classList.add("d-flex", "mb-1");
            l4.classList.add("d-flex", "mb-1");
            /*
            li2.textContent = `
                UserID ${e.userId},
                PostID ${e.id},
                Title: ${e.title},
                Text: ${e.body}
            `;
            postsList.appendChild(li2);
            */               
            postsList.appendChild(l2); 
            postsList.appendChild(l1); 
            postsList.appendChild(l3); 
            postsList.appendChild(l4); 
        });
    })
