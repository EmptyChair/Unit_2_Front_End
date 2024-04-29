// ARRAY OF TASKS
const organizer = {
  // pre-existing array of tasks
  tasks: [
    { name: "Walk the dog", isDone: false },
    { name: "Buy milk", isDone: false },
    { name: "Do 30 sit-ups", isDone: false },
    { name: "Call 47 about noisy neighbors", isDone: false },
    { name: "Think morbid thoughts", isDone: false },
    { name: "Buy a gun", isDone: false },
    { name: "Alarm!", isDone: false }
  ], 

  // ADD TASK TO THE LIST
  addTask(task) {  

    const existingTask = this.tasks.find((e) => e.name === task.name);

    if (existingTask) {
      alert("Task already added!");
    } else {
      this.tasks.push(task);
    }
  },

  // REMOVE TASK FROM THE LIST
  removeTask(taskName) {

    const index = this.tasks.findIndex((e) => e.name === taskName);

    if (index !== -1) {
      this.tasks.splice(index, 1)
    } else {
      alert("No such task!");
    }
  } 
};
  
// ADD BUTTON functionality
add.onclick = addHandler;

function addHandler() {
  //read task
  const name = taskName.value.trim();

  //add values
  if (name.length > 0) {
    organizer.addTask({ name, isDone: false });
  }

  //create a list of elements
  writeList();   
}

function writeList() {
  // 1. Preparation: removing values, crafting list
  taskName.value = "";
  taskList.innerHTML = "";

  // 2. Start working through the array and sort it by selection/name
  organizer.tasks.sort((a, b) => {
    if (!(a.isDone-b.isDone)) {
      return b.name < a.name;      
    }
    return a.isDone-b.isDone;    
  }).forEach((e, i) => {
    // 2.1 Create a List
    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action");
    // 2.1.1 choose background color according to selection status
    if (e.isDone) {
      li.style.backgroundColor = "grey";
      li.style.textDecoration = "line-through"; 
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
      e.isDone = !e.isDone;
      writeList();
    }

    // 2.3 Create a removal button
    const removeButton = document.createElement('button'); 
    removeButton.innerHTML = "X";
    removeButton.classList.add("btn", "btn-danger", "ms-auto");
    removeButton.onclick = remove;
    function remove() {
      alert("Task Removed!");
      organizer.removeTask(e.name);
      li.remove();
      writeList();
    }            
    // 2.4 Fill list with text
    li.textContent = `${i+1}. ${e.name} 
    `;
    // 2.5 Add checkbox to the list      
    li.appendChild(box);
    // 2.6 Add button to the list      
    li.appendChild(removeButton);
    taskList.appendChild(li);

  });  
}