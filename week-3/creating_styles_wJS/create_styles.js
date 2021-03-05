
// var newH2 = document.createElement("h2")
// newH2.textContent = "Introduction to Yoga Asana"

for (listH2 = 0; listH2 < 5; listH2++) {
    const reListH2 = document.createElement("h2");
    reListH2.innerHTML = "Yoga Asana";

reListH2.style.fontSize = "20px";
reListH2.style.fontWeight = "lighter";
reListH2.style.fontFamily = "sans-serif";
reListH2.style.color= "cornflowerblue";
reListH2.classList.add("border");
document.body.appendChild(reListH2);

}



