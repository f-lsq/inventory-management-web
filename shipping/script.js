// Controller Scripts - Event Listeners and Functions
document.addEventListener("DOMContentLoaded", async function () {
  // const RESPONSE = await axios.get("/../data.json");

  // For Shipping
  const TASK_HEADER = ["ID", "Warehouse", "Address", "Carrier", "Packages", "Status", "Settings"];
  const TASK_TYPE = "shipping";
  
  await main(TASK_HEADER, TASK_TYPE);
})
