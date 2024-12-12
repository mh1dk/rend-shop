



// // Retrieving the item from localStorage
// const mamad = localStorage.getItem("productInfo");

// // Check if there's data stored and log it
// if (mamad) {
//     const productInfo = JSON.parse(mamad); // Convert it back to a JavaScript object
//     console.log("Retrieved Product Info:", productInfo);
// } else {
//     console.log("No product information found in the basket.");
// }

const getItem = localStorage.getItem("productInfo");
console.log(getItem);
