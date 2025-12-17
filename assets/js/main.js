// Simple navigation header
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about.html' },
    { name: 'Work', href: '/work.html' },
    { name: 'Software', href: '/software.html' },
    { name: 'Blog', href: '/blog/' }
];

const profileLinks = [
    { name: 'GitHub', href: 'https://github.com/pskeshu/' },
    { name: 'Scholar', href: 'https://scholar.google.com/citations?user=RkV_7foAAAAJ' }
];

function isCurrentPage(href) {
    const path = window.location.pathname;
    if (href === '/') {
        return path === '/' || path === '/index.html';
    }
    const page = href.replace('.html', '').replace(/^\//, '');
    return path.includes(page);
}

function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const navLinksDiv = document.createElement('div');
    navLinksDiv.className = 'nav-links';
    navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.name;
        if (isCurrentPage(link.href)) {
            a.setAttribute('aria-current', 'page');
        }
        navLinksDiv.appendChild(a);
    });

    const profileDiv = document.createElement('div');
    profileDiv.className = 'nav-profile';
    profileLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.name;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        profileDiv.appendChild(a);
    });

    nav.appendChild(navLinksDiv);
    nav.appendChild(profileDiv);
    header.appendChild(nav);
    return header;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('site-header');
    if (container) {
        container.appendChild(createHeader());
    }

    // Simple scroll hide
    let lastScroll = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const current = window.pageYOffset;
        if (current > lastScroll && current > 100) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        lastScroll = current;
    });
});
