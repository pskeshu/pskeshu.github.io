# pskeshu.github.io

This site is organized for maintainability and ease of updates.

## Structure

```
pskeshu.github.io/
├── assets/
│   ├── css/
│   │   ├── main.css          # Global styles (colors, fonts, layout)
│   │   ├── components.css    # Navigation, header, reusable components
│   │   └── pages.css         # Page-specific overrides
│   ├── js/
│   │   ├── main.js           # Global JavaScript & components
│   │   └── utils.js          # Utility functions
│   └── images/               # Site images (if any)
├── index.html                # Homepage
├── about.html                # About page
├── cv.html                   # CV page  
├── software.html             # Software page
├── poems.html                # Poems page
├── README.md
└── .nojekyll                 # Bypass Jekyll processing
```

## Maintenance
- **Styles:** Edit CSS in `assets/css/` for global or page-specific changes.
- **Navigation/Header:** Update navigation in `assets/js/main.js` (single source of truth).
- **Scripts:** Place shared JS in `assets/js/`.
- **Images:** Store images in `assets/images/`.

## How to Add a New Page
1. Create a new HTML file.
2. Add a link in the navigation array in `assets/js/main.js`.
3. Add any page-specific styles to `assets/css/pages.css` if needed.

---

This structure ensures easy updates and a professional workflow. 