var flights = [];
var flightsDiv = document.getElementById("flightsDiv");
var images = ["images/dubai.jpg", "images/cairo.jpg", "images/france.avif", "images/saudia-arabia.jpg"
, "images/washington.avif"];

if(localStorage.getItem("flights") != null){
    flights = JSON.parse(localStorage.getItem("flights"));
    
    for(var i = 0; i < flights.length; i++){

        var element = document.createElement("div");
        element.classList.add('col-2-5', 'border', 'clickable', 'rounded-topp', 'rounded-bottomm',
         'mt-3', 'shadow', 'mr-2', 'p-0','mb-2', 'align-self-start');
        element.style.background = "white";

        element.innerHTML = `<div class="border rounded-topp  bac-img" style="background-image: 
        url(${images[i%5]}); height: 27vh;"></div>
        <h5 class="text-primary m-2">${flights[i].from} To ${flights[i].to}</h5>
        <p class="text-success m-2 mb-3">${flights[i].leavingDate} -- ${flights[i].returnDate}</p>
        <p class="text-success m-2 p-0">Economy from</p>
        <p class="text-primary m-2">$ ${flights[i].price}</p>`
        flightsDiv.appendChild(element);
    }

    var viewAllDiv = document.createElement("div");
    viewAllDiv.classList.add("col-12", "border", "rounded", "p-1", "align-self-center");
    viewAllDiv.style.backgroundColor = "tomato";
    viewAllDiv.innerText = "View All";
}