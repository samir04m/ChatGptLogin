const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(`Username: ${username.value}, Password: ${password.value}`);
    if (username.value == 'admin' && password.value == '1234') {
        console.log('Usuario correcto');
        window.location.href = "home.html";
    } else {
        alert('Username or password is invalid');
    }

    //form.reset();
});
