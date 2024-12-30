// Shopping Cart Functionality
let cart = [];

function addToCart(productId, name, price) {
    cart.push({
        id: productId,
        name: name,
        price: price,
        quantity: 1
    });
    updateCartUI();
    showNotification('تمت إضافة المنتج إلى السلة');
}

function updateCartUI() {
    // Update cart icon with number of items
    const cartCount = document.createElement('span');
    cartCount.className = 'badge bg-danger rounded-pill';
    cartCount.textContent = cart.length;
    // Update cart icon here
}

// Product Search Functionality
document.querySelector('form.d-flex').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input').value.trim();
    if (searchTerm) {
        searchProducts(searchTerm);
    }
});

function searchProducts(term) {
    // Implement product search functionality
    console.log('Searching for:', term);
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 15px 25px;
        border-radius: 4px;
        animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Initialize tooltips and popovers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Bootstrap popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// Product Image Gallery
function initializeGallery() {
    const productImages = document.querySelectorAll('.product-card img');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            // Implement image gallery view
            console.log('Opening gallery for:', this.alt);
        });
    });
}

// Responsive Navigation
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.product-card');
            if (card) {
                const productName = card.querySelector('.card-title').textContent;
                const productPrice = card.querySelector('.price').textContent;
                addToCart(Date.now(), productName, productPrice);
            }
        });
    });
});
