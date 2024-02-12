// Controller Scripts - Event Listeners and Functions
document.addEventListener("DOMContentLoaded", async function () { 
  // For Customers
  const TASK_HEADER = ["ID", "Image", "Name", "Address", "Phone", "Purchases", "Spending", "Settings"];
  const TASK_TYPE = "customers";

  await main(TASK_HEADER, TASK_TYPE);
})
