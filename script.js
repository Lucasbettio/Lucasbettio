// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Popup de sucesso ao enviar formulário
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.user-entry form');
    const modal = document.getElementById('success-modal');
    const closeBtn = document.getElementById('close-success');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            fetch('https://formsubmit.co/ajax/lucassbettio@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    modal.style.display = 'block';
                    form.reset();
                } else {
                    alert('Erro ao enviar. Tente novamente.');
                }
            })
            .catch(() => {
                alert('Erro ao enviar. Tente novamente.');
            });
        });
    }

    // Fecha o modal ao clicar no X
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Fecha o modal ao clicar fora dele
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});