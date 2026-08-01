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


// ===========================================================
// Toggles the mobile wireframe's hamburger menu preview
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("wfHamburger");
    const navPanel = document.getElementById("wfMobileNav");

    if (hamburger && navPanel) {
        hamburger.addEventListener("click", () => {
            const isOpen = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", String(!isOpen));
            navPanel.hidden = isOpen;
        });
    }
});