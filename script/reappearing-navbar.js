// reappearingNavbar.js
function handleScroll() {

    function onScroll() {

        const nav = document.querySelector(".reappearing-navbar");
        let lastScrollY = window.scrollY;
    
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                nav.classList.add("reappearing-navbar--hidden");
            } else {
                nav.classList.remove("reappearing-navbar--hidden");
            }

            lastScrollY = window.scrollY;
        });
    }

    // Attach the scroll event listener when the DOM content is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', onScroll);
    });
}
handleScroll()