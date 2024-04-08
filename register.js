function validateRegistration(){
    const password =document.getElementById("password").value;
    const confirmPassword= document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("password not matched");
        return false;
    }
    window.location.href="login.html";
    return false;

}