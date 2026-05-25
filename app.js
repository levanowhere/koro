/* ─── Hamburger menu ─── */
document.getElementById('navToggle').addEventListener('click', function () {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
    this.textContent = links.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('navToggle').textContent = '☰';
    });
});

/* ─── Lyrics toggle ─── */
function toggleLyrics(btn) {
    const box = btn.nextElementSibling;
    const isOpen = box.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.querySelector('span').textContent = isOpen ? '▲' : '▼';
    btn.lastChild.textContent = isOpen ? ' Hide Lyrics' : ' Show Lyrics';
}

/* ─── Back to top button ─── */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));