let buttonRegister = document.getElementById("buttonRegister");

buttonRegister.addEventListener("click", function (event) {
  event.preventDefault();
  urlRegister = "../Register/index.html";

  window.location.href = urlRegister;
});
