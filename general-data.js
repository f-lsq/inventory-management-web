// JSON BIN ID and the base JSON BIN API URL
const BIN_ID = "65c79ab0dc74654018a2f44a";
const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b/65c79ab0dc74654018a2f44a";

// Not recommended
const MASTER_KEY = "$2a$10$ydkWnR3uLIR.xi39hj1ar.eDfqADGTMiwOiBI5pCP0e9j9Amx/LEO";

// Model Scripts - Data Processing
function createTask(data, type) {
  itemObject = {};
  for (let eachItem of data[type]) {
    for (let eachItemInfo in eachItem){
      itemObject[eachItemInfo] = document.querySelector(`#task${eachItemInfo}`).value;
    }
    break;
  }
  data[type].push(itemObject);
}

/**
 * Updates an existing task's with new input from users
 * @param {object} r Each item's infomation (Returns all)
 * @param {*} data Data from data.json file
 * @param {array} editedItem Edited item's information (Returns only 1)
 * @param {array} header Header of item table
 */
function updateTask(id, data, editedItem, header, type) {
  let editedTask = null;
  for (let d of data[type]) {
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
function deleteTask(id, data, type) {
  let editedTask = null;
  for (let i = 0; i < data[type].length; i++) {
    if (id == data[type][i].id) {
      editedTask = i+1;
    }
  }

  if (editedTask) {
    data[type].splice(editedTask-1, 1);
  }
}