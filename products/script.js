// Controller Scripts - Event Listeners and Functions
document.addEventListener("DOMContentLoaded", async function () {
  // const RESPONSE = await axios.get("/../data.json");

  // For Products
  const TASK_HEADER = ["ID", "Image", "Name", "Quantity", "Category", "Warehouse", "Availability", "Settings"];
  const TASK_TYPE = "products";

  // For Orders
  // const TASK_HEADER = ["ID", "Name", "Date", "Items", "Spending", "Status", "Settings"];
  // const TASK_TYPE = "orders";  

  // For Customers
  //const TASK_HEADER = ["ID", "Image", "Name", "Address", "Phone", "Purchases", "Spending", "Settings"];
  //const TASK_TYPE = "customers";

  // For Employees
  // const TASK_HEADER = ["ID", "Image", "Name", "Department", "Email", "Joined", "Location", "Settings"];
  // const TASK_TYPE = "employees";
  
  await main(TASK_HEADER, TASK_TYPE);
})
