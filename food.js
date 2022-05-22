localStorage.setItem('item',0);
var cost = 0;
var stuff = [];
function selectedImage(x){
  var sImage;
  if (x==1){
    sImage = document.getElementById('img1');
    cost+=40;
    stuff.push("Drinks");
    localStorage.setItem('stuff',stuff);
    localStorage.setItem('item',cost);
    localStorage.setItem('cost',cost);
  }
  else if(x==2){
    sImage = document.getElementById('img2');
    cost+=30;

    stuff.push("Meal");
    localStorage.setItem('stuff',stuff);
    localStorage.setItem('item',cost);

  }
  else{
    sImage = document.getElementById('img3');
    cost+=25;

    stuff.push("Snacks");
    localStorage.setItem('stuff',stuff);
    localStorage.setItem('item',cost);
  }
  sImage.className="selImg";
  console.log(sImage);
}

function cont(){
  window.location.href = "manage.html";
}
