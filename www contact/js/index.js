document.addEventListener("DOMContentLoaded", function () {
    var ajoutBtn = document.getElementById('ajoutBtn');
    ajoutBtn.addEventListener("click", toggleAddContactForm);

    var enregistrerBtn = document.getElementById('enregistrerBtn');
    enregistrerBtn.addEventListener("click", addContact);

    // Appel de la fonction pour lister les contacts existants
    listContacts();
});

function toggleAddContactForm() {
    var form = document.getElementById('addContactForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addContact() {
    var name = document.getElementById('newName').value;
    var phone = document.getElementById('newPhone').value;

    if (name && phone) {
        var contactList = document.getElementById('contactList');

        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = 'img/contact.png';
        var h1 = document.createElement('h1');
        h1.textContent = name;
        var p = document.createElement('p');
        p.textContent = phone;

        li.appendChild(img);
        li.appendChild(h1);
        li.appendChild(p);

        contactList.appendChild(li);

        toggleAddContactForm();
    }
}

function listContacts() {
    var contacts = [
        
        // Ajoutez ici d'autres contacts si nécessaire
    ];

    var contactList = document.getElementById('contactList');

    // Vider la liste actuelle avant de lister les contacts
    contactList.innerHTML = "";

    contacts.forEach(function (contact) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = 'img/contact.png';
        var h1 = document.createElement('h1');
        h1.textContent = contact.name;
        var p = document.createElement('p');
        p.textContent = contact.phone;

        li.appendChild(img);
        li.appendChild(h1);
        li.appendChild(p);

        contactList.appendChild(li);
    });
}
