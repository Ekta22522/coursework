
const products = [
    {
        id: 1,
        name: "Smart Watch for Kids Toys, Touchscreen with 20 Puzzle Games",
        description: "Perfect for kids with fun features",
        image: "kids collection/kids1.jpg",
        badge: "Best seller",
        currentPrice: 52,
        originalPrice:60,
        category: ["Smartwatch", 'kids'],
    },
    {
        id: 2,
        name: "SDTKID Kids Analog Watch",
        description: " Waterproof, Easy to Read Time Teaching Watch for Boys, Soft Band Wrist Watch for Kids…",
        image: "kids collection/kids2.jpg",
        badge: "New arrival",
        currentPrice:60,
        originalPrice:75,
        category: ["kids"],
    },
    {
        id: 3,
        name: "Kids Cartoon Panda Dial Quartz Watch",
        description: "Timeless design",
        image: "kids collection/kids3.jpg",
        badge: "Trending",
        currentPrice: 2,
        originalPrice: 2.5,
        inStock: true,
        category: ["kids"],
        cartIcon: "cart.png",
    },
    {
        id: 4,
        name: "Smartwatch for Kids ",
        description: "Dual Camera Games Video MP3 Children Touch Screen",
        image: "kids collection/kids4.jpg",
        badge: "Trending",
        currentPrice: 30,
        originalPrice: 35.5,
        inStock: true,
        category: ["kids","Smartwatch"],
        cartIcon: "cart.png",
    },
    {
        id: 5,
        name: "Unisex Child Interactive Smart Watch Silicone Strap 40mm Pink ",
        description: "Perfect for kids with fun features",
        image: "kids collection/kids5.jpg",
        badge: "Best seller",
        currentPrice: 60,
        originalPrice: 75,
        inStock: true,
        category: ["kids", "Smartwatch"],
        cartIcon: "cart.png",
    },
    {
        id: 6,
        name: "Smart Watch for Kids",
        description: "24 Puzzle Games HD Touch Screen Camera, Music Player, Pedometer Alarm Clock, Calculator",
        image: "kids collection/kids6.jpg",
        badge: "Best Seller",
        currentPrice: 30,
        originalPrice: 35.5,
        inStock: true,
        category: ["Smartwatch", "kids"],
        cartIcon: "cart.png",
    },
    {
        id: 7,
        name: "Kids Watch,Boys Watch for 3-15 Year Old Boys",
        description: "",
        image: "kids collection/kids7.jpg",
        badge: "Best Seller",
        currentPrice: 60,
        originalPrice: 62.3,
        inStock: true,
        category: ["kids",],
        cartIcon: "cart.png",
    },
    {
        id: 8,
        name: "VTech Kidizoom Smart Watch DX2",
        description: "Blue Watch for Kids with Games, Camera for Photos & Videos, Colour Screen, Photo Effects & More",
        image: "kids collection/kids8.jpg",
        badge: "Best Seller",
        currentPrice: 40,
        originalPrice: 42,
        inStock: true,
        category: ["kids", "Smartwatch"],
        cartIcon: "cart.png",
    },
    {
        id: 9,
        name: "watches for kids girls children",
        description: "learn very quickly",
        image: "kids collection/kid9.jpg",
        badge: "Trending",
        currentPrice: 60,
        originalPrice: 63,
        inStock: true,
        category: ["Smartwatch", "kids"],
        cartIcon: "cart.png",
    },
    {
        id: 10,
        name: "Kids 3D Dinosaur Decor Strap Water Resistant Electronic Watch",
        description: "Perfect for kids with fun features",
        image: "kids collection/kid10.jpg",
        badge: "New arrival",
        currentPrice: 69,
        originalPrice: 72,
        inStock: true,
        category: ["Smartwatch", "kids"],
        cartIcon: "cart.png",
    },
    {
        id: 11,
        name: "Rolex  Datejust Steel Gold Diamond Mens Oyster Bracelet Watch",
        description: "Rolex Datejust 41 in stainless steel with 18k white gold fluted bezel.",
        image: "men watch/men1.jpg",
        badge: "Best seller",
        currentPrice: 15000,
        originalPrice: 15500,
        inStock: false,
        category: ["luxury","men"],
        cartIcon: "cart.png",
    },
    {
        id: 12,
        name: "50509 Rolex Cellini Time Men's Luxury Watch",
        description: "luxury men's watch",
        image: "men watch/men2.jpg",
        badge: "Best seller",
        currentPrice: 1999,
        originalPrice: 2200,
        inStock: true,
        category: ["men", "luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 13,
        name: "CASIO G-Shock G-Steel 'Black Gold' GST-B100RH-1A",
        description: "Unisex",
        image: "men watch/men3.jpg",
        badge: "Trending",
        currentPrice: 604,
        originalPrice: 650,
        inStock: true,
        category: ["luxury", "men"],
        cartIcon: "cart.png",
    },
    {
        id: 14,
        name: "CASIO G-Shock watch",
        description: "Unisex",
        image: "men watch/men4.jpg",
        badge: "Trending",
        currentPrice: 640,
        originalPrice: 700,
        inStock: true,
        category: ["men","luxury","women"],
        cartIcon: "cart.png",
    },
    {
        id: 15,
        name: "Rolex Datejust Steel Gold Diamond ",
        description: "Mens Oyster Bracelet Watch",
        image: "men watch/men5.jpg",
        badge: "New arrival",
        currentPrice: 800,
        originalPrice: 850,
        inStock: false,
        category: ["luxury","men"],
        cartIcon: "cart.png",
    },
    {
        id: 16,
        name: "Tissot Watch",
        description: "Unisex watch",
        image: "men watch/men6.jpg",
        badge: "Best seller",
        currentPrice: 900,
        originalPrice: 950,
        inStock: true,
        category: ["men", "women","luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 17,
        name: "Seiko Astron",
        description: "Tough digital watch with smartphone link",
        image: "men watch/men7.jpg",
        badge: "Best Seller",
        currentPrice: 550,
        originalPrice: 600,
        inStock: true,
        category: ["men", "Luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 18,
        name: "Rolex 228206 Ice blue quadrant motif Day-Date 40 mm Po",
        description: "Luxury watch for men",
        image: "men watch/men8.jpg",
        badge: "Best Seller",
        currentPrice: 48800,
        originalPrice: 50000,
        inStock: true,
        category: ["luxury", "men"],
        cartIcon: "cart.png",
    },
    {
        id: 19,
        name: "The Rolex Datejust 41 in Yellow Rolesor",
        description: "The clasic Watch",
        image: "men watch/men9.jpg",
        badge: "Trending",
        currentPrice: 8950,
        originalPrice: 9500,
        inStock: true,
        category: ["luxury", "men"],
        cartIcon: "cart.png",
    },
    {
        id: 20,
        name: "iconic allure of diamond Rolex watches for men",
        description: "Luxury watch for men",
        image: "men watch/men10.jpg",
        badge: "Best seller",
        currentPrice: 79,
        originalPrice: 89,
        inStock: true,
        category: ["men", "luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 21,
        name: "Titan WorkwearWhite Dial Analog Leather Strap watch for Women",
        description: "Modern interpretation of a classic",
        image: "women watch/women1.webp",
        badge: "Best seller",
        currentPrice: 7800,
        originalPrice: 8500,
        inStock: true,
        category: ["luxury", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 22,
        name: "Titan Workwear White Dial Moonphase Stainless Steel Strap watch for women",
        description: "Modern interpretation of a classic",
        image: "women watch/women2.webp",
        badge: "Best Seller",
        currentPrice: 2790,
        originalPrice: 2990,
        inStock: true,
        category: [ "women"],
        cartIcon: "cart.png",
    },
    {
        id: 23,
        name: "Oyster Perpetual 28",
        description: "Oyster, 36 mm, white gold and diamonds",
        image: "women watch/women3.avif",
        badge: "New arrival",
        currentPrice: 1700400,
        originalPrice:1750000,
        inStock: true,
        category: ["luxury",  "women"],
        cartIcon: "cart.png",
    },
    {
        id: 24,
        name: "Day-Date 36 ",
        description: "Oyster, 36 mm, white gold and diamonds",
        image: "women watch/women4.avif",
        badge: "Trending",
        currentPrice: 1700400,
        originalPrice: 1705400,
        inStock: true,
        category: [ "women","luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 25,
        name: "Sutton Champagne Dial Gold Tone Stainless Steel Women's Watch",
        description: "Best watch for women ",
        image: "women watch/women5.jpg",
        badge: "Best seller",
        currentPrice: 29000,
        originalPrice: 29500,
        inStock: true,
        category: [ "luxury", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 26,
        name: "Womens Diamond Iced Out Rolex Datejust",
        description: "25 Carats Of Diamonds",
        image: "women watch/women6.jpg",
        badge: "New arrival",
        currentPrice: 4950,
        originalPrice: 5000,
        inStock: true,
        category: [ "women"],
        cartIcon: "cart.png",
    },
    {
        id: 27,
        name: "Stainless Steel Monogram Diamond 28mm Tambour Slim Quartz Watch",
        description: "Women watch",
        image: "women watch/women7.jpg",
        badge: "Best seller",
        currentPrice: 299,
        originalPrice: 349,
        inStock: true,
        category: [ "women"],
        cartIcon: "cart.png",
    },
    {
        id: 28,
        name: "The Louis Vuitton LV Fifty Five watch",
        description: "Best watch for Women",
        image: "women watch/women8.jpg",
        badge: "New Arrival",
        currentPrice:68000,
        originalPrice:7000,
        inStock: true,
        category: [ "luxury", "women",],
        cartIcon: "cart.png",
    },
    {
        id: 28,
        name: "Apple Watch Ultra [GPS + Cellular 49 mm]",
        description: "Titanium Case & Starlight Alpine Loop Large Fitness Tracker",
        image: "women watch/women9.jpg",
        badge: "New Arrival",
        currentPrice: 7000,
        originalPrice: 7500,
        inStock: true,
        category: ["Smartwatch", "men", "women","luxury"],
        cartIcon: "cart.png",
    },
    {
        id: 28,
        name: "TOUCH FITNESS TRACKER BLOOD PRESSURE ",
        description: "UNISEX 1.4 INCH P8 SMART WATCH",
        image: "women watch/women10.jpg",
        badge: "Best selller",
        currentPrice: 7650,
        originalPrice: 7750,
        inStock: true,
        category: ["Smartwatch", "men", "women"],
        cartIcon: "cart.png",
    },
    {
        id: 29,
        name: "Kid's Frozen 2 Digital Glitter Silicone Strap Watch 34mm ",
        description: "cool watches for kids",
        image: "kids collection/kids11.jpg",
        badge: "New arrival",
        currentPrice: 7850,
        originalPrice: 7950,
        inStock: true,
        category: ["kids"],
        cartIcon: "cart.png",
    },
    {
        id: 30,
        name: "ENOMIR Smart Watch for Women, Men",
        description: "Smartwatch with Alexa Built-in,Heart Rate SpO2 Sleep Monitor,5ATM Waterproof",
        image: "men watch/men11.jpg",
        badge: "Best Seller",
        currentPrice: 1234,
        originalPrice: 1345,
        inStock: true,
        category: ["luxury", "men","women","Smartwatch"
        ],
        cartIcon: "cart.png",
    },
    {
        id: 31,
        name: "Apple Watch Edition ",
        description: "42mm 18-Karat Rose Gold Case with White Sport Band ",
        image: "men watch/men12.jpg",
        badge: "Best seller",
        currentPrice: 6750,
        originalPrice: 7040,
        inStock: true,
        category: ["luxury", "men","women","Smartwatch"
        ],
        cartIcon: "cart.png",
    },
    {
        id: 32,
        name: "Apple Watch Edition ",
        description: "42mm 18-Karat Rose Gold Case with White Sport Band ",
        image: "men watch/men12.jpg",
        badge: "Best Seller",
        currentPrice: 7950,
        originalPrice: 8500,
        inStock: true,
        category: ["luxury", "men","women","Smartwatch"],
        cartIcon: "cart.png",
    },
    {
        id: 33,
        name: "Plain Silicone Watchband Compatible With Apple Watch",
        description: "42mm 18-Karat Rose Gold Case with White Sport Band ",
        image: "men watch/men13.jpg",
        badge: "Trending",
        currentPrice: 8000,
        originalPrice: 8500,
        inStock: true,
        category: ["luxury", "men","women","Smartwatch"],
        cartIcon: "cart.png",
    },
    {
        id: 33,
        name: "Pink Collar Silicone Plain Embellished Smart Watches",
        description: "42mm 18-Karat Rose Gold Case with White Sport Band ",
        image: "men watch/men14.jpg",
        badge: "Best seller",
        currentPrice: 9050,
        originalPrice: 9500,
        inStock: true,
        category: ["luxury", "men","women","Smartwatch"],
        cartIcon: "cart.png",
    },
    

]


const cart= [];

// Pagination functionality
let resultProducts = [
    ...products
];

let selectedCategory = "all products"
let searchText = ""
let selectedSort = "best match";



// function addToCart(product) {
//     cart.push({
//         quantity:1,
//         product: product,
//     });
//
//     console.log("cart.length: ", cart.length);
//
// }

function addToCart(product) {
    // Convert the string back to an object
    const productObj = JSON.parse(product.replace(/&quot;/g, '"'));

    // Add the product to the cart
    console.log("Product added to cart:", productObj);
    // Your logic to add the product to the cart goes here
}


// Function to display products
function displayProducts(products) {
    const productsGrid = document.getElementById('products_grid');


    productsGrid.innerHTML = products.map( product => `

                <div class="product-card">
                    <span class="badge">${product.badge}</span>
                    <img src="products image/${product.image}" alt="Product" class="product-image" />
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>

                    <div class="price-cart">
                        <div class="price">
                            <span class="current-price">$${product.currentPrice}</span>
                            <span class="original-price">$${product.originalPrice}</span>
                        </div>
                        <div class= "purchase">
                        <button class="buy-now">Buy now </button>
                        <button onclick="addToCart(${product})" class="cart"><img src="products image/cart.png" alt=""></button>
                
                    </div>
                       

                    </div>
                </div>
            `).join('');

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const randomIndex = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at i and randomIndex
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

function applyFilterSearchSort(){

    // Filter products
    let tempResultProducts;

    // category filter
    if (selectedCategory === 'all products') {
        // Show all products if "All Products" is clicked
        tempResultProducts = [...products];
    } else {
        // Filter products by category
        tempResultProducts = products.filter(product =>
            product.category.map(cat => cat.toLowerCase()).includes(selectedCategory)
        );
    }

    if (searchText !== ""){
        // Filter products based on search term
        tempResultProducts = tempResultProducts.filter(product => {
            const searchTermLower = searchText.toLowerCase();
            return (
                product.name.toLowerCase().includes(searchTermLower) ||
                product.description.toLowerCase().includes(searchTermLower)
            );
        });

    }

    tempResultProducts = shuffleArray(tempResultProducts);

    switch(selectedSort.toLowerCase()) {
        case 'price low to high':
            tempResultProducts.sort((a, b) => a.currentPrice - b.currentPrice);
            break;
        case 'price high to low':
            tempResultProducts.sort((a, b) => b.currentPrice - a.currentPrice);
            break;
        default:
          break;
    }

    resultProducts = tempResultProducts;
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
        selectedCategory = button.textContent.toLowerCase();

        console.log(selectedCategory);

        applyFilterSearchSort()

        // Display filtered products
        displayProducts(resultProducts);
    });
});


const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    searchText = e.target.value;
    applyFilterSearchSort()
    displayProducts(resultProducts);
})

const sortSelect = document.querySelector('.sort-bar select');
sortSelect.addEventListener('change', (e) => {
    selectedSort = e.target.value;
    applyFilterSearchSort()
    displayProducts(resultProducts);
})

// Modify your HTML buttons to remove anchor tags
// Initial display
displayProducts(resultProducts);



