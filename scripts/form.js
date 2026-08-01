/*//////////////////////////////////////////////////
//         Increment & Display Review Counter      //
////////////////////////////////////////////////**/

function updateReviewCount() {
    let count = parseInt(localStorage.getItem("reviewCount"), 10);
    if (isNaN(count)) {
        count = 0;
    }
    count += 1;
    localStorage.setItem("reviewCount", count);

    const countEl = document.getElementById("reviewCount");
    if (countEl) {
        countEl.textContent = `Total reviews submitted on this device: ${count}`;
    }
}

updateReviewCount();

/*//////////////////////////////////////////////////
//        Show a Quick Summary of the Submission    //
////////////////////////////////////////////////**/

function showSummary() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const rating = params.get("rating");
    const summaryEl = document.getElementById("reviewSummary");

    if (summaryEl && product) {
        const stars = rating ? "&starf;".repeat(Number(rating)) : "";
        summaryEl.innerHTML = `Thanks for reviewing <strong>${product}</strong>! You rated it ${rating ? rating + " / 5" : ""}.`;
    }
}

showSummary();

/*//////////////////////////////////////////////////
//                     Get Date                    //
////////////////////////////////////////////////**/

const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}