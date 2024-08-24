document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (username && comment) {
        addComment(username, comment);
        document.getElementById('commentForm').reset();
        updateCharCount();
    } else {
        alert('Por favor, completa ambos campos antes de enviar el comentario.');
    }
});

document.getElementById('comment').addEventListener('input', updateCharCount);

function updateCharCount() {
    const comment = document.getElementById('comment');
    const charCount = document.getElementById('charCount');
    const remaining = 200 - comment.value.length;
    charCount.textContent = `${remaining} caracteres restantes`;
}

function addComment(username, comment) {
    const commentsList = document.getElementById('commentsList');
    const commentItem = document.createElement('li');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `
        <strong>${username}</strong> dice:
        <p>${comment}</p>
        <button onclick="deleteComment(this)">Eliminar</button>
    `;

    commentsList.appendChild(commentItem);
}

function deleteComment(button) {
    const commentItem = button.parentElement;
    commentItem.remove();
}
