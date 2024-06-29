$(document).ready(function () {
  $("#toRegister").click(function () {
    $("#form-to-register").show();
    $("#form-to-login").hide();
  });

  $("#toLogin").click(function () {
    $("#form-to-login").show();
    $("#form-to-register").hide();
  });

  $("#form-to-register").submit(function (event) {
    if ($("#email").val().trim() === "" || $("#senha").val().trim() === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      event.preventDefault();
    }
  });

  $("#form-to-login").submit(function (event) {
    if (
      $("#emailLogin").val().trim() === "" ||
      $("#senhaLogin").val().trim() === ""
    ) {
      alert("Por favor, preencha seu e-mail e senha.");
      event.preventDefault();
    }
  });
});
