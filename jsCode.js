var flights = [];
var flightsSection = document.getElementById("flightsSection");
var allFlightBtn = document.getElementById("allFlights");
var showFlightsBtn = document.getElementById("showFlightsBtn");
var logout = document.getElementById("logout");
var defaultFlights = [
    {
        from: "Egypt", to: "Saudia Arabia", leavingDate: "2024-01-01"
        , returnDate: "2024-01-01", price: 990
    },
    {
        from: "Dakar", to: "Lebanon", leavingDate: "2024-03-04"
        , returnDate: "2024-03-06", price: 1000
    },
    {
        from: "Kalekuta", to: "London", leavingDate: "2024-02-01"
        , returnDate: "2024-02-10", price: 230
    },
    {
        from: "Philipen", to: "Kwait", leavingDate: "2024-01-08"
        , returnDate: "2024-01-09", price: 440
    },
];
var images = ["images/dubai.jpg", "images/cairo.jpg", "images/france.avif", "images/saudia-arabia.jpg"
    , "images/washington.avif"];

if (localStorage.getItem("flights") != null) {
    flights = JSON.parse(localStorage.getItem("flights"));
}
else{

    flights = defaultFlights;
    localStorage.setItem("flights", JSON.stringify(flights))

}

for (var i = 0; i < Math.min(4, flights.length); i++) {
    var element = document.createElement("div");
    element.classList.add('d-flex', 'flex-column', 'col-md-5','col-sm-5', 'clickable', 'ch-bg-on-hover',
     'border', 'shadow', 'rounded-1', 'm-1', 'p-2', 'align-self-start');
    element.style.backgroundColor = "white";

    element.innerHTML = `<div class="border rounded-topp  bac-img" style="background-image: url(${images[i % 5]});
         height: 20vh;">
    
    </div>
    <div class="rounded-bottomm m-0 " style="background-color: white;">
        <h5 class="text-primary m-2" style="font-size: 1.3vw;">${flights[i].from} To ${flights[i].to}</h5>
        <p class="text-success m-2 mb-3">${flights[i].leavingDate}</p>
        <p class="text-success m-2 p-0">Economy from</p>
        <p class="m-2" style="color: #ffc107"><b>$ ${flights[i].price}</b></p>
    </div>`
    flightsSection.appendChild(element);
}

//<div class="col-12 border rounded p-1  align-self-center"
// style="background-color: tomato;">View All</div>
var viewAllDiv = document.createElement("div");
viewAllDiv.classList.add("col-12", "border", "rounded", "p-1", "align-self-center");
viewAllDiv.style.backgroundColor = "tomato";
viewAllDiv.innerText = "View All";



function changeBg(ths) {
    ths.style.backgroundColor = "rgb(128, 7, 37)";
    ths.style.color = "white";
}

function resetBg(ths) {
    ths.style.backgroundColor = 'white';
}


allFlightBtn.addEventListener("click", function () {
    open("all_flights.html", "_self")
});

showFlightsBtn.addEventListener("click", function () {
    var searchFlight = {
        "from": document.getElementById("fromSearchInput").value.toLowerCase(),
        "to": document.getElementById("toSearchInput").value.toLowerCase(),
        "departureDate": document.getElementById("depDateSearchInput").value,
        "returnDate": document.getElementById("retDateSearchInput").value,
    }

    console.log(searchFlight);

    // JSON.stringify(localStorage.setItem("searchFlight", searchFlight));
    localStorage.setItem("searchFlight", JSON.stringify(searchFlight))
    console.log(JSON.parse(localStorage.getItem("searchFlight")));

    open("search_page.html", "_self");
});

var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", function(){
    open("registeration/registeration.html", "_self");
});

loginBtn.addEventListener("click", function(){
    open("registeration/login/login.html", "_self");
});

console.log(localStorage.getItem("isUserLoggedIn"))
if(localStorage.getItem("isUserLoggedIn") === "true"){  
    
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    logout.style.display = "flex";
}
else{
    loginBtn.style.display = "inline";
    registerBtn.style.display = "inline";
    logout.style.display = "none";
    
}

logout.addEventListener("click", function(){
    localStorage.setItem("isUserLoggedIn", "false");
    loginBtn.style.display = "inline";
    registerBtn.style.display = "inline";
    logout.style.display = "none";
});
