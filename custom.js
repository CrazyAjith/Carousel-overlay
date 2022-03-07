let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("pro-next");
let buttonLeft = document.getElementById("pro-prev");

buttonLeft.addEventListener('click',()=>{
    slider.scrollLeft -= 125;
});
buttonRight.addEventListener('click',()=>{
    slider.scrollLeft += 125;
});
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

//Auto play

function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft -1)){
        slider.scrollLeft -= maxScrollLeft;
    }else{
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay,50);

//pause the slider on hover

for (let i = 0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener("mouseover",()=> {
        clearInterval(play);
    })
    thumbnails[i].addEventListener("mouseout",()=> {
        return play = setInterval(autoPlay,50);
    })
}