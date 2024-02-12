document.addEventListener("DOMContentLoaded", function () {
  // SCRIPT FOR SIDEBAR TOGGLE
  const menuBtn = document.querySelector("#menuBtn");
  const navbar = document.querySelector("#navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle('active')
  });

  // SCRIPT FOR DARKMODE TOGGLE
  // const darkMode = document.querySelector("#darkMode");
  // const body = document.querySelector("body");
  // darkMode.addEventListener("click", function(){
  //   body.classList.toggle("dark-mode");
  // }); 
})

/**
 * CRUD Main Function
 * @param {*} header Header of item table
 * @param {*} data Data from JSON file
 * @param {*} type Type of item in each page (e.g. products, orders, customers, shipping)
 */
async function main(header, type) {
  const data = await loadTask();
  displayTask(header, data, type);

  document.querySelector("#add-button").addEventListener("click", function(){
    document.querySelector("#add-new-item").classList.toggle("add-active");
    displayAddTask(data, type);

    document.querySelector("#add-item-title button").addEventListener("click", function(){
      createTask(data, type);
      displayTask(header, data, type);
    })
  })

  const saveButton = document.querySelector("#save-button");
  saveButton.addEventListener("click", async function(){
    await saveTask(data);
    alert("Changes have been saved");
  });
}

/**
 * Displays all tasks in a table on the users' screen
 * @param {array} header Header of each column of the table
 * @param {*} data Data from JSON file containing the task information
 * @param {string} type The task type for this page (e.g. for products)
 */
async function displayTask(header, data, type) {
  const itemList = document.querySelector("#item-list");
  itemList.innerHTML = "";
  createHeader(header);
  for (let r of data[type]) {
    // Creates an unordered list after the list header with a class of "item item"
    const ulElement = document.createElement("ul");
    ulElement.classList.add("item-item");
    itemList.appendChild(ulElement);
    // Add list items into the created unordered list items
    for (let i of header) {
      const liElement = document.createElement("li");
      if (i == "Image") {
        liElement.classList.add(`item-${i.toLowerCase()}`);
        liElement.innerHTML = `<img src="${r[i.toLowerCase()]}"/>`
      } else if (i == "Settings") {
        liElement.classList.add(`item-${i.toLowerCase()}`);
        editButton = document.createElement("button")
        editButton.innerHTML = "<i class='bx bx-edit'></i>"
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", function(){
          processEditTask(r, data, header, type);
        })
        deleteButton = document.createElement("button")
        deleteButton.innerHTML = "<i class='bx bx-trash'></i>"
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function(){
          processDeleteTask(r, data, header, type);
        })
        liElement.append(editButton, deleteButton)
      } else if (i == "Spending") {
        liElement.classList.add(`item-${i.toLowerCase()}`);
        liElement.innerHTML = `$${r[i.toLowerCase()].toLocaleString()}`;
      } else {
        if (i == "Name" || i == "Address")  {
          liElement.classList.add("item-double", `item-${i.toLowerCase()}`);
        }
        liElement.classList.add(`item-${i.toLowerCase()}`);
        liElement.innerHTML = r[i.toLowerCase()];
        }
        ulElement.appendChild(liElement);
      }
    }
  }

/**
 * Display the input fields of the "Add Input Item Information" section
 * @param {array} header Contains the header for the product information
 */
function displayAddTask(data, type){
  document.querySelector("#add-item-inputs").innerHTML = "";
  addItemInputs = document.querySelector("#add-item-inputs");
  for (let eachItem of data[type]) {
    for (let eachItemInfo in eachItem){
      addItemDiv = addItemInputs.appendChild(document.createElement("div"));
      addLabel = document.createElement("label");
      addLabel.innerHTML = `${eachItemInfo[0].toUpperCase() + eachItemInfo.slice(1)}`;
      addInput = document.createElement("input");
      addInput.setAttribute("id", `task${eachItemInfo}`);
      addItemDiv.append(addLabel, addInput);
    }
    break;
  }
}
/**
 * Creates a header for the taskitems table
 * @param {array} header Title of each table column
 */
function createHeader(header) {
  const itemList = document.querySelector("#item-list");
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("id", "item-header");
  itemList.appendChild(ulElement);
  for (let i of header) {
    const liElement = document.createElement("li");
    if (i == "Name" || i == "Address") {
      liElement.classList.add("item-double");
    }
    liElement.innerHTML = i;
    ulElement.appendChild(liElement);
    }
  }

/**
 * UI when users click the edit button
 * @param {object} task A task's infomation
 * @param {*} data Data from data.json file
 */
function processEditTask(task, data, header, type) {
  editedItem = []
  for (let h of header) {
    if (h != "ID" && h != "Settings") {
      const editedField = prompt(`Enter the new ${h.toLowerCase()}: `, task[h.toLowerCase()]);
      editedItem.push(editedField);
    }
  } 

  updateTask(task.id, data, editedItem, header, type);
  displayTask(header, data, type);
  
}

/**
 * UI when users click the delete button
 * @param {object} task A task's infomation
 * @param {*} data Data from data.json file
 */
function processDeleteTask(task, data, header, type) {
  const confirmDelete = confirm(`Are you sure that you want to delete ID${task.id}?`)
  if (confirmDelete) {
    deleteTask(task.id, data, type);
  }
  displayTask(header, data, type);
  
} 
  