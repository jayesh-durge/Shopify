document.querySelector('.holder').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("Form submission prevented");
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const repss = document.getElementById('repassword').value;
        if(password!==repss){
            alert("invalid captch !");
            return;
        }
        const user={
            Name:name,
            Email:email,
            Password:password
        };
        localStorage.setItem(name,password);
        localStorage.setItem("user",name);
        console.log("User data saved:", user);
        alert("your account is created successfully");
        window.location.href = '../index.html';
});