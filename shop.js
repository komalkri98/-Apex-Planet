const shopItems = [
    { id: 1, name: "Smartphone", price: 62999.00, category: "Electronics", description: "Latest model with high-res camera.", image: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2024/08/google-pixel-9-pro.png" },
    { id: 2, name: "T-Shirt", price: 899.00, category: "Clothing", description: "Comfortable cotton t-shirt.", image: "https://media.istockphoto.com/id/1607497623/photo/excited-woman-showing-her-white-mockup-t-shirt.jpg?s=612x612&w=0&k=20&c=gUEYOZZ9iLZEEr1Nq9P2Z6abCw_z5p6vvoQkuMQMFvU=" },
    { id: 3, name: "Novel", price: 2475.00, category: "Books",  description: "Bestselling mystery novel.", image: "https://media.istockphoto.com/id/167222757/photo/old-books-on-white-background.jpg?s=612x612&w=0&k=20&c=Z7id6x2ZtXK4dsRjzJvO2-pq0G3BPE0hMjPkYE8IK6E=" },
    { id: 4, name: "Laptop", price: 75699.00, category: "Electronics",  description: "Powerful laptop for work and gaming.", image: "https://media.istockphoto.com/id/1738752533/photo/a-view-of-a-computer-and-a-mobile-phone-on-an-office-desk.jpg?s=612x612&w=0&k=20&c=yTvkJtnPuFepIvXH2dYDIq72SfnkruvN7Flmy1_OEgs=" },
    { id: 5, name: "Jeans", price: 1599.00, category: "Clothing",  description: "Stylish denim jeans.", image: "https://media.istockphoto.com/id/186870715/photo/blue-jeans.jpg?s=612x612&w=0&k=20&c=MInRLnEABmDYzvxjnEiFBu1V20OaB1zHmgzCqUV5hzk=" },
    { id: 6, name: "Textbook", price: 599.00, category: "Books",  description: "Comprehensive science textbook.", image: "https://media.istockphoto.com/id/180731410/photo/books-in-home-shape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=sZNAExiRtGaHGc-601gDVl2WIDcBGC3bENaHCHi6ONw=" },
    { id: 7, name: "Headphones", price: 3254.00, category: "Electronics", description: "Noise-cancelling wireless headphones.", image: "https://avshack.in/cdn/shop/files/sonos-ace-wireless-white-01.jpg?v=1728627115&width=1214" },
    { id: 8, name: "Jacket", price: 4256.00, category: "Clothing", description: "Warm winter jacket.", image: "https://media.istockphoto.com/id/638571516/photo/black-leather-biker-jackets.jpg?s=612x612&w=0&k=20&c=D11ylLsB0-N31GdTlPznM3RJYp_wp5qYypnXfTIxUkE=" },
    { id: 9, name: "E-Reader", price: 1789.00, category: "Books", description: "Lightweight e-reader with long battery life.", image: "https://media.istockphoto.com/id/496202626/photo/boy-with-tablet.jpg?s=612x612&w=0&k=20&c=FV7aTM_pLBEVunP32LX237IHd5b8Rh_DhCimD7lm5zc=" }
];

function displayProducts(items) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h3 class="product-name">${item.name}</h3>
            <p class="product-price">₹${item.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(card);
    });
}

function getSortedAndFilteredItems() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(checkbox => checkbox.value);
    const sortChoice = document.getElementById('sort-options').value;

    let filteredItems = shopItems.filter(item =>
        selectedCategories.length === 0 || selectedCategories.includes(item.category)
    );

    if (sortChoice === 'price-asc') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortChoice === 'price-desc') {
        filteredItems.sort((a, b) => b.price - a.price);
    }

    return filteredItems;
}

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filter-toggle');
    const filterMenu = document.getElementById('filter-options');
    const applyButton = document.getElementById('apply-filter');
    const resetButton = document.getElementById('reset-filter');
    const sortDropdown = document.getElementById('sort-options');

    filterButton.addEventListener('click', () => {
        filterMenu.classList.toggle('hidden');
    });

    applyButton.addEventListener('click', () => {
        displayProducts(getSortedAndFilteredItems());
        filterMenu.classList.add('hidden');
    });

    sortDropdown.addEventListener('change', () => {
        displayProducts(getSortedAndFilteredItems());
    });

    resetButton.addEventListener('click', () => {
        document.querySelectorAll('.category-checkbox').forEach(checkbox => checkbox.checked = true);
        sortDropdown.value = 'price-asc';
        displayProducts(getSortedAndFilteredItems());
        filterMenu.classList.add('hidden');
    });

    displayProducts(getSortedAndFilteredItems());
});