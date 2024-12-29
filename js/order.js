document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if(localStorage.getItem("user") ){
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var holderName = document.getElementById("holdername").value;
    var cardNumber = document.getElementById("cardnumber").value;
    var cvv = document.getElementById("cvv").value;
    var expiry = document.getElementById("expiry").value;
    var quantity = document.getElementById("quantity").value;
    if (name && contact && address && holderName && cardNumber && cvv && expiry && quantity
    ) {
      alert("Order successfully placed!");
      window.location.href = "endpage.html";
    }}
    else{
      alert("you need to login first");
    }
  });
