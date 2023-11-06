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
var menuHead=document.querySelector("#item_menu")


//toogle_menu.onclick= desplegar;
toogle_menu_lateral.onclick=desplegar;

function desplegar(){

  var nav_lateral=document.createElement("nav")
  nav_lateral.id="menu_lateral"
  nav_lateral.appendChild(menuHead)

  
menu.innerHTML=""
menu.appendChild(nav_lateral)
menu.classList.toggle('active')

}

