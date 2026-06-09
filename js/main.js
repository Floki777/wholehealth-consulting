// ── MAIN ─────────────────────────────────────────────────
console.log('Whole Health Consulting — Built with purpose.');

// ── AFFILIATE LINK TRACKER (placeholder) ─────────────────
document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('Affiliate click:', link.closest('.product-card').querySelector('h4').textContent);
    });
});