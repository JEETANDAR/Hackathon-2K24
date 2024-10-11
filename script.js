document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyIY51xXM_U_sDn-kwpPYQr1cPbE0b0aScv3ErpYixShxKU5asaU23X5trzBaYkvP-cqQ/exec';  // Replace with your script URL
    const form = document.forms['contact-form'];  // Ensure the form name matches
    
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        // Use fetch to send form data to Google Apps Script
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
            mode: 'no-cors'
        })
            .then(response => {
                alert('Thank you for submitting the form successfully');  // Confirmation message
            })
            .then(() => {
                window.location.reload();  // Reload page after successful form submission
            })
            .catch(error => {
                console.error('Error!', error.message);  // Handle errors if submission fails
            });
    });
});
