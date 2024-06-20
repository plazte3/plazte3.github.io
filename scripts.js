document.getElementById('search').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let terms = document.querySelectorAll('.term');

    terms.forEach(function(term) {
        let termTitle = term.querySelector('h2').textContent.toLowerCase();
        if(termTitle.includes(searchTerm)) {
            term.style.display = '';
        } else {
            term.style.display = 'none';
        }
    });
});

document.querySelectorAll('.term').forEach(function(term) {
    term.addEventListener('click', function() {
        let title = term.querySelector('h2').textContent;
        let description = term.querySelector('p').textContent;
        showModal(title, description);
    });
});

function showModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
