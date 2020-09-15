
var d=new Date();
showDate();
changeColour();

function changeColour () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#"+randomColor;
  document.getElementById('clock').style.color = "#"+randomColor;
}


function showDate(){
	d = new Date();
	document.getElementById('clock').innerHTML=d.toLocaleTimeString();
} 

setInterval(showDate,1000);
setInterval(changeColour,1000);
