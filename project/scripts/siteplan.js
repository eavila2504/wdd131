// get date and time 
document.addEventListener("DOMContentLoaded", function () {
  // Footer: copyright year + last modification date
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});