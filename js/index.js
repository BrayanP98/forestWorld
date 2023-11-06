function sigueme()
{
//Capto las coordenads del puntero.


  document.getElementById("bola").style="display:flex"
  var x = window.event.x;
  var y = window.event.y;
  //console.log(x,y)
  //Y se las coloco al div.
  document.getElementById("bola").style.left = x + "px";
  document.getElementById("bola").style.top = y + "px";

 


}

