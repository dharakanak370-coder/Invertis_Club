// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuLine1 = document.getElementById('menuLine1');
const menuLine2 = document.getElementById('menuLine2');
const menuLine3 = document.getElementById('menuLine3');
let menuOpen = false;
mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) { mobileMenu.style.transform = 'translateX(0)'; menuLine1.style.transform = 'rotate(45deg) translate(4px, 4px)'; menuLine2.style.opacity = '0'; menuLine3.style.transform = 'rotate(-45deg) translate(2px, -2px)'; menuLine3.style.width = '1.25rem'; document.body.style.overflow = 'hidden'; }
    else { mobileMenu.style.transform = 'translateX(100%)'; menuLine1.style.transform = 'none'; menuLine2.style.opacity = '1'; menuLine3.style.transform = 'none'; menuLine3.style.width = '0.75rem'; document.body.style.overflow = ''; }
});
document.querySelectorAll('.mobile-nav-link').forEach(link => { link.addEventListener('click', () => { menuOpen = false; mobileMenu.style.transform = 'translateX(100%)'; menuLine1.style.transform = 'none'; menuLine2.style.opacity = '1'; menuLine3.style.transform = 'none'; menuLine3.style.width = '0.75rem'; document.body.style.overflow = ''; }); });

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { const s = window.pageYOffset; if (s > 100) { navbar.style.background = 'rgba(0,0,0,0.9)'; navbar.style.backdropFilter = 'blur(12px)'; navbar.style.borderBottom = '1px solid rgba(58,58,58,0.2)'; } else { navbar.style.background = 'transparent'; navbar.style.backdropFilter = 'none'; navbar.style.borderBottom = 'none'; } });

// Hero parallax
const heroImage = document.getElementById('heroImage');
window.addEventListener('scroll', () => { if (heroImage) { const s = window.pageYOffset; if (s < window.innerHeight) heroImage.style.transform = `translateY(${s * 0.3}px) scale(1.05)`; } });

// Scroll animations
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right').forEach(el => observer.observe(el));

// Counter
const counterObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const target = parseInt(entry.target.getAttribute('data-target')); let current = 0; const inc = target / 60; const timer = setInterval(() => { current += inc; if (current >= target) { entry.target.textContent = target; clearInterval(timer); } else entry.target.textContent = Math.floor(current); }, 30); counterObserver.unobserve(entry.target); } }); }, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const clubItems = document.querySelectorAll('.club-filter-item');
filterBtns.forEach(btn => { btn.addEventListener('click', () => { filterBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const f = btn.getAttribute('data-filter'); clubItems.forEach(item => { if (f === 'all' || item.getAttribute('data-category') === f) { item.style.opacity = '1'; item.style.transform = 'scale(1)'; item.style.display = 'block'; } else { item.style.opacity = '0.2'; item.style.transform = 'scale(0.98)'; } }); }); });

// Toast
function showToast(msg) { const t = document.getElementById('toastContainer'); document.getElementById('toastMessage').textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
function showClubToast(n) { showToast(`Explore ${n} — Club details coming soon!`); }

// Contact form
document.getElementById('invertisContactForm').addEventListener('submit', (e) => { e.preventDefault(); showToast('Thank you for your interest! We will get back to you soon.'); e.target.reset(); });

// Gallery scroll
const cg = document.getElementById('campusGallery');
if (cg) cg.addEventListener('wheel', (e) => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); cg.scrollLeft += e.deltaY; } }, { passive: false });

// Magnetic buttons
document.querySelectorAll('.magnetic-btn').forEach(btn => { btn.addEventListener('mousemove', (e) => { const r = btn.getBoundingClientRect(); const x = e.clientX - r.left - r.width / 2; const y = e.clientY - r.top - r.height / 2; btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`; }); btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0, 0) scale(1)'; }); });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', function(e) { const h = this.getAttribute('href'); if (h !== '#') { e.preventDefault(); const t = document.querySelector(h); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); });