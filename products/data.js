// Model Scripts - Data Processing


function createTask(data) {
  itemObject = {};
  for (let eachItem of data["products"]) {
    for (let eachItemInfo in eachItem){
      itemObject[eachItemInfo] = document.querySelector(`#task${eachItemInfo}`).value;
    }
    break;
  }
  response.data["products"].push(itemObject);
}

/**
 * Updates an existing task's with new input from users
 * @param {object} r Each item's infomation (Returns all)
 * @param {*} data Data from data.json file
 * @param {array} editedItem Edited item's information (Returns only 1)
 * @param {array} header Header of item table
 */
function updateTask(id, data, editedItem, header) {
  let editedTask = null;
  for (let d of data.products) {
    if (d.id == id) {
      editedTask = d;
      break;
    }
  }

  for (i = 1; i < editedItem.length; i++) {
    editedTask[header[i].toLowerCase()] = editedItem[i-1];
  }
}

/**
 * Deletes an existing task
 * @param {int} id The task's ID
 * @param {*} data Data from data.json file
 */
function deleteTask(id, data) {
  let editedTask = null;
  for (let i = 0; i < data.products.length; i++) {
    if (id == data.products[i].id) {
      editedTask = i+1;
    }
  }

  if (editedTask) {
    data.products.splice(editedTask-1, 1);
  }
}