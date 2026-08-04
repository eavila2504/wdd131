/*//////////////////////////////////////////////////
//                  Product Data                   //
////////////////////////////////////////////////**/

const products = [
    { id: "antivirus", name: "McAfee" },
    { id: "game", name: "Minecraft" },
    { id: "video", name: "CapCut" },
    { id: "photography", name: "Photoshop" }
];

/*//////////////////////////////////////////////////
//        Save Product Array to localStorage       //
////////////////////////////////////////////////**/

function saveProductsToStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

function getProductsFromStorage() {
    const stored = localStorage.getItem("products");
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (error) {
            // Stored value was corrupted/invalid JSON — fall back to the array
            return products;
        }
    }
    return products;
}

saveProductsToStorage();

/*//////////////////////////////////////////////////
//          Populate Product Select Options        //
////////////////////////////////////////////////**/

function populateProducts() {
    const select = document.getElementById("product");
    if (!select) return;

    const productList = getProductsFromStorage();

    productList.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

populateProducts();

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