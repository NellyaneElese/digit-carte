document.querySelector('#registre').addEventListener('submit', function(e) {
    e.preventDefault();
const userData = { 
        Nom: document.querySelector('#nom').value,
        Postnom: document.querySelector('#postnom').value,
        Prenom: document.querySelector('#postnom').value,
        Entreprise: document.querySelector('#firm').value,
        poste: document.querySelector('#job').value,
        Téléphone: document.querySelector('#tel').value,
        mail: document.querySelector('#mail').value,
        Motdepasse: document.querySelector('#password').value,
        Photo: document.querySelector('#password').value,
    };
localStorage.setItem('Utilisateur', JSON.stringify(userData));
window.location.href = 'profil.html';    
if (file) {
    reader.readAsDataURL(file);
}
else {
    alert('Veuillez sélectionner une photo.');
}
} );