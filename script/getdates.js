// Set the copyright year
const currentYear = new Date.getFullYear();
document.getElementById('year').textContent = currentYear;

// Set the Last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = 'lastModified: ' + lastModified;