document.addEventListener("DOMContentLoaded", function () {
  // Footer: copyright year + last modification date
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const modifiedP = document.getElementById("lastModified");
  if (modifiedP) {
    modifiedP.textContent = "Last Modification: " + document.lastModified;
  }

  // Hamburger menu toggle (mobile view)
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after a link is tapped (mobile UX)
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...

  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: "41010",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"

  },
  {
    templeName: "Puebla Mexico",
    location: "Puebla, Mexico",
    dedicated: "2024, May, 19",
    area: "35865",
    imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BSEaJwKBKNNhIeumFeYzHLD7PluZ3MByrCNqdXSPjw&s"
  },
  

{
    templeName:"San Diego California",
    location: "San Diego, California, United States",
    dedicated: "193, April, 29", 
    area: "58005",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  }
]; 


// Pull the year out of the "dedicated" string (e.g. "2005, August, 7" -> 2005)
function getDedicatedYear(dedicated) {
  const match = String(dedicated).match(/\d{4}/);
  return match ? parseInt(match[0], 10) : null;
}
 
function createTempleCard(temple) {
  const figure = document.createElement("figure");
  figure.className = "temple-figure";
 
  const img = document.createElement("img");
  img.className = "temple-image";
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";
 
  const figcaption = document.createElement("figcaption");
 
  const name = document.createElement("span");
  name.className = "temple-name";
  name.textContent = temple.templeName;
 
  const location = document.createElement("span");
  location.className = "temple-year";
  location.textContent = temple.location;
 
  const dedicated = document.createElement("span");
  dedicated.className = "temple-year";
  dedicated.textContent = "Dedicated: " + temple.dedicated;
 
  const area = document.createElement("span");
  area.className = "temple-year";
  area.textContent = Number(temple.area).toLocaleString() + " sq ft";
 
  figcaption.append(name, location, dedicated, area);
  figure.append(img, figcaption);
  return figure;
}
 
function renderTemples(list) {
  const grid = document.getElementById("temple-grid");
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach((temple) => {
    grid.appendChild(createTempleCard(temple));
  });
}
 
function filterTemples(filterName) {
  switch (filterName) {
    case "old":
      return temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
    case "new":
      return temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
    case "large":
      return temples.filter((t) => Number(t.area) > 90000);
    case "small":
      return temples.filter((t) => Number(t.area) < 10000);
    case "home":
    default:
      return temples;
  }
}
 
const filterTitles = {
  home: "Home",
  old: "Old",
  new: "New",
  large: "Large",
  small: "Small"
};
 
document.addEventListener("DOMContentLoaded", function () {
  // Footer: copyright year + last modification date
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
 
  const modifiedP = document.getElementById("lastModified");
  if (modifiedP) {
    modifiedP.textContent = "Last Modification: " + document.lastModified;
  }
 
  // Hamburger menu toggle (mobile view)
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
 
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
 
    // Close the menu after a link is tapped (mobile UX)
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
 
  // Navigation filtering
  const navLinks = document.querySelectorAll(".navigation a");
  const pageTitle = document.getElementById("page-title");
 
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const filterName = link.dataset.filter || "home";
 
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
 
      if (pageTitle) {
        pageTitle.textContent = filterTitles[filterName] || "Home";
      }
 
      renderTemples(filterTemples(filterName));
    });
  });
 
  // Initial render: show all temples
  renderTemples(temples);
});