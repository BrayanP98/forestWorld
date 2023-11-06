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
var toogle_menu_lateral=document.querySelector("#toogle_menu_lateral");
//var toogle_menu=document.querySelector("#toogle_menu");
var button_lateral=document.querySelector("#button_lateral")
var menu=document.querySelector("#lateral")


//toogle_menu.onclick= desplegar;
toogle_menu_lateral.onclick=desplegar;

function desplegar(){
  
menu.innerHTML=""
menu.classList.toggle('active')

}

