function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("confirmPassword").value;
    var passwordMatchMessage = document.getElementById("passwordMatchMessage");

    if (password !== repeatPassword) {
      passwordMatchMessage.innerHTML = "Password and repeat password should be the same";
    } else {
      passwordMatchMessage.innerHTML = "";
    }
  }

  function validate(event) {
    
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var passward = document.getElementById("password").value;

    var regName = /^[a-zA-Z]+$/;
    var regPass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/;
    var regemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errorMessage = document.getElementById("errorMessage");
    var errorMessage2 = document.getElementById("errorMessage2");
    var errorMessage3 = document.getElementById("errorMessage3");

    if (!regName.test(fname)  || !regName.test(lname)) {
      errorMessage.textContent = 'Please enter a valid name (letters only) ';
      return;
    } else {
      errorMessage.textContent = '';
    }
    if(!regPass.test(passward))
    {
        errorMessage2.textContent = 'Please enter a valid passward.';
        return;
    }
    if(!regemail.test(email)){
        errorMessage3.textContent = 'Please enter a valid Email';
        return;
    }
    else{
        localStorage.setItem("firstName", fname);
        localStorage.setItem("lastName", lname);
        localStorage.setItem("Email", email);
        localStorage.setItem("password", passward);
        window.location.replace("../../home.html");
        errorMessage.textContent = '';
    }
  }

  document.querySelector("#login").addEventListener("click", function(){
    open("login/login.html", "_self");
});