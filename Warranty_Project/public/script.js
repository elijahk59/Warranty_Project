document.addEventListener('DOMContentLoaded', function() {
    const warrantyForm = document.getElementById('warrantyForm');

    warrantyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(warrantyForm);

        fetch('/submit-warranty-claim', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Warranty claim submitted successfully!');
                warrantyForm.reset();
            } else {
                alert('There was an error submitting your claim. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your claim. Please try again.');
        });
    });
});