


var overlay= document.querySelector('.overlay');
var popup= document.getElementById('popup');

popup.addEventListener('click', function(e){
  console.log(e);
  overlay.style.display="block";
});

overlay.addEventListener('click', function(){
  overlay.style.display="none";
});
