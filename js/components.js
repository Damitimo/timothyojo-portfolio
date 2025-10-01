// Component loader for reusable HTML components
function loadComponent(componentName, targetElementId) {
    fetch(`components/${componentName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElementId).innerHTML = html;
            
            // If header was loaded, initialize mobile menu
            if (componentName === 'header') {
                initializeMobileMenu();
            }
        })
        .catch(error => {
            console.error(`Error loading component ${componentName}:`, error);
        });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    if (!menuButton) return;
    
    menuButton.addEventListener('click', function() {
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            // Close menu - animate back to hamburger
            mobileMenu.classList.add('hidden');
            mobileOverlay.classList.add('hidden');
            
            // Reset hamburger lines
            line1.style.transform = 'translateY(0px) rotate(0deg)';
            line2.style.opacity = '1';
            line3.style.transform = 'translateY(0px) rotate(0deg)';
        } else {
            // Open menu - animate to X
            mobileMenu.classList.remove('hidden');
            mobileOverlay.classList.remove('hidden');
            
            // Animate hamburger lines to X
            line1.style.transform = 'translateY(6px) rotate(45deg)';
            line2.style.opacity = '0';
            line3.style.transform = 'translateY(-6px) rotate(-45deg)';
        }
    });
    
    // Close menu when clicking overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            menuButton.click();
        });
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header if placeholder exists
    if (document.getElementById('header-placeholder')) {
        console.log('Loading header component...');
        loadComponent('header', 'header-placeholder');
    }
    
    // Create footer placeholder if it doesn't exist
    if (!document.getElementById('footer-placeholder')) {
        const footerPlaceholder = document.createElement('div');
        footerPlaceholder.id = 'footer-placeholder';
        document.body.appendChild(footerPlaceholder);
    }
    
    // Load footer component
    console.log('Loading footer component...');
    loadComponent('footer', 'footer-placeholder');
});
