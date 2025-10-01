// Component loader for reusable HTML components
function loadComponent(componentName, targetElementId) {
    fetch(`components/${componentName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElementId).innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading component ${componentName}:`, error);
        });
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
