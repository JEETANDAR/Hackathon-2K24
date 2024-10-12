
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
                setTimeout(() => {
                    window.location.reload();  // Reload page after successful form submission
                }, 2000);
            })
            .catch(error => {
                console.error('Error!', error.message);  // Handle errors if submission fails
            });
    });
});


function submitEvent() {
    // hidding the button
    let submit_btn = document.getElementById('submit_div');
    submit_btn.style.visibility = 'hidden';
    let messageOutput = document.getElementById('SubmitMessage');

    // making all the inputs read only
    const ele_ID = ['Name', 'email_id', 'phone_no', 'classSelect', 'nfs', 'pes', 'halo', 'bgmi', 'free_fire', 'idea_presentation'];
    ele_ID.forEach(ele => {
        document.getElementById(ele).readOnly = true;
    });

    // Displaying message
    let name = document.getElementById('Name').value.trim();
    const message = `<p>Hey ${name}, thank you for registering for Hackathon 2024! Get ready for an exciting journey ahead – we can’t wait to see you in action!</p>`
    messageOutput.innerHTML = message
}