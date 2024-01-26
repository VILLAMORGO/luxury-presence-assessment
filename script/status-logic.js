// status-logic.js

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // Get the form inputs using specific IDs
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const messagesTextarea = document.getElementById('messagesTextarea');
        const submitButton = document.getElementById('submit-button');
        const statusPlaceholders = document.querySelectorAll('.status-placeholder');

        // Placeholder for setLoading
        function setLoading(isLoading) {
            // Implement your setLoading logic here
        }

        // Log success message
        console.log('status-logic.js loaded successfully');

        // Add event listeners for input changes to enable/disable the submit button
        nameInput.addEventListener('input', updateSubmitButtonState);
        emailInput.addEventListener('input', updateSubmitButtonState);
        messagesTextarea.addEventListener('input', updateSubmitButtonState);

        function updateSubmitButtonState() {
            const allInputsFilled = nameInput.value && emailInput.value && messagesTextarea.value !== "";
            submitButton.disabled = !allInputsFilled;
        }

        // Trigger the initial state of the submit button
        updateSubmitButtonState();


        // Function to set status and update the status element
        function setStatus(message) {
            statusPlaceholders.forEach(placeholder => {
                placeholder.textContent = message;
            });
        }
    }, 100);
});



