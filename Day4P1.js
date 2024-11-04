/*
In this assignment, you will simulate the workflow of a food delivery app that 
has the following tasks:
	Place the Order: A customer places an order for food.
	Prepare the Food: The kitchen prepares the food.
	Deliver the Food: The delivery person picks up the order and delivers it.

Each task takes different amounts of time, and some tasks can happen concurrently 
while others need to happen sequentially.

Requirements:
=============
Use async/await and promises to model the system.
	Task 1: Placing the Order should take 1 second.
	Task 2: Preparing the Food should take 3 seconds.
	Task 3: Delivering the Food should take 2 seconds.
	After preparing the food, 
	Task 4: Packaging can happen concurrently with delivery and should take 1 second.
Handle any errors that may occur (for example, if the delivery fails).

Steps:
Simulate each task as an asynchronous function using setTimeout.
Ensure the workflow happens in the correct sequence:
You cannot deliver the food before it's prepared.
The packaging and delivery can happen concurrently once the food is prepared.
Display messages for each step, such as "Order placed", "Food prepared", "Food delivered", etc.

Hint:
You will need to:
Use Promise.all() for concurrent tasks.
Use await for sequential tasks.

Expected Output:
===============
Order placed.                                                                   
Food prepared.                                                                  
Food packaged.                                                                  
Food delivered.                                                                 
Food delivery process complete. 

*/

// Task functions with delays
const placeOrder = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Order placed.");
          resolve();
      }, 1000);
  });
};

const prepareFood = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Food prepared.");
          resolve();
      }, 3000);
  });
};

const deliverFood = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Food delivered.");
          resolve();
      }, 2000);
  });
};

const packageFood = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Food packaged.");
          resolve();
      }, 1000);
  });
};

// Main function to control the process
const startFoodDeliveryProcess = async () => {
  try {
      await placeOrder();
      await prepareFood();

      // Concurrent tasks: packageFood and deliverFood
      await Promise.all([packageFood(), deliverFood()]);

      console.log("Food delivery process complete.");
  } catch (error) {
      console.log("Error in food delivery process:", error);
  }
};

startFoodDeliveryProcess();
