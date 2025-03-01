document.getElementById('revealButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    if (message.style.display === 'none') {
        message.style.display = 'block';
        this.textContent = 'Hide Message';
    } else {
        message.style.display = 'none';
        this.textContent = 'Reveal Message';
    }
});