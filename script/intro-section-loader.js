// partial-loader.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('intro-section');

    fetch('/partials/_intro-section.html')
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