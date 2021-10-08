// amit

let cards = document.querySelectorAll('.card');
let dots = document.querySelectorAll('.dot');
let name = document.querySelectorAll(".name");

const hovering=(val,i)=>{
    if(i<cards.length){
        setTimeout(()=>{
            cards[i].style.transform="scale(1.0)";
            dots[i].style.backgroundColor="#f1f1f1";
            name[i].style.textDecoration = "none";
            hovering(cards[i+1],i+1);
        },1000)
        cards[i].style.transform="scale(1.05)";
        dots[i].style.backgroundColor="orange";
        name[i].style.textDecoration = "underline";        
    }

}
hovering(cards[0],0);
setInterval(()=>hovering(cards[0],0),3000)

// amit



// Danny

const nav = document.getElementById("nav");

const close = document.getElementById("close");

close.addEventListener('click',() => {
    nav.style.display="none"
    console.log("click");
})

const ham = document.getElementById("ham");

ham.addEventListener('click', () => {
    nav.style.display="flex"
})