document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.getAttribute('data-details');
        document.getElementById('details-text').textContent = details;
        document.getElementById('project-details').style.display = 'block';
    });
});

document.getElementById('close-details').addEventListener('click', () => {
    document.getElementById('project-details').style.display = 'none';
});