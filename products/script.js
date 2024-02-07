// Controller Scripts - Event Listeners and Functions
document.addEventListener("DOMContentLoaded", async function () {
  // SCRIPT FOR INVENTORY ITEMS
  // Create Inventory Items Header
  const response = await axios.get("/../data.json");
  let inventoryHeader = ["SKU", "Image", "Name", "Quantity", "Category", "Warehouse", "Availability", "Settings"];

  createInvHeader(response);
  // CRUD FUNCTIONS
  displayProducts();

  function createInvHeader(response) {
    const inventoryList = document.querySelector("#inventory-list");
    const ulElement = document.createElement("ul");
    ulElement.setAttribute("id", "inventory-header");
    inventoryList.appendChild(ulElement);
    for (let i of inventoryHeader) {
      const liElement = document.createElement("li");
      if (i == "Name") {
        liElement.classList.add("inventory-name");
      }
      liElement.innerHTML = i;
      ulElement.appendChild(liElement);
      }
    }

  async function displayProducts() {
    const inventoryList = document.querySelector("#inventory-list");
    for (let r of response.data.products) {
      // Creates an unordered list after the list header with a class of "inventory item"
      const ulElement = document.createElement("ul");
      ulElement.classList.add("inventory-item");
      inventoryList.appendChild(ulElement);
      // Add list items into the created unordered list items
      for (let i of inventoryHeader) {
        const liElement = document.createElement("li");
        if (i == "Image") {
          console.log(r[i.toLowerCase()]);
          liElement.innerHTML = `<img class="inventory-image" src="${r[i.toLowerCase()]}"/>`
        } else if (i == "Settings") {
          liElement.classList.add("inventory-settiings");
          editButton = document.createElement("button")
          editButton.innerHTML = "<i class='bx bx-edit'></i>"
          deleteButton = document.createElement("button")
          deleteButton.innerHTML = "<i class='bx bx-trash'></i>"
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
  }
)



