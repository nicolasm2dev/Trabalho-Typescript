type Comentario = {
    name: string;
    comment: string;
};

const comentarios: Comentario[] = [];

function renderizarComentarios(): void {
    const commentsList = document.getElementById('comments-list') as HTMLElement;

    if (!commentsList) return;

    commentsList.innerHTML = '';

    if (comentarios.length === 0) {
        commentsList.innerHTML = '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>';
        return;
    }

    comentarios.forEach((comment: Comentario) => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${comment.name}:</strong> <p>${comment.comment}</p>`;
        commentsList.appendChild(commentElement);
    });
}

const form = document.getElementById('comment-form') as HTMLFormElement;

if (form) {
    form.addEventListener('submit', function (event: Event): void {
        event.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const commentInput = document.getElementById('comment') as HTMLInputElement;

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name && comment) {
            comentarios.push({ name, comment });
            renderizarComentarios();

            nameInput.value = '';
            commentInput.value = '';
        }
    });
}

renderizarComentarios();
