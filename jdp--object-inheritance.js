//Primer object
function Bebida(nombre, temperatura){
	this.nombre = nombre;
	this.temperatura = temperatura;
}

Bebida.prototype.beber = function(){
	return "Estoy bebiendo " + this.nombre;
}

// Segundo objecto que va a hererdar de Bebida
function Cafe(tipo){
	//Llamamos al constructor de Bebida dentro del constructor de Cafe
	//para así inicializar las propiedades nombre y temperatura
	Bebida.call(this, "cafe", "calentito");
	this.tipo = tipo;
}
// Asigno el prototype de Bebida
//Cafe.prototype = Object.create(Bebida.prototype);
Cafe.prototype.saborear = function(){
	return "Estoy saboreando un delicioso " + this.tipo + " " + this.temperatura;
}

 var agua = new Bebida("agua","fresquita");
 var capuchino = new Cafe("capuchino");
// agua.beber();
// capuchino.saborear();