// partial-loader.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('header-container');

    fetch('../partials/_navbar.html')
        .then(response => response.text())
        .then(data => {
            // Inject the partial content into the container
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the partial:', error);
        });
});