// Inject navigation header
const navLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'About', href: 'about.html' },
    { name: 'CV', href: 'cv.html' },
    { name: 'Software', href: 'software.html' },
    { name: 'Poems', href: 'poems.html' }
];

const profileLinks = [
    {
        name: 'Google Scholar',
        href: 'https://scholar.google.com/citations?user=RkV_7foAAAAJ&hl=en',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/pskeshu/',
    }
];

function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navLinksContainer = document.createElement('div');
    navLinksContainer.style.display = 'flex';
    navLinksContainer.style.gap = '0.2rem';
    navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.name;
        if (window.location.pathname.endsWith(link.href)) {
            a.setAttribute('aria-current', 'page');
        }
        navLinksContainer.appendChild(a);
    });
    nav.appendChild(navLinksContainer);

    // Profile links (text)
    const profileLinksContainer = document.createElement('div');
    profileLinksContainer.style.display = 'flex';
    profileLinksContainer.style.gap = '0.5rem';
    profileLinksContainer.style.marginLeft = 'auto';
    profileLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.name;
        a.setAttribute('aria-label', link.name);
        a.setAttribute('title', link.name);
        profileLinksContainer.appendChild(a);
    });
    nav.appendChild(profileLinksContainer);

    header.appendChild(nav);
    return header;
}

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('site-header');
    if (headerContainer) {
        headerContainer.appendChild(createHeader());
    }

    // Scroll behavior
    let lastScroll = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('hide');
            return;
        }
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            header.classList.remove('hide');
        }
        lastScroll = currentScroll;
    });
}); 