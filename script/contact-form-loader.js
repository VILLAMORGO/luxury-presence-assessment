// contact-form-loader.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('contact-me-form-modal');

    fetch('/partials/_contact-me-form.html')
        .then(response => response.text())
        .then(data => {
            // Inject the partial content into the container
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the partial:', error);
        });
        console.log('contact-form-loader.js is loaded')
});

