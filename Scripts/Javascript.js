var brokenbutton = document.getElementById('Mybutton');
brokenbutton.style.background="#0548ff"
var isBroken = false;
function ibroke(){
    brokenbutton.style.background="#ff0505"
    brokenbutton.textContent = "I broke"
    isBroken = true;
}

function mouseisOver(){
    if(!isBroken){
        brokenbutton.style.background="#05ff16"
    }
    
}

function mouseLeaves(){
    if(!isBroken){
        brokenbutton.style.background="#0548ff"
    }
    
}