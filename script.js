document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const likeIcon = post.querySelector('.like-icon');
        const commentIcon = post.querySelector('.comment-icon');
        const dmIcon = post.querySelector('.dm-icon');
        const likesCountElement = post.querySelector('.likes-count');

        likeIcon.addEventListener('click', () => handleLike(likeIcon, likesCountElement));
        commentIcon.addEventListener('click', () => handleComment(post));
        dmIcon.addEventListener('click', () => handleDM(post));
    });
});

function handleLike(icon, likesCountElement) {
    icon.classList.toggle('liked');
    highlightIcon(icon);

    let currentLikes = parseInt(likesCountElement.textContent);
    currentLikes += icon.classList.contains('liked') ? 1 : -1;
    likesCountElement.textContent = `${currentLikes} like${currentLikes !== 1 ? 's' : ''}`;
}

function handleComment(post) {
    const commentIcon = post.querySelector('.comment-icon');
    highlightIcon(commentIcon);

    const comment = prompt('Write a comment:');
    if (comment) {
        const commentsContainer = post.querySelector('.comments');
        const newComment = document.createElement('p');
        newComment.innerHTML = `<span class="username">sunqfu</span> ${comment}`;
        commentsContainer.appendChild(newComment);
    }
}

function handleDM(post) {
    const dmIcon = post.querySelector('.dm-icon');
    highlightIcon(dmIcon);

    const username = post.querySelector('.name').textContent;
    alert(`Sending a DM to ${username}...`);
}

function highlightIcon(icon) {
    icon.classList.add('highlighted');
    setTimeout(() => icon.classList.remove('highlighted'), 300);
}

