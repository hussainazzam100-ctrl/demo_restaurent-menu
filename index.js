<<<<<<< HEAD
const menuItems = [
    // STARTERS
    {
        name: "Tuna Tartare",
        category: "starters",
        description: "Fresh tuna, avocado, lime and sesame.",
        price: "MVR 120",
        placeholder: "placeholder-1"
    },
    {
        name: "Fish Cakes",
        category: "starters",
        description: "Crispy fish cakes with island herbs.",
        price: "MVR 90",
        placeholder: "placeholder-2"
    },
    {
        name: "Calamari",
        category: "starters",
        description: "Lightly fried calamari with house aioli.",
        price: "MVR 80",
        placeholder: "placeholder-3"
    },
    {
        name: "Island Salad",
        category: "starters",
        description: "Fresh greens, tropical fruits and house dressing.",
        price: "MVR 70",
        placeholder: "placeholder-4"
    },

    // MAIN DISHES
    {
        name: "Grilled Prawns",
        category: "main-dishes",
        description: "Juicy prawns finished with garlic butter.",
        price: "MVR 160",
        placeholder: "placeholder-2"
    },
    {
        name: "Chicken Curry",
        category: "main-dishes",
        description: "Traditional curry with coconut milk.",
        price: "MVR 110",
        placeholder: "placeholder-3"
    },
    {
        name: "Lobster (Seasonal)",
        category: "main-dishes",
        description: "Fresh lobster with island spices.",
        price: "MVR 250",
        placeholder: "placeholder-4"
    },
    {
        name: "Garlic Butter Fish",
        category: "main-dishes",
        description: "Pan-seared fish with garlic herb butter.",
        price: "MVR 140",
        placeholder: "placeholder-1"
    },

    // DRINKS
    {
        name: "Mango Cooler",
        category: "drinks",
        description: "Chilled mango, lime and fresh mint.",
        price: "MVR 55",
        placeholder: "placeholder-3"
    },
    {
        name: "Island Coconut",
        category: "drinks",
        description: "Fresh coconut water served chilled.",
        price: "MVR 45",
        placeholder: "placeholder-4"
    },
    {
        name: "Iced Coffee",
        category: "drinks",
        description: "Cold-brew coffee with creamy milk.",
        price: "MVR 60",
        placeholder: "placeholder-1"
    },
    {
        name: "Passionfruit Fizz",
        category: "drinks",
        description: "Passionfruit, lime and sparkling water.",
        price: "MVR 65",
        placeholder: "placeholder-2"
    },

    // DESSERTS
    {
        name: "Coconut Ice Cream",
        category: "desserts",
        description: "Homemade coconut ice cream.",
        price: "MVR 60",
        placeholder: "placeholder-4"
    },
    {
        name: "Mango Cheesecake",
        category: "desserts",
        description: "Tropical mango with a biscuit base.",
        price: "MVR 75",
        placeholder: "placeholder-3"
    },
    {
        name: "Chocolate Lava Cake",
        category: "desserts",
        description: "Warm chocolate cake with vanilla ice cream.",
        price: "MVR 90",
        placeholder: "placeholder-1"
    },
    {
        name: "Island Fruit Bowl",
        category: "desserts",
        description: "Seasonal tropical fruits with lime and mint.",
        price: "MVR 55",
        placeholder: "placeholder-2"
    }
];

