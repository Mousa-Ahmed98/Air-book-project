var flights = [];
var flightsSection = document.getElementById("flightsSection");
var images = ["images/dubai.jpg", "images/cairo.jpg", "images/france.avif", "images/saudia-arabia.jpg"
, "images/washington.avif"];

if(localStorage.getItem("flights") != null){
    flights = JSON.parse(localStorage.getItem("flights"));
    for(var i = 0; i < Math.min(4, flights.length); i++){
        var element = document.createElement("div");
        element.classList.add('d-flex', 'flex-column', 'col-5', 'ch-bg-on-hover', 'border', 'shadow', 'rounded-1', 'm-1', 'p-2', 'align-self-start');
        element.style.backgroundColor = "white";
        
        element.innerHTML = `<div class="border rounded-topp  bac-img" style="background-image: url(${images[i%5]});
             height: 20vh;">
        
        </div>
        <div class="rounded-bottomm m-0 " style="background-color: white;">
            <h5 class="text-primary m-2">${flights[i].from} To ${flights[i].to}</h5>
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
    //flightsSection.appendChild(viewAllDiv);
}



function changeBg(ths) {
    ths.style.backgroundColor = "rgb(128, 7, 37)";
    ths.style.color = "white";
}

function resetBg(ths) {
    ths.style.backgroundColor = 'white';
}
