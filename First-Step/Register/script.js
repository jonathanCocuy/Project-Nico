let buttonLogin = document.getElementById('buttonLogin');

buttonLogin.addEventListener('click', function(event) {
    event.preventDefault();
    urlLogin = "../Login/index.html";

    window.location.href = urlLogin;
});