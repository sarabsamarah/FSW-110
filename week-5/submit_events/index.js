
// function myFunction() {
//     alert("Please follow instruction below! Good Luck!")
//   }

  // // function confirming() {
  //   var a = document.getElementById("nameText").value;
  //   // alert("Please confirm: " + a);
    
  // // }
  // // function confirming() {
    
  //   // alert("Please confirm: " + b);
    
  // // }
  // function submit() {
  //   var a = document.getElementById("nameText").value;
  //   var b = document.getElementById("lastText").value;
  //   var c = document.getElementById("phoneNum").value;
  //   result = (a+ " " + b+  " "+ c+ " ");
  //     alert("Please confirm:  "+ result);
  //     location.reload();
  // }

  const form = document.form;
form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert
    (`
    Name: ${form.nameText.value} ${form.lastText.value}
    Phone Number: ${form.phoneNum.value}`);
    location.reload();
    })


