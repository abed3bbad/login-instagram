script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Get the values from the input fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Display the input values (for demonstration purposes)
        console.log('Username:', username);
        console.log('Password:', password);

        // Here, you could send the data to a server using fetch or XMLHttpRequest
        // For example:
        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username, password })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    });
});