function selectedImage(x){
  var sImage;
  if (x==1){
    sImage = document.getElementById('img1');
    localStorage.setItem('food',40);
  }
  else if(x==2){
    sImage = document.getElementById('img2');
    localStorage.setItem('meal',40);

  }
  else{
    sImage = document.getElementById('img3');
    localStorage.setItem('snacks',40);
  }
  sImage.className="selImg";
  console.log(sImage);
}

function cont(){
  window.location.href = "manage.html";
}
