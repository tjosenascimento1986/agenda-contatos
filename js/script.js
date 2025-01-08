document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactsTableBody = document.getElementById('contacts-body');
    const submitButton = document.getElementById('submitButton');
    let editingContactId = null;


    const refreshContacts = () => {
        fetch('php/listar.php')
            .then(response => response.json())
            .then(contacts => {
                contactsTableBody.innerHTML = ''; // Limpar a tabela
                contacts.forEach(contact => {
                    const row = contactsTableBody.insertRow();
                    row.insertCell().textContent = contact.nome;
                    row.insertCell().textContent = contact.sobrenome;
                    row.insertCell().textContent = contact.telefone_fixo || '';
                    row.insertCell().textContent = contact.telefone_celular || '';
                    row.insertCell().textContent = contact.telefone_trabalho || '';
                    row.insertCell().textContent = contact.email_pessoal || '';
                    row.insertCell().textContent = contact.email_profissional || '';
                    row.insertCell().textContent = contact.endereco_residencial || '';
                    row.insertCell().textContent = contact.endereco_comercial || '';
                    row.insertCell().textContent = contact.aniversario || '';

                    const actionsCell = row.insertCell();
                    actionsCell.classList.add('action-buttons');

                    const editButton = document.createElement('button');
                    editButton.classList.add('edit-btn');
                    editButton.textContent = 'Editar';
                    editButton.addEventListener('click', () => editContact(contact));
                    actionsCell.appendChild(editButton);

                    const deleteButton = document.createElement('button');
                    deleteButton.classList.add('delete-btn');
                    deleteButton.textContent = 'Excluir';
                    deleteButton.addEventListener('click', () => deleteContact(contact.id));
                    actionsCell.appendChild(deleteButton);

                });
            })
            .catch(error => console.error('Erro ao buscar contatos:', error));
    };

    const submitForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);

        const url = editingContactId ? 'php/editar.php' : 'php/adicionar.php';

        if (editingContactId) {
           formData.set('id', editingContactId);
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

           if (response.ok) {
               alert(editingContactId ? 'Contato editado com sucesso!' : 'Contato adicionado com sucesso!');
               contactForm.reset();
               editingContactId = null;
               submitButton.textContent = "Adicionar Contato";
               refreshContacts();
            } else {
                console.error('Erro ao enviar formulário:', response.status);
                alert('Erro ao processar o formulário.');
            }
           } catch (error) {
           console.error('Erro de rede:', error);
           alert('Ocorreu um erro de rede.');
         }
    };

    const editContact = (contact) => {
        editingContactId = contact.id;
        document.getElementById('nome').value = contact.nome;
        document.getElementById('sobrenome').value = contact.sobrenome;
        document.getElementById('telefone_fixo').value = contact.telefone_fixo || '';
        document.getElementById('telefone_celular').value = contact.telefone_celular || '';
        document.getElementById('telefone_trabalho').value = contact.telefone_trabalho || '';
        document.getElementById('email_pessoal').value = contact.email_pessoal || '';
        document.getElementById('email_profissional').value = contact.email_profissional || '';
        document.getElementById('endereco_residencial').value = contact.endereco_residencial || '';
        document.getElementById('endereco_comercial').value = contact.endereco_comercial || '';
        document.getElementById('aniversario').value = contact.aniversario || '';
        submitButton.textContent = "Salvar Edição";
    };

    const deleteContact = (id) => {
       if (confirm('Tem certeza que deseja excluir este contato?')) {
           fetch('php/excluir.php', {
               method: 'POST',
               headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
               body: 'id=' + id
            })
           .then(response => {
               if (response.ok) {
                  alert('Contato excluído com sucesso!');
                  refreshContacts();
               } else {
                   console.error('Erro ao excluir contato:', response.status);
                   alert('Erro ao excluir contato.');
               }
            })
           .catch(error => console.error('Erro ao excluir contato:', error));
       }
    };

    contactForm.addEventListener('submit', submitForm);
    refreshContacts();
});