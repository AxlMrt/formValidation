function validate(){
    const email = document.getElementById("mail").value;
    const postalCode = document.getElementById("postal").value;
    const tel = document.getElementById("tel").value;

    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const postalRegExp = /\d{2}[ ]?\d{3}/;
    const phoneRegExp = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/

    const emailResult = emailRegExp.test(email);
    const postalResult = postalRegExp.test(postalCode);
    const phoneResult = phoneRegExp.test(tel);

    if(emailResult == false){
        alert("Entrez un email valide");
        return false;
    }

    if(postalResult == false){
        alert("Entrez un code postal valide");
        return false;
    }

    if(phoneResult == false){
        alert("Entrez un numéro valide");
        return false;
    }

    return true;
}

window.addEventListener('load', () => {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener('click', validate)
})