ddocument.addEventListener("DOMContentLoaded", function () {
  // Footer: copyright year + last modification date
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const modifiedP = document.getElementById("lastModified");
  if (modifiedP) {
    modifiedP.textContent = "Last Modification: " + document.lastModified;
  }
});