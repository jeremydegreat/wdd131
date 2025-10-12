document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById('lastmodified');

// last modified date
    lastModified.innerHTML = `last modified: ${document.lastModified}`;

// For the button function
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent actual submission for now

    submitBtn.textContent = "Processing...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Simulate processing delay (2 seconds)
    setTimeout(() => {
      submitBtn.textContent = "Completed ✅";
      submitBtn.style.opacity = "1";

      // After another 2 seconds, return to "Submit Review"
      setTimeout(() => {
        submitBtn.textContent = "Submit Review";
        submitBtn.disabled = false;
      }, 2000);
    }, 2000);
  });

})