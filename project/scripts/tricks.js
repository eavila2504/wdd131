
  const tricks = [
  {
    trickName: "Ollie",
    difficulty: "Beginner",
    description: "A no-hands jump made by snapping the tail down and sliding the front foot up the board. The foundation for nearly every other trick.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzfaaiMdmP-CDZhTSEq_lqAAhy7Og9kbEhqAsBf0EUA&s=10"
  },
  {
    trickName: "Kickflip",
    difficulty: "Intermediate",
    description: "An ollie combined with a flick off the edge of the board that flips it once beneath the rider's feet before it's caught and landed.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrnDVH-K1nekLPdihlYaIIOMlCfxzUOkFsawC8elLQ&s=10"
  },
  {
    trickName: "50-50 Grind",
    difficulty: "Intermediate",
    description: "Both trucks lock onto a curb, rail, or ledge and slide across it evenly, one of the first grinds most skaters learn.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA01TiB6jEWKHNO8rS7t18VsnYdUQA-OQIUlnE0R-Mww&s=10"
  },
  {
    trickName: "Manual",
    difficulty: "Beginner",
    description: "Balancing on the back two wheels while rolling, essentially a skateboard's version of a wheelie. Often linked between other tricks.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZVEMxVVnzSo9LpBqYjKRMBVtk7TyHTAGcWI6P9kBBA&s=10"
  },
  {
    trickName: "Hardflip",
    difficulty: "Advanced",
    description: "A frontside pop shuvit combined with a kickflip, caught blind and landed in a single motion.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxwl8X8WC9HFjdShhlQhcnkJb25hOXNDJIO_qbDEbyQ&s=10"
  },
  {
    trickName: "Heelflip",
    difficulty: "Intermediate",
    description: "Flips the board using the heel instead of the toes, spinning the opposite direction of a kickflip.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwZ6Q7OwwEs9h8G5AvyjI1tyIMAHunyfaIOpRLHQSFg&s=10"
  },
  {
    trickName: "Pop Shuvit",
    difficulty: "Beginner",
    description: "The board spins 180° beneath the rider without flipping over.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9d7a9aCfjJsJDqviuIqxnXq1FXZdjsozT_dbH7EEJA&s=10"
  }
];

const filterTitles = {
  tricks: "Tricks every skater learns",
  beginner: "Beginner tricks",
  intermediate: "Intermediate tricks",
  advanced: "Advanced tricks"
};

function difficultyLevel(difficulty) {
  switch (String(difficulty).toLowerCase()) {
    case "beginner":
      return 1;
    case "intermediate":
      return 2;
    case "advanced":
      return 3;
    default:
      return 1;
  }
}

function createTrickCard(trick) {
  const figure = document.createElement("figure");
  figure.className = "trick-figure";

  const img = document.createElement("img");
  img.className = "trick-image";
  img.src = trick.imageUrl;
  img.alt = trick.trickName;
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");

  const name = document.createElement("h3");
  name.className = "trick-name";
  name.textContent = trick.trickName;

  const difficulty = document.createElement("span");
  difficulty.className = "trick-difficulty difficulty";
  difficulty.dataset.level = difficultyLevel(trick.difficulty);
  difficulty.textContent = trick.difficulty;

  const description = document.createElement("p");
  description.className = "trick-description";
  description.textContent = trick.description;

  figcaption.append(name, difficulty, description);
  figure.append(img, figcaption);
  return figure;
}

function renderTricks(list) {
  const grid = document.getElementById("trick-grid");
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach((trick) => grid.appendChild(createTrickCard(trick)));
}

function filterTricks(filterName) {
  if (filterName === "tricks") return tricks;
  return tricks.filter((t) => t.difficulty.toLowerCase() === filterName);
}

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

  // Difficulty filter nav
  const filterLinks = document.querySelectorAll(".navigation a");
  const pageTitle = document.getElementById("page-title");

  filterLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const filterName = link.dataset.filter || "tricks";

      filterLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      if (pageTitle) {
        pageTitle.textContent = filterTitles[filterName] || filterTitles.tricks;
      }

      renderTricks(filterTricks(filterName));
    });
  });

  // Initial render: show all tricks
  renderTricks(tricks);
});