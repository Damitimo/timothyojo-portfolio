// Page Transition System - Webflow Style
class PageTransitions {
    constructor() {
        this.init();
    }

    init() {
        // Load Lottie library first
        this.loadLottieLibrary().then(() => {
            // Create transition elements
            this.createTransitionElements();
            
            // Handle page load
            this.handlePageLoad();
            
            // Handle navigation clicks
            this.handleNavigation();
        });
    }

    loadLottieLibrary() {
        return new Promise((resolve) => {
            if (typeof lottie !== 'undefined') {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        });
    }

    createTransitionElements() {
        // Create loader overlay (Webflow style)
        const loader = document.createElement('div');
        loader.className = 'loader-hide-me';
        
        // Create spinner container
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        spinner.id = 'lottie-spinner';
        
        loader.appendChild(spinner);
        document.body.appendChild(loader);

        // Create page reveal element
        const reveal = document.createElement('div');
        reveal.className = 'page-reveal';
        document.body.appendChild(reveal);

        this.loader = loader;
        this.spinner = spinner;
        this.reveal = reveal;
        
        // Initialize Lottie animation
        this.initLottieAnimation();
    }

    initLottieAnimation() {
        if (typeof lottie !== 'undefined') {
            this.lottieAnimation = lottie.loadAnimation({
                container: this.spinner,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'loading-icon.json',
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid meet'
                }
            });
        }
    }

    handlePageLoad() {
        // Show loading on page load (Webflow style)
        document.body.classList.add('page-loading');
        this.loader.classList.add('show');
        
        // Add content loading class to main content
        const contentSections = document.querySelectorAll('.content-section, main, #hero, #experience, #projects');
        contentSections.forEach(section => {
            section.classList.add('loading');
        });
        
        // Simulate loading time
        setTimeout(() => {
            this.hideLoading();
        }, 1200);
    }

    hideLoading() {
        // Hide loader (slide up)
        this.loader.classList.remove('show');
        this.loader.classList.add('hide');
        
        // Remove loading class from body and content
        document.body.classList.remove('page-loading');
        document.body.classList.add('page-loaded');
        
        const contentSections = document.querySelectorAll('.content-section, main, #hero, #experience, #projects');
        contentSections.forEach(section => {
            section.classList.remove('loading');
        });
        
        // Clean up after animation
        setTimeout(() => {
            this.loader.style.display = 'none';
            this.reveal.style.display = 'none';
        }, 800);
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
        // Show page reveal animation (Webflow style)
        this.reveal.style.display = 'block';
        this.reveal.classList.add('active');
        
        // Add loading class to content sections
        const contentSections = document.querySelectorAll('.content-section, main, #hero, #experience, #projects');
        contentSections.forEach(section => {
            section.classList.add('loading');
        });
        
        // After reveal animation, navigate
        setTimeout(() => {
            window.location.href = url;
        }, 400);
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
