///// Main page Javascript

var button= document.querySelector('.btn');
var film= document.getElementById('film');

button.addEventListener('click', function(){
film.play();
console.log("click the button")
});
