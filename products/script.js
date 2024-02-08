// Controller Scripts - Event Listeners and Functions
document.addEventListener("DOMContentLoaded", async function () {
  // SCRIPT FOR ITEMS
  // Create Items Header
  async function main() {
    const response = await axios.get("/../data.json");
    let taskHeader = ["ID", "Image", "Name", "Quantity", "Category", "Warehouse", "Availability", "Settings"];

    // CRUD FUNCTIONS
    displayTask(taskHeader, response.data);

    document.querySelector("#add-button").addEventListener("click", function(){
      document.querySelector("#add-new-item").classList.toggle("add-active");
      displayAddTask(response.data);

      document.querySelector("#add-item-title button").addEventListener("click", function(){
        for (let eachItem of response.data["products"]) {
          for (let eachItemInfo in eachItem){
            console.log("eachItemInfo =>", eachItemInfo);
          }
          break;
        }
      })
    })
  }

  async function displayTask(header, data) {
    const inventoryList = document.querySelector("#inventory-list");
    inventoryList.innerHTML = "";
    createHeader(header);
    for (let r of data.products) {
      // Creates an unordered list after the list header with a class of "inventory item"
      const ulElement = document.createElement("ul");
      ulElement.classList.add("inventory-item");
      inventoryList.appendChild(ulElement);
      // Add list items into the created unordered list items
      for (let i of header) {
        const liElement = document.createElement("li");
        if (i == "Image") {
          liElement.innerHTML = `<img class="inventory-image" src="${r[i.toLowerCase()]}"/>`
        } else if (i == "Settings") {
          liElement.classList.add("inventory-settings");
          editButton = document.createElement("button")
          editButton.innerHTML = "<i class='bx bx-edit'></i>"
          editButton.classList.add("edit-button");
          editButton.addEventListener("click", function(){
            processEditTask(r, data, header);
          })
          deleteButton = document.createElement("button")
          deleteButton.innerHTML = "<i class='bx bx-trash'></i>"
          deleteButton.classList.add("delete-button");
          deleteButton.addEventListener("click", function(){
            processDeleteTask(r, data, header);
          })
          liElement.append(editButton, deleteButton)
        } else {
          if (i == "Name") {
            liElement.classList.add("inventory-name");
          }
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
  function displayAddTask(data){
    document.querySelector("#add-item-inputs").innerHTML = "";
    addItemInputs = document.querySelector("#add-item-inputs");
    for (let eachItem of data["products"]) {
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
    const inventoryList = document.querySelector("#inventory-list");
    const ulElement = document.createElement("ul");
    ulElement.setAttribute("id", "inventory-header");
    inventoryList.appendChild(ulElement);
    for (let i of header) {
      const liElement = document.createElement("li");
      if (i == "Name") {
        liElement.classList.add("inventory-name");
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
  function processEditTask(task, data, header) {
    editedItem = []
    for (let h of header) {
      if (h != "ID" && h != "Settings") {
        const editedField = prompt(`Enter the new ${h.toLowerCase()}: `, task[h.toLowerCase()]);
        editedItem.push(editedField);
      }
    } 

    updateTask(task.id, data, editedItem, header);
    displayTask(header, data);
    
  }

  /**
   * UI when users click the delete button
   * @param {object} task A task's infomation
   * @param {*} data Data from data.json file
   */
  function processDeleteTask(task, data, header) {
    const confirmDelete = confirm(`Are you sure that you want to delete ${task.name}?`)
    if (confirmDelete) {
      deleteTask(task.id, data, header);
    }
    displayTask(header, data);
  } 
    

    await main();

  }
)



