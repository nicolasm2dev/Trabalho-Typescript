var comentarios = [];
function renderizarComentarios() {
    var commentsList = document.getElementById('comments-list');
    if (!commentsList)
        return;
    commentsList.innerHTML = '';
    if (comentarios.length === 0) {
        commentsList.innerHTML = '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>';
        return;
    }
    comentarios.forEach(function (comment) {
        var commentElement = document.createElement('div');
        commentElement.innerHTML = "<strong>".concat(comment.name, ":</strong> <p>").concat(comment.comment, "</p>");
        commentsList.appendChild(commentElement);
    });
}
var form = document.getElementById('comment-form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name');
        var commentInput = document.getElementById('comment');
        var name = nameInput.value.trim();
        var comment = commentInput.value.trim();
        if (name && comment) {
            comentarios.push({ name: name, comment: comment });
            renderizarComentarios();
            nameInput.value = '';
            commentInput.value = '';
        }
    });
}
renderizarComentarios();
