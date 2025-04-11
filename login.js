function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login erfolgreich!');
    } else {
        alert('Ungültige Anmeldedaten!');
    }
}