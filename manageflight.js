populatescreen();
populatescreen();
function populatescreen(){
  const total = localStorage.getItem('total');
  const sseats = localStorage.getItem('selectedSeats');
  const fp = localStorage.getItem('selectedflightPrice');

  var dest = document.getElementById("dest");
  var seats = document.getElementById("sselect");


  //Show stuff on the page
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

}
