var searchFlight = {
    from: "Cairo",
    to: "Qatar",
    departureDate: "",
    returnDate: ""
}
// console.log(JSON.parse(localStorage.getItem("searchFlight")))
if(localStorage.getItem("searchFlight") != null){
    searchFlight = JSON.parse(localStorage.getItem("searchFlight"));
    console.log(searchFlight);
    
}

var flights = [];
var flightsDiv = document.getElementById("flightsDiv");
var images = ["images/dubai.jpg", "images/cairo.jpg", "images/france.avif", "images/saudia-arabia.jpg"
, "images/washington.avif"];

if(localStorage.getItem("flights") != null){
    
    var flights = JSON.parse(localStorage.getItem("flights"));
    for(var i = 0; i < flights.length; i++){

        if(checkFlight(flights[i]) == true)
        {
            var element = document.createElement("div");
            element.classList.add('col-2-5', 'border', 'clickable', 'rounded-topp', 'rounded-bottomm',
            'mt-3', 'shadow', 'mr-2', 'p-0','mb-2', 'align-self-start');
            element.style.background = "white";
            

            element.innerHTML = `<div class="border rounded-topp  bac-img" style="background-image: 
            url(${images[i%5]}); height: 27vh;" onclick="setSelectedFlightId(${i})"></div>
            <h5 class="text-primary m-2">${flights[i].from} To ${flights[i].to}</h5>
            <p class="text-success m-2 mb-3">${flights[i].leavingDate} ${flights[i].returnDate}</p>
            <p class="text-success m-2 p-0">Economy from</p>
            
            <p class="text-primary m-2">$ ${flights[i].price}</p>`
            flightsDiv.appendChild(element);
        }
        else{

        }
    }
    
    var viewAllDiv = document.createElement("div");
    viewAllDiv.classList.add("col-12", "border", "rounded", "p-1", "align-self-center");
    viewAllDiv.style.backgroundColor = "tomato";
    viewAllDiv.innerText = "View All";
}

function checkFlight(flight){
    
    var searchFlightDepDate = new Date(searchFlight.departureDate);
    var flightDepDate = new Date(flight.leavingDate);

    var searchFlightRetDate = new Date(searchFlight.returnDate);
    var flightRetDate = new Date(flight.returnDate);
    if(flight.from.toLowerCase() == searchFlight.from.toLowerCase() && flight.to.toLowerCase() == searchFlight.to.toLowerCase()){

    }
    else{
        return false;
    }

    if(searchFlight.departureDate !== null && searchFlight.departureDate !==""){
        if(searchFlightDepDate.getDate() === flightDepDate.getDate()
        && searchFlightDepDate.getMonth() === flightDepDate.getMonth()
        && searchFlightDepDate.getFullYear() === flightDepDate.getFullYear()){

        }
        else{
            return false;
        }
    }

    if(searchFlight.returnDate !== null && searchFlight.returnDate !==""){
        if(searchFlightRetDate.getDate() === flightRetDate.getDate()
        && searchFlightRetDate.getMonth() === flightRetDate.getMonth()
        && searchFlightRetDate.getFullYear() === flightRetDate.getFullYear()){
        }
        else{
            return false;
        }
    }
    return true;
}

function setSelectedFlightId(id){
    
    localStorage.setItem("selectedFlightID", id);
    open("../booking/pages/index2.html", "_blank");
}