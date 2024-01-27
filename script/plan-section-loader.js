// partial-loader.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('comprehensive-plan-section');

    fetch('/partials/_comprehensive-plan-section.html')
        .then(response => response.text())
        .then(data => {
            // Inject the partial content into the container
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the partial:', error);
        });
});