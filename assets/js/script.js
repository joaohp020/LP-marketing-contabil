document.querySelectorAll('.btnPrincipal').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        const contatoSection = document.querySelector('.formulario'); // Alterar para o ID ou classe da seção de contato
        if (contatoSection) {
            contatoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// document.querySelectorAll('.btnSecundario').forEach(button => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault(); // Evita o comportamento padrão do link
//         const contatoSection = document.querySelector('.cards'); // Alterar para o ID ou classe da seção de contato
//         if (contatoSection) {
//             contatoSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });