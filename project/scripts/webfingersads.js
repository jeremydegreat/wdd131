document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('lastmodified')

    // Displaying LAst Modified date
    lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

    // Handling Hamburger 
   const hamburger = document.getElementById("hamburger");
  const navlinks = document.querySelector(".navlinks");

  if (hamburger && navlinks) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navlinks.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navlinks.contains(e.target) && !hamburger.contains(e.target)) {
        navlinks.classList.remove("active");
      }
    });
  }

})