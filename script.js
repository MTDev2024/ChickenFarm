
// Simple cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('flex-col');
        mobileMenu.classList.toggle('absolute');
        mobileMenu.classList.toggle('top-16');
        mobileMenu.classList.toggle('left-0');
        mobileMenu.classList.toggle('right-0');
        mobileMenu.classList.toggle('bg-green-800');
        mobileMenu.classList.toggle('p-4');
        mobileMenu.classList.toggle('space-y-4');
    });
    
    // Product quantity controls
    const minusButtons = document.querySelectorAll('[class*="rounded-l"]');
    const plusButtons = document.querySelectorAll('[class*="rounded-r"]');
    const quantityDisplays = document.querySelectorAll('[class*="bg-white px-4"]');
    
    minusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantityDisplays[index].textContent);
            if (quantity > 0) {
                quantity--;
                quantityDisplays[index].textContent = quantity;
                updateCartTotal();
            }
        });
    });
    
    plusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantityDisplays[index].textContent);
            quantity++;
            quantityDisplays[index].textContent = quantity;
            updateCartTotal();
        });
    });
    
    function updateCartTotal() {
        // This is a simplified version - in a real app you would calculate based on actual prices
        let total = 0;
        quantityDisplays.forEach((display, index) => {
            const quantity = parseInt(display.textContent);
            // Simplified pricing - in reality you'd get this from data attributes
            const price = index === 0 ? 3.5 : (index === 1 ? 6.5 : 5.0);
            total += quantity * price;
        });
        
        document.querySelector('[class*="flex justify-between font-bold text-lg"] span:last-child').textContent = total.toFixed(2) + '€';
        document.querySelector('[class*="flex justify-between mb-2"] span:last-child').textContent = total.toFixed(2) + '€';
    }
    
    // Stripe payment button
    const stripeButton = document.querySelector('.stripe-button');
    stripeButton.addEventListener('click', function() {
        // In a real implementation, this would initialize Stripe checkout
        alert('Le paiement Stripe serait initialisé ici avec votre clé API.');
    });
    
    // PayPal payment button
    const paypalButton = document.querySelector('.bg-blue-600');
    paypalButton.addEventListener('click', function() {
        // In a real implementation, this would initialize PayPal checkout
        alert('Le paiement PayPal serait initialisé ici avec votre clé API.');
    });
});
