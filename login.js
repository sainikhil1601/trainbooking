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
