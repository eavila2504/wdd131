// Street Boarder — small footer utility
// Fills in the current year and the page's last-modified date.

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const modifiedP = document.getElementById('lastModified');
    if (modifiedP) {
        modifiedP.textContent = `Last modified: ${document.lastModified}`;
    }
});