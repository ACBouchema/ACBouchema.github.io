// Script extrait de index.html
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('[id$="-page"]').forEach(page => {
        page.classList.add('hidden');
    });
    // Show selected page
    document.getElementById(pageId + '-page').classList.remove('hidden');
    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
    // Scroll to top
    window.scrollTo(0, 0);
}

// Form submission
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
