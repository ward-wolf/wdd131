// Date and last modified

const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Display total reviews from localStorage

const reviewsCompleted = Number(localStorage.getItem("reviewsCompleted"));
document.querySelector("#review-count").textContent = reviewsCompleted;
