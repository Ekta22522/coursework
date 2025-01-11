

const products = [
    {
        id: 1,
        name: "Seamaster 300 41 mm, steel on leather strap",
        description: "Item in adipisicin",
        image: "watch1.webp",
        badge: "Best seller",
        currentPrice: 8550,
        originalPrice: 9000,
        category: ["luxury", 'men'],
    },
    {
        id: 2,
        name: "Speedmaster Moonwatch, stainless steel",
        description: "Classic chronograph",
        image: "watch2.webp",
        badge: "New arrival",
        currentPrice: 7400,
        originalPrice: 8000,
        category: ["men", "luxury", "smartwatch"],
    },
    {
        id: 3,
        name: "Constellation Quartz, stainless steel",
        description: "Timeless design",
        image: "constellation.avif",
        badge: "Trending",
        currentPrice: 3200,
        originalPrice: 3500,
        inStock: true,
        category: ["women", "luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 4,
        name: "Aqua Terra 150M, steel and rose gold",
        description: "Elegant and versatile",
        image: "aqua-terra.avif",
        badge: "Limited edition",
        currentPrice: 10500,
        originalPrice: 11500,
        inStock: false,
        category: ["luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 5,
        name: "VTech Kidizoom Smartwatch DX2",
        description: "Perfect for kids with fun features",
        image: "kidizoom.avif",
        badge: "Popular",
        currentPrice: 60,
        originalPrice: 75,
        inStock: true,
        category: ["kids", "smart watch"],
        cartIcon: "cart.png",
    },
    {
        id: 6,
        name: "Apple Watch Series 9",
        description: "Smartwatch for fitness and productivity",
        image: "apple-watch.avif",
        badge: "Top rated",
        currentPrice: 399,
        originalPrice: 429,
        inStock: true,
        category: ["smart watch", "men", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 7,
        name: "Rolex Submariner Date",
        description: "Iconic diving watch in steel",
        image: "submariner.avif",
        badge: "Premium",
        currentPrice: 14500,
        originalPrice: 15000,
        inStock: true,
        category: ["luxury", "men"],
        cartIcon: "cart.png",
    },
    {
        id: 8,
        name: "Cartier Tank Must",
        description: "Classic rectangular dress watch",
        image: "tank-must.avif",
        badge: "Elegant",
        currentPrice: 2740,
        originalPrice: 3000,
        inStock: true,
        category: ["luxury", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 9,
        name: "Samsung Galaxy Watch 6",
        description: "Advanced health tracking smartwatch",
        image: "galaxy-watch.avif",
        badge: "Featured",
        currentPrice: 299,
        originalPrice: 349,
        inStock: true,
        category: ["smart watch", "men", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 10,
        name: "Garmin Fenix 7",
        description: "Premium multisport GPS watch",
        image: "fenix.avif",
        badge: "Sports",
        currentPrice: 699,
        originalPrice: 799,
        inStock: true,
        category: ["smart watch", "sports"],
        cartIcon: "cart.png",
    },
    {
        id: 11,
        name: "Patek Philippe Nautilus",
        description: "Luxury sports watch in steel",
        image: "nautilus.avif",
        badge: "Exclusive",
        currentPrice: 85000,
        originalPrice: 90000,
        inStock: false,
        category: ["luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 12,
        name: "Fitbit Versa 4",
        description: "Fitness focused smartwatch",
        image: "versa.avif",
        badge: "Fitness",
        currentPrice: 199,
        originalPrice: 229,
        inStock: true,
        category: ["smart watch", "sports"],
        cartIcon: "cart.png",
    },
    {
        id: 13,
        name: "Tag Heuer Connected Calibre E4",
        description: "Luxury smartwatch with Swiss heritage",
        image: "tag-connected.avif",
        badge: "Innovation",
        currentPrice: 1800,
        originalPrice: 2000,
        inStock: true,
        category: ["luxury", "smart watch"],
        cartIcon: "cart.png",
    },
    {
        id: 14,
        name: "Timex Kids Analog Watch",
        description: "Educational time-teaching watch",
        image: "timex-kids.avif",
        badge: "Educational",
        currentPrice: 25,
        originalPrice: 30,
        inStock: true,
        category: ["kids"],
        cartIcon: "cart.png",
    },
    {
        id: 15,
        name: "Audemars Piguet Royal Oak",
        description: "Iconic luxury sports watch",
        image: "royal-oak.avif",
        badge: "Luxury",
        currentPrice: 65000,
        originalPrice: 70000,
        inStock: false,
        category: ["luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 16,
        name: "Fossil Gen 6 Smartwatch",
        description: "Fashion-forward smart functionality",
        image: "fossil-gen6.avif",
        badge: "Stylish",
        currentPrice: 299,
        originalPrice: 319,
        inStock: true,
        category: ["smart watch", "men", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 17,
        name: "Casio G-Shock GMW-B5000",
        description: "Tough digital watch with smartphone link",
        image: "g-shock.avif",
        badge: "Durable",
        currentPrice: 550,
        originalPrice: 600,
        inStock: true,
        category: ["men", "sports"],
        cartIcon: "cart.png",
    },
    {
        id: 18,
        name: "Amazfit Bip 3 Pro",
        description: "Budget-friendly fitness tracker",
        image: "amazfit.avif",
        badge: "Value",
        currentPrice: 69,
        originalPrice: 89,
        inStock: true,
        category: ["smart watch", "sports"],
        cartIcon: "cart.png",
    },
    {
        id: 19,
        name: "IWC Pilot's Watch Chronograph",
        description: "Professional pilot's chronograph",
        image: "iwc-pilot.avif",
        badge: "Professional",
        currentPrice: 8950,
        originalPrice: 9500,
        inStock: true,
        category: ["luxury", "men"],
        cartIcon: "cart.png",
    },
    {
        id: 20,
        name: "Garmin vívofit jr. 3",
        description: "Interactive kids fitness tracker",
        image: "vivofit-jr.avif",
        badge: "Kids Choice",
        currentPrice: 79,
        originalPrice: 89,
        inStock: true,
        category: ["kids", "smart watch"],
        cartIcon: "cart.png",
    },
    {
        id: 21,
        name: "Cartier Santos",
        description: "Modern interpretation of a classic",
        image: "santos.avif",
        badge: "Heritage",
        currentPrice: 7800,
        originalPrice: 8500,
        inStock: true,
        category: ["luxury", "men"],
        cartIcon: "cart.png",
    },
    {
        id: 22,
        name: "Withings ScanWatch",
        description: "Hybrid smartwatch with health tracking",
        image: "scanwatch.avif",
        badge: "Health",
        currentPrice: 279,
        originalPrice: 299,
        inStock: true,
        category: ["smart watch", "men", "women"],
        cartIcon: "cart.png",
    }
];


// Function to display products
function displayProducts(products) {
    const productsGrid = document.getElementById('products_grid');


    productsGrid.innerHTML = products.map(product => `
                <div class="product-card">
                    <span class="badge">${product.badge}</span>
                    <img src="images/${product.image}" alt="Product" class="product-image" />
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">
                        <span class="current-price">$${product.currentPrice}</span>
                        <span class="original-price">$${product.originalPrice}</span>
                       <button class="cart"><img src="cart.png"></button>
                    </div>
                </div>
            `).join('');
}

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Add click event listener to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        // Get category from button text
        const category = button.textContent.toLowerCase();

        // Filter products
        let filteredProducts;
        if (category === 'all products') {
            // Show all products if "All Products" is clicked
            filteredProducts = [...products];
        } else {
            // Filter products by category
            filteredProducts = products.filter(product =>
                product.category.map(cat => cat.toLowerCase()).includes(category)
            );
        }

        // Display filtered products
        displayProducts(filteredProducts);
    });
});

// Modify your HTML buttons to remove anchor tags
// Initial display
displayProducts(products);

