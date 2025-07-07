document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  $(".apresentacao").hide().fadeIn(1000);
});

function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }
  alert("Mensagem enviada com sucesso!");
  return true;
}