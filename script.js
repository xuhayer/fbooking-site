const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const flightSelect = document.getElementById('flight');

populateUI();
let ticketPrice = +flightSelect.value;

// Save selected flight index and price
function setflightData(flightIndex, flightPrice) {
  localStorage.setItem('Destination', flight);
  localStorage.setItem('selectedflightIndex', flightIndex);
  localStorage.setItem('selectedflightPrice', flightPrice);

}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  localStorage.setItem('total',selectedSeatsCount * ticketPrice);
}
function submitSeats(int){

  if (total.innerText==0){
    alert("Please select a seat to continue");
  }
  else{
    const info={
      seats:count.innerText,
      price:total.innerText
    }
    window.location.href="food.html";
  }
}


// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedflightIndex = localStorage.getItem('selectedflightIndex');

  if (selectedflightIndex !== null) {
    flightSelect.selectedIndex = selectedflightIndex;
  }
}

// flight select event
flightSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setflightData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// intial count and total
updateSelectedCount();
