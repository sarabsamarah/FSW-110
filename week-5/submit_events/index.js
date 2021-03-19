
function myFunction() {
    alert("Please follow instruction below! Good Luck!")
  }

  // // function confirming() {
  //   var a = document.getElementById("nameText").value;
  //   // alert("Please confirm: " + a);
    
  // // }
  // // function confirming() {
    
  //   // alert("Please confirm: " + b);
    
  // // }
  function confirming() {
    var a = document.getElementById("nameText").value;
    var b = document.getElementById("lastText").value;
    var c = document.getElementById("phoneNum").value;
    result = a + b+ c
    alert(result);
    }

  
  
  function submit()
  {
      alert("click ok to finalize entry");
      location.reload();
  }


