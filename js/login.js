document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('.holder');

    if (!loginForm) {
        console.error("Login form not found");
        return;
    }

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.querySelector('#password').value;

        const storedUser = localStorage.getItem(username);
        if(!storedUser){
            alert('No user data found! Please sign up first.');
            return ;
        }
        if (password === storedUser) {
            alert('Login successful!');
            console.log('User logged in:', { username });
            window.location.href = '../index.html';
        }
        
        else{
            alert("invalid password or username");
        }
    });
});
