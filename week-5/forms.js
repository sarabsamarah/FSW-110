var formBox = document.getElementById("formBox")
formBox.classList.add("formBox");
var button = document.getElementById("button");
button.classList.add("button");
const form = document.form;
form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert
    (`
    Name: ${form.firstName.value} ${form.lastName.value}
    Age: ${form.age.value}
    Gender: ${form.Gender.value}
    Destination: ${form.option.value}
    Diet: ${dietRestrict()}`);
    location.reload();
    })
    const checkedInputs = []
    function dietRestrict(){ 
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedInputs.push(form.diet[i].value);
        }
    }
    return(checkedInputs)
}


