const txt = document.querySelector("#txt")

function txtChange(){
   
        txt.style.transform = "scale(1.1)";
        txt.style.textShadow = "3px 3px 3px red"
        txt.style.transition = "1s";
        txt.style.color = "orange";

    
    

}
function txtChange2(){
    
        txt.style.transform = "scale(1)";
        txt.style.textShadow = "0px 0px 0px red"
        txt.style.transition = "1s";
        txt.style.color = "white";

 
    

}




document.addEventListener("mouseover", txtChange)

document.addEventListener("mouseout", txtChange2)





