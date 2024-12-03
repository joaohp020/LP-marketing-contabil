document.querySelectorAll('.btnPrincipal').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const contatoSection = document.querySelector('.formulario'); // Alterar para o ID ou classe da seção de contato
        if (contatoSection) {
            contatoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});