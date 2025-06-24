function loadProfile() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData)return;
    
    document.getElementById("photo").src=userData.photo || "";
    document.getElementById("nom").innerText = "Nom :" + userData.nom;
    document.getElementById("postnom").innerText = "Postnom :" + userData.postnom;
    document.getElementById("prenom").innerText = "Prenom :" + userData.prenom; 
    document.getElementById("firm").innerText = "Entreprise :" + userData.firm;
    document.getElementById("job").innerText = "Poste :" + userData.job;
    document.getElementById("tel").innerText = "Téléphone :" + userData.tel;
    document.getElementById("mail").innerText ="Email :" + userData.mail
    document.getElementById("password").innerText ="Mot de passe :" +userData.password;
}
document.getElementById("editBtn").addEventListener("click", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) return;

    document.getElementById("editphoto").Value=userData.photo || "";
    document.getElementById("editnom").textContent= sessionStorage.getItem("nom");
    document.getElementById("editpostnom").Value =  userData.postnom;
    document.getElementById("editprenom").Value = userData.prenom; 
    document.getElementById("editfirm").Value = userData.firm;
    document.getElementById("editjob").Value = userData.job;
    document.getElementById("edittel").Value = userData.tel;
    document.getElementById("editmail").Value = userData.mail;
    document.getElementById("editpassword").Value = userData.password;
    document.getElementById("editForm").style.display = "block";
});
document.getElementById("saveChanges").addEventListener("click", () =>{
    const photo = document.getElementById("editphoto").files[0];
    const nom = document.getElementById("editnom").value ;
    const postnom =   document.getElementById("editpostnom").value ;
    const prenom =   document.getElementById("editprenom").value ; 
    const firm =  document.getElementById("editfirm").value ;
    const job =   document.getElementById("editjob").value ;
    const tel =   document.getElementById("edittel").value ;
    const mail =   document.getElementById("editmail").value;
    const password =   document.getElementById("editpassword").Value ;
    const savedata = (photoBase64) => {
        const updateUser = {
            nom,
            postnom,
            prenom,
            firm,
            job,
            tel,
            mail,
            password,
            photo: photoBase64,
        };
        localStorage.setItem("userData", JSON.stringify(updateUser));
        alert("Informations mises à jour.");
        location.reload();
    };
    if (photo) {
        const reader = new FileReader();
        reader.onload = () => savedata(reader.result);
        reader.readAsDataURL(photo);
    }
    else {
        const userData = JSON.parse(localStorage.getItem("userData"));
        savedata(userData.photo || "")
    }
});
window.onload = loadProfile

