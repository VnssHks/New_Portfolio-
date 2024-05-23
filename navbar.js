document.addEventListener('DOMContentLoaded', function() {

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;
                const navLinks = navbarPlaceholder.querySelectorAll('.nav-link');
                const currentPath = normalizePath(window.location.pathname);
                console.log('Current path:', currentPath);
                navLinks.forEach(link => {
                    const linkPath = normalizePath(link.getAttribute('href'));
                    console.log('Link path:', linkPath);
                    if (linkPath && linkPath === currentPath) {
                        link.classList.add('active');
                    }
                });
            } else {
                console.error('Navbar placeholder not found');
            }
        })
        .catch(error => console.error('Error fetching navbar:', error));
});

function normalizePath(path) {
    return '/' + path.replace(/^\/+|\/+$/g, '');
}
