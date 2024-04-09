function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password are required");
        return false;
    }

   
    console.log("Redirecting to home page");
    window.location.href = "home.html";
    return false; 
}

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

// script.js
document.addEventListener("DOMContentLoaded", function() {
    showPage("home"); // Show home page by default
});



    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        if (link.getAttribute("href") === `#${pageId}`) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });


function logout() {
    // Redirect to login page
    window.location.href = "login.html";
}
