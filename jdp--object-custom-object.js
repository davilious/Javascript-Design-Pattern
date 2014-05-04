//Creamos un objecto para crear un circulo

function Circle( color ){
	this.color = color || 'red';
}
Circle.prototype.createCircle = function(){
  var $div = document.createElement('div');
  $div.className = "circle";
  $div.style.cssText = "background-color: " + this.color ;
  document.body.appendChild($div);
}
Circle.prototype.delete = function( elem ){
  elem.innerHTML = "borrando...";
  setTimeout(function(){
  	elem.parentElement.removeChild(elem);
  },800);
}




