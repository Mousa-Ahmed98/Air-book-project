
function toggleDiv(){
    var plusDiv = document.querySelector(".divtoggle");
    var minaceDiv = document.querySelector(".minace");

    if (plusDiv.style.display === "block" ) {
        plusDiv.style.display = "none";
        document.getElementById("minaceDiv").innerHTML("<h3>Pre Book your Baggage Donnating a small -</h3><p>Lorem ipsum dolor sit amet, consectetur adiping elitIn imperdiet interdum imperdiet ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>")
    } else {
        plusDiv.style.display = "block";
        minaceDiv.style.display = "none";
    }
}


