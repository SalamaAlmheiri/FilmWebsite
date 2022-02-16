////ABOUT PAGE JSCRIPT

/////Morocco
var moroccoOverlay= document.getElementById('morocco-overlay');
var morocco= document.getElementById('morocco');

morocco.addEventListener('click', function(e){
  moroccoOverlay.style.visibility="visible";
});

moroccoOverlay.addEventListener('click', function(){
  moroccoOverlay.style.visibility="hidden";
});


////Saudiarabia
var saudiarabiaOverlay= document.getElementById('saudiarabia-overlay');
var saudiarabia= document.getElementById('saudiarabia');

saudiarabia.addEventListener('click', function(e){
  saudiarabiaOverlay.style.visibility="visible";
});

saudiarabiaOverlay.addEventListener('click', function(){
  saudiarabiaOverlay.style.visibility="hidden";
});


/////Singapore
var singaporeOverlay= document.getElementById('singapore-overlay');
var singapore= document.getElementById('singapore');

singapore.addEventListener('click', function(e){
  singaporeOverlay.style.visibility="visible";
});

singaporeOverlay.addEventListener('click', function(){
  singaporeOverlay.style.visibility="hidden";
});


/////Belgium
var belgiumOverlay= document.getElementById('belgium-overlay');
var belgium= document.getElementById('belgium');

belgium.addEventListener('click', function(e){
  belgiumOverlay.style.visibility="visible";
});

belgiumOverlay.addEventListener('click', function(){
  belgiumOverlay.style.visibility="hidden";
});
