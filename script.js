(function(){
  emailjs.init("SEU_USER_ID"); // Substitua aqui com seu userID
})();

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;

  const params = {
    nome: nome,
  };

  emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", params) // Substitua com seus IDs do EmailJS
    .then(function(response) {
      console.log("Email enviado com sucesso", response.status, response.text);
      document.getElementById('mensagem-enviada').style.display = "block";
      document.getElementById('form').reset();
    }, function(error) {
      console.error("Erro ao enviar email:", error);
    });
});
