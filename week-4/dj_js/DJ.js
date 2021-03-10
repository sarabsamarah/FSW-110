var box = document.createElement ("box")
box.textContent = "Color Cube",
box.style.fontSize = '50px',
box.classList.add("box");
document.body.append(box);

box.addEventListener("mousedown" , function(){
    box.style.backgroundColor= "red"
})
box.addEventListener("mouseup" , function(){
    box.style.backgroundColor= "yellow"
})
box.addEventListener("mouseover" , function(){
    box.style.backgroundColor= "blue"
})
box.addEventListener("dblclick", function(){
    box.style.backgroundColor= "green"
})
box.addEventListener("wheel", function(){ 
    box.style.backgroundColor= "orange"
})
box.addEventListener("mouseout" , function(){
    box.style.backgroundColor= "orange"
});

document.onkeydown = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    color(keyCode);
}
function color(keyCode) {
    if (keyCode == 66) {
        box.style.backgroundColor = "blue";
    } else if (keyCode == 82) {
        box.style.backgroundColor = "red";
    }else if (keyCode == 89) {
        box.style.backgroundColor = "yellow";
    }else if (keyCode == 79) {
        box.style.backgroundColor = "orange";
    } else if (keyCode == 71) {
        box.style.backgroundColor = "green";
    }
}