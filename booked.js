var id =Math.floor(Math.random() * 1000000);
genbookingId()
function genbookingId(){
  var bid = document.getElementById("booking");
  console.log(bid);
  bid.innerText += "AG"+ id;
}
