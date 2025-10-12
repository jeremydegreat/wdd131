document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById('lastmodified');

// last modified date
    lastModified.innerHTML = `last modified: ${document.lastModified}`;

// ---------- Product Array ----------
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// ---------- Populate Product Select ----------
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;      // use id as value
      option.textContent = product.name;  // display name
      productSelect.appendChild(option);
    });
  }

  // ---------- Button animation ----------
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();

      submitBtn.textContent = "Processing...";
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";

      setTimeout(() => {
        submitBtn.textContent = "Completed ✅";
        submitBtn.style.opacity = "1";

        setTimeout(() => {
          submitBtn.textContent = "Submit Review";
          submitBtn.disabled = false;

          // Redirect to confirmation page
          window.location.href = "review.html";
        }, 1500);
      }, 2000);
    });
  }
});

})