populatescreen();
populatescreen();
function populatescreen(){
  var total = localStorage.getItem('total');
  const sseats = localStorage.getItem('selectedSeats');
  const fp = localStorage.getItem('selectedflightPrice');
  const stuff = localStorage.getItem('stuff');
  const cost = localStorage.getItem('item');
  var dest = document.getElementById("dest");
  var seats = document.getElementById("sselect");
  var items = document.getElementById("items");

  //Show stuff on the page
  total=Number(cost)+Number(total);
  document.getElementById("tp").innerText="Total Price: $"+total;
  if(fp==900){
    dest.innerText ="Japan";
  }
  else if(fp==2000){
    dest.innerText ="United Kingdom";

  }
  else{
    dest.innerText ="Peru";

  }

  seats.innerText=sseats;
  items.innerText =stuff;
}
function cont(){
  window.location.href = "personaldetails.html";
}
