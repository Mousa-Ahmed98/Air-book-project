let slide=document.querySelector('section.sec2 .containerr');
let slides=document.querySelectorAll("section.sec2 .containerr .cart")
let firstclone=slides[0].cloneNode(true);
firstclone.id="firstclone"
let index=0;
slide.append(firstclone);
let slideWidth=slides[index].clientWidth+20;
slide.style.transform=`translateX(${-slideWidth * index}px)   `
let startslide=()=>{
    setInterval(()=>{
        
       index++;  
slide.style.transform=`translateX(${-slideWidth * index}px)   `
slide.style.transition=".9s ease-in";

    },3000)
}
slide.addEventListener("transitionend",()=>{
    slides=document.querySelectorAll("section.sec2 .containerr .cart")
    if(slides[index].id===firstclone.id){
        slide.style.transition="none"
        index=0;
        slide.style.transform=`translateX(${-slideWidth * index}px )  `
    }
})
startslide(); 