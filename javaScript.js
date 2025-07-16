const blocos = document.querySelectorAll('.links');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
});

blocos.forEach(bloco => observador.observe(bloco));

function codes() {
  const code = prompt("Digite o código");
  const imagem = document.getElementById("cabeçalho");
  if (code === "sonic") {
      imagem.style.backgroundImage = "url(https://deadline.com/wp-content/uploads/2024/12/sonic3_Cb8f9IP.webp?w=1024)";
  } if (code === "ronaldinho") {
      imagem.style.backgroundImage = "url(https://images.steamusercontent.com/ugc/11968520461081732951/07A130F7BC6FCADE888F055751F15EFAA97D281A/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)";
  }
  
};