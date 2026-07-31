// ===========================================================
// site plan | final Project — WDD131
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("currentyear");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const modifiedEl = document.getElementById("lastModified");
    if (modifiedEl) {
        modifiedEl.textContent = `Last Modified: ${document.lastModified}`;
    }
});