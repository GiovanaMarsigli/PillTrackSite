document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', updateActiveLink);

    updateActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    
});
