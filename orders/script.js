// Controller Scripts - Event Listeners and Functions
document.addEventListener("DOMContentLoaded", async function () {

  // For Orders
  const TASK_HEADER = ["ID", "Name", "Date", "Items", "Spending", "Status", "Settings"];
  const TASK_TYPE = "orders";  
  
  await main(TASK_HEADER, TASK_TYPE);
})
