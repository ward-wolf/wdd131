// Date and last modified 

const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Product array

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate product dropdown

const select = document.querySelector("#product-name");
products.forEach(function(product) {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});

// Store and track the number of reviews completed

let reviewsCompleted = Number(localStorage.getItem("reviewsCompleted"));



// Reset form after submission so it is blank for the next user

document.querySelector("form").addEventListener("submit", function() {
    reviewsCompleted++;
    localStorage.setItem("reviewsCompleted", reviewsCompleted);
    this.reset();
});
