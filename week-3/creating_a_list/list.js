var newH1 = document.createElement("h1")
newH1.textContent = "Hello World"
document.body.appendChild(newH1)

for (newH1 = 0; newH1 < 9; newH1 ++) {
 var repH1 = document.createElement("h1");
 repH1.innerHTML = "Hello World";
 repH1.style.color = "magenta";
 repH1.style.textAlign = "center"
 repH1.style.backgroundColor = "turquoise"
 document.body.appendChild(repH1)
}

const names = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily"
]
var myList = document.createElement("ul")
myList.textContent = "List Of Names"

for (var i = 0; i < names.length; i++) {
    var newAdd = document.createElement("li")
    myList.innerHTML += '<li>' + names[i] + '</li>'
    myList.style.backgroundColor = "yellow";
    myList.style.color = "navy";
    document.body.appendChild(myList)
}