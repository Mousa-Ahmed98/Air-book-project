let sub = document.querySelector("#sub");

// Retrieve existing reviews from localStorage or initialize an empty array
let reviewsList = JSON.parse(localStorage.getItem("reviewLists")) || [];

let review = {
    Name: "Mousa",
    Job: "Software Engineer",
    Review: "So good",
  
};

sub.addEventListener("click", (e) => {
   
// e.preventDefault();
  
    review.Name = document.querySelector("#name").value;
    review.Job = document.querySelector("#job").value;
    review.Review = document.querySelector("#message").value;

   
    reviewsList.push(review);

    
    localStorage.setItem("reviewLists", JSON.stringify(reviewsList));
    //localStorage.clear()
    console.log(reviewsList);
});
