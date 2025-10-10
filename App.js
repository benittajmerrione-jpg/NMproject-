document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const categorySelect = document.getElementById('category-select');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Function to fetch and display products
    const fetchProducts = async () => {
        try {
            const category = categorySelect.value;
            const sort = sortSelect.value;
            const searchTerm = searchInput.value;

            let url = `/products?`;
            if (category) {
                url += `category=${category}&`;
            }
            if (sort) {
                url += `sort=${sort}&`;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const products = await response.json();

            // Filter products client-side for search
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            renderProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
            productList.innerHTML = '<p class="error-message">Failed to load products. Please try again later.</p>';
        }
    };

    // Function to render product cards
    const renderProducts = (products) => {
        productList.innerHTML = '';
        if (products.length === 0) {
            productList.innerHTML = '<p class="no-products">No products found.</p>';
            return;
        }
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const imagePlaceholder = product.name.charAt(0).toUpperCase();
            
            productCard.innerHTML = `
                <div class="product-image">${imagePlaceholder}</div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p>${product.description}</p>
                    <div class="price">$${product.price.toFixed(2)}</div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    };

    // Event listeners for controls
    categorySelect.addEventListener('change', fetchProducts);
    sortSelect.addEventListener('change', fetchProducts);
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      fetchProducts();
    });
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        fetchProducts();
      }
    });

    // Initial fetch of products
    fetchProducts();
});