
// Set the Last modified date
const lastModified = document.lastModified;
document.getElementById("getdate").textContent = 'last Modified: ' + lastModified;

// Toggle function
const hamburger = document.getElementById("hamburger");
const navlinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
