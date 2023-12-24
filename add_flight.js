var flights = [];
var flight = { from: "Egypt", to: "Saudia Arabia", leavingDate: "12 June 2024", price: 990 };
if(localStorage.getItem("flights") != null){
    flights = JSON.parse(localStorage.getItem("flights"));
}

function addFlight() {
    var fromInput = document.getElementById("fromInputText");
    var toInput = document.getElementById("toInputText");
    var priceInput = document.getElementById("priceInputText");
    var depDateInput = document.getElementById("depDateInputText");
    flight.from = fromInput.value;
    flight.to = toInput.value;
    flight.leavingDate = depDateInput.value;
    flight.price = priceInput.value;
    flights.push(flight);

localStorage.setItem("flights", JSON.stringify(flights));
}