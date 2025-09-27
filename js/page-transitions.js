// Page Transition System
class PageTransitions {
    constructor() {
        this.init();
    }

    init() {
        // Create transition elements
        this.createTransitionElements();
        
        // Handle page load
        this.handlePageLoad();
        
        // Handle navigation clicks
        this.handleNavigation();
    }

    createTransitionElements() {
        // Create overlay for loading screen
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        overlay.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(overlay);

        // Create page reveal element
        const reveal = document.createElement('div');
        reveal.className = 'page-reveal';
        document.body.appendChild(reveal);

        this.overlay = overlay;
        this.reveal = reveal;
    }

    handlePageLoad() {
        // Show loading on page load
        document.body.classList.add('page-loading');
        
        // Simulate loading time (you can adjust this)
        setTimeout(() => {
            this.hideLoading();
        }, 800);
    }

    hideLoading() {
        // Hide loading overlay
        this.overlay.classList.add('hidden');
        
        // Show page reveal animation
        this.reveal.classList.add('active');
        
        // Remove loading class from body
        document.body.classList.remove('page-loading');
        document.body.classList.add('page-loaded');
        
        // Clean up after animation
        setTimeout(() => {
            this.overlay.style.display = 'none';
            this.reveal.classList.remove('active');
            this.reveal.style.display = 'none';
        }, 600);
    }

    handleNavigation() {
        // Handle all internal navigation links
        const links = document.querySelectorAll('a[href^="#"], a[href$=".html"], a[href^="/"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Only animate for page navigation (not anchor links)
                if (href && (href.endsWith('.html') || href.startsWith('/'))) {
                    e.preventDefault();
                    this.animatePageTransition(href);
                }
            });
        });
    }

    animatePageTransition(url) {
        // Show page reveal animation
        this.reveal.style.display = 'block';
        this.reveal.classList.add('active');
        
        // After reveal animation, navigate
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }

    // Method to trigger transition programmatically
    transitionTo(url) {
        this.animatePageTransition(url);
    }
}

// Initialize page transitions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PageTransitions();
});
