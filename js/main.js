/* FILE: script.js */
// Basic interactivity: handle form submit (mock) and gallery clicks
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enquiryForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Enquiry sent! We will contact you shortly. (This is a demo)');
    });

    // Make gallery images clickable to open in new tab (simple lightbox behaviour)
    document.querySelectorAll('.gallery-card img, .related-card img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            window.open(img.src, '_blank');
        });
    });
});