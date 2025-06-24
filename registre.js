document.querySelector('#profil').addEventListener('submit', function(e) {
    e.preventDefault();
const reader = new FileReader();
const file = document.querySelector('#photo-profil').files[0];
reader.onload = function () {   
    const userData = { 
        Nom: document.querySelector('#nom').Value,
        Postnom: document.querySelector('#postnom').Value,
        Prenom: document.querySelector('#postnom').value,
        Entreprise: document.querySelector('#firm').value,
        poste: document.querySelector('#job').value,
        Téléphone: document.querySelector('#tel').value,
        mail: document.querySelector('#mail').value,
        Motdepasse: document.querySelector('#password').value,
        Photo: reader.result 
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'profil.html';
};    
if (file) {
    reader.readAsDataURL(file);
}
else {
    alert('Veuillez sélectionner une photo.');
}
} );