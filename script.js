const video = document.getElementById("camera");
const tirarFotoBtn = document.getElementById("tirarFoto");
const confirmacao = document.getElementById("confirmacao");
const mensagem = document.getElementById("mensagem");

// Esconde o botão no início
tirarFotoBtn.style.display = "none";

// Ativa câmera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;

    // Simulação: após 3s, botão aparece (como se detectasse o rosto)
    setTimeout(() => {
      mensagem.textContent = "Rosto detectado! Agora tire a foto.";
      tirarFotoBtn.style.display = "inline-block";
    }, 3000);
  })
  .catch(err => {
    alert("Erro ao acessar câmera: " + err);
  });

tirarFotoBtn.addEventListener("click", () => {
  mensagem.textContent = "Verificando rosto...";
  tirarFotoBtn.style.display = "none";

  setTimeout(() => {
    confirmacao.style.display = "block";
    mensagem.textContent = "";

    setTimeout(() => {
      window.location.href = "proxima-parte.html";
    }, 2000);
  }, 2000);
});

// Registro do Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}