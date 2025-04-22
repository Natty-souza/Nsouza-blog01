// Lista de comentários armazenados
const comentarios = [];

// Função para adicionar um novo comentário
function adicionarComentario() {
    const novoComentario = document.getElementById('novoComentario').value;

    if (novoComentario.trim() === "") {
        alert("Por favor, escreva algo antes de adicionar!");
        return;
    }

    comentarios.push(novoComentario); // Adiciona o comentário à lista
    document.getElementById('novoComentario').value = ""; // Limpa o campo
    renderizarComentarios(); // Atualiza a lista exibida
}

// Função para renderizar os comentários na página
function renderizarComentarios() {
    const lista = document.getElementById('listaComentarios');
    lista.innerHTML = ""; // Limpa os comentários existentes

    comentarios.forEach(comentario => {
        const li = document.createElement('li');
        li.textContent = comentario;
        lista.appendChild(li);
    });
}

// Função para navegar para outra página
function entrarNosComentarios() {
    window.location.href = "comentarios.html";
}
