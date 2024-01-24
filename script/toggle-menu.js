document.addEventListener('DOMContentLoaded', function () {
    function toggleMenu() {
        var mobileMenu = document.getElementById('navbar-hamburger');
        mobileMenu.classList.toggle('open');
    }
    toggleMenu()
});