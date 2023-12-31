let cont=document.querySelector("section.sec3 .container")
let review_paragraph=document.querySelector("section.sec3 .rev");
let user_img=document.querySelector("section.sec3 .user img");
let user_name=document.querySelector("section.sec3 .username");
let user_role=document.querySelector("section.sec3 .role");


let userArr=[
    {
        review:"i like to visit this web site very much to sd",
       
        
        imgsrc:"pr_resource/joshua-earle--87JyMb9ZfU-unsplash.jpg" ,
       name:"osama ibrahem",
       position:"civil engineer",
    },
    {
        review:"",
       
       name:"",
       position:"",
    },
    {
        review:"",
       
       name:"",
       position:"",
    },
    {
        review:"",
       
       name:"",
       position:"",
    },
    {
        review:"",
        
       name:"",
       position:"",
    },
    {
        review:"",
        
       name:"",
       position:"",
    },
    {
        review:"",
       
       name:"",
       position:"",
    },
    {
        review:"",
        
       name:"",
       position:"",
    },
    {
        review:"",
       
       name:"",
       position:"",
    },
    {
        review:"",
       
       name:"",
       position:"",
    }
]

//savebtn.addEventListener("click",()=>{

   let y=localStorage.getItem("reviewLists")
   let x=[];
    if(y)
    {
         x=JSON.parse(y);
        console.log(x)
        for(let i=0;i<x.length;i++){
           userArr[i].name=x[i].Name;
            userArr[i].position=x[i].Job;
            userArr[i].review=x[i].Review;
            
         }

    }
    else{
        console.log("there is nothing")
    }
   
 //})

let indexx=0;
function inter(){
    
   review_paragraph.innerHTML= userArr[indexx].review;
   user_name.innerHTML= userArr[indexx].name;
   user_role.innerHTML= userArr[indexx].position;    
 // user_img.src=userArr[index].imgsrc ;
   indexx++;
   if(indexx==x.length||indexx==9)
   indexx=0;

}

setInterval(inter,10000)