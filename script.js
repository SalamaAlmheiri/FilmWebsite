////MAIN PAGE JSCRIPT

//Play
var button= document.querySelector('.btn');
var film= document.getElementById('film');

button.addEventListener('click', function(){
film.play();
console.log("clicked play")
});

///Stop
var button2= document.querySelector('.btn2');

button2.addEventListener('click', function(){
film.pause();
console.log("clicked stop")
});
