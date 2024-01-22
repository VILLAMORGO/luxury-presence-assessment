// partial-loader.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('fixed-btn-span');

    fetch('/partials/_fixed-btn-span-loader.html')
        .then(response => response.text())
        .then(data => {
            // Inject the partial content into the container
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the partial:', error);
        });

    console.log("intro loader loaded");
});