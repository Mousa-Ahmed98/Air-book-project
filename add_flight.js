var flights = [];
var flight = { from: "Egypt", to: "Saudia Arabia", leavingDate: "12 June 2024"
 ,returnDate: "14 June 2024", price: 990 };
if(localStorage.getItem("flights") != null){
    flights = JSON.parse(localStorage.getItem("flights"));
}

function addFlight() {
    var fromInput = document.getElementById("fromInputText");
    var toInput = document.getElementById("toInputText");
    var priceInput = document.getElementById("priceInputText");
    var depDateInput = document.getElementById("depDateInputText");
    var retDateInput = document.getElementById("retDateInputText");
    if(fromInput.value !== null && fromInput.value != ""){
        flight.from = fromInput.value;
    }
    else{
        alert("From must not be empty");
        return;
    }
    if(toInput.value !== null && toInput.value != ""){
        flight.to = toInput.value;
    }
    else{
        alert("To must not be empty");
        return;
    }
    if(depDateInput.value !== null && depDateInput.value != ""){
        flight.leavingDate = depDateInput.value;
    }
    else{
        alert("Departure date must not be empty");
        return;
    }
    if(retDateInput.value !== null && retDateInput.value != ""){
        flight.returnDate = retDateInput.value;
    }
    else{
        alert("Return date must not be empty");
        return;
    }
    
    if(priceInput.value !== null && priceInput.value != ""){
        flight.price = priceInput.value;
    }
    else{
        alert("Price must not be empty");
        return;
    }
    flights.push(flight);

localStorage.setItem("flights", JSON.stringify(flights));
}