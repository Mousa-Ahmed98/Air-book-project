function validate(event) {
    var email = document.getElementById("email").value;
    var passward = document.getElementById("password").value;
 
    var regPass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/;
    var regemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errorMessage2 = document.getElementById("errorMessage2");
    var errorMessage3 = document.getElementById("errorMessage3");    
    
    if (!regemail.test(email)) {
        errorMessage3.textContent = 'Please enter a valid Email';
        return;
        
    } else {
        errorMessage3.textContent = '';
    }

    if (!regPass.test(document.getElementById("password").value)) {
        errorMessage2.textContent = 'Please enter a valid password.';
        return;

    } else {
        errorMessage2.textContent = '';
    }

    if(localStorage.getItem("Email") == email && localStorage.getItem("password") == passward){
        localStorage.setItem("isUserLoggedIn", "true");
        window.location.replace("../../home.html");
    }
    else{
        alert("Invalid username or password");
    }
}

document.querySelector("#createAccount").addEventListener("click", function(){
    
    open("../registeration.html", "_self");
});
