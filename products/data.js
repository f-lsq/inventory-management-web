// Model Scripts - Data Processing


function createTask() {

}

/**
 * Updates an existing task's with new input from users
 * @param {object} r Each item's infomation (Returns all)
 * @param {*} data Data from data.json file
 * @param {Array} editedItem Edited item's information (Returns only 1)
 * @param {Array} header Header of item table
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
 * @param {object} r Each product's infomation
 * @param {*} data Data from data.json file
 */
function deleteTask(r, data) {
  alert(
    "process delete clicked"
  )
}