const productGrid = document.getElementById("productGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const nav = document.querySelector(".desktop-nav");
const menuToggle = document.querySelector(".menu-toggle");

function renderMenu(category) {
    const filteredItems = menuItems.filter(item => item.category === category);

    productGrid.innerHTML = filteredItems.map(item => `
        <article class="product-card">
            <div class="product-placeholder ${item.placeholder}">
                IMAGE PLACEHOLDER
            </div>
            <div class="product-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        </article>
    `).join("");
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderMenu(button.dataset.category);
    });
});

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".desktop-nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Start with the Starters category.
renderMenu("starters");
=======
const menuItems = [
    // STARTERS
    {
        name: "Tuna Tartare",
        category: "starters",
        description: "Fresh tuna, avocado, lime and sesame.",
        price: "MVR 120",
        placeholder: "placeholder-1"
    },
    {
        name: "Fish Cakes",
        category: "starters",
        description: "Crispy fish cakes with island herbs.",
        price: "MVR 90",
        placeholder: "placeholder-2"
    },
    {
        name: "Calamari",
        category: "starters",
        description: "Lightly fried calamari with house aioli.",
        price: "MVR 80",
        placeholder: "placeholder-3"
    },
    {
        name: "Island Salad",
        category: "starters",
        description: "Fresh greens, tropical fruits and house dressing.",
        price: "MVR 70",
        placeholder: "placeholder-4"
    },

    // MAIN DISHES
    {
        name: "Grilled Prawns",
        category: "main-dishes",
        description: "Juicy prawns finished with garlic butter.",
        price: "MVR 160",
        placeholder: "placeholder-2"
    },
    {
        name: "Chicken Curry",
        category: "main-dishes",
        description: "Traditional curry with coconut milk.",
        price: "MVR 110",
        placeholder: "placeholder-3"
    },
    {
        name: "Lobster (Seasonal)",
        category: "main-dishes",
        description: "Fresh lobster with island spices.",
        price: "MVR 250",
        placeholder: "placeholder-4"
    },
    {
        name: "Garlic Butter Fish",
        category: "main-dishes",
        description: "Pan-seared fish with garlic herb butter.",
        price: "MVR 140",
        placeholder: "placeholder-1"
    },

    // DRINKS
    {
        name: "Mango Cooler",
        category: "drinks",
        description: "Chilled mango, lime and fresh mint.",
        price: "MVR 55",
        placeholder: "placeholder-3"
    },
    {
        name: "Island Coconut",
        category: "drinks",
        description: "Fresh coconut water served chilled.",
        price: "MVR 45",
        placeholder: "placeholder-4"
    },
    {
        name: "Iced Coffee",
        category: "drinks",
        description: "Cold-brew coffee with creamy milk.",
        price: "MVR 60",
        placeholder: "placeholder-1"
    },
    {
        name: "Passionfruit Fizz",
        category: "drinks",
        description: "Passionfruit, lime and sparkling water.",
        price: "MVR 65",
        placeholder: "placeholder-2"
    },

    // DESSERTS
    {
        name: "Coconut Ice Cream",
        category: "desserts",
        description: "Homemade coconut ice cream.",
        price: "MVR 60",
        placeholder: "placeholder-4"
    },
    {
        name: "Mango Cheesecake",
        category: "desserts",
        description: "Tropical mango with a biscuit base.",
        price: "MVR 75",
        placeholder: "placeholder-3"
    },
    {
        name: "Chocolate Lava Cake",
        category: "desserts",
        description: "Warm chocolate cake with vanilla ice cream.",
        price: "MVR 90",
        placeholder: "placeholder-1"
    },
    {
        name: "Island Fruit Bowl",
        category: "desserts",
        description: "Seasonal tropical fruits with lime and mint.",
        price: "MVR 55",
        placeholder: "placeholder-2"
    }
];

const productGrid = document.getElementById("productGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const nav = document.querySelector(".desktop-nav");
const menuToggle = document.querySelector(".menu-toggle");

function renderMenu(category) {
    const filteredItems = menuItems.filter(item => item.category === category);

    productGrid.innerHTML = filteredItems.map(item => `
        <article class="product-card">
            <div class="product-placeholder ${item.placeholder}">
                IMAGE PLACEHOLDER
            </div>
            <div class="product-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        </article>
    `).join("");
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderMenu(button.dataset.category);
    });
});

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".desktop-nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Start with the Starters category.
renderMenu("starters");
>>>>>>> 17ab83c (Update restaurant menu demo)
