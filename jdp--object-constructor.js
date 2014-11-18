function Persona(nombre, apellido){
	this.nombre = nombre;
	this.apellido = apellido;
}

Persona.prototype.saluda = function(){
	return "Hola " + this.nombre + " " + this.apellido
}

// var Miguel = new Persona("Miguel", "Davila");
// Miguel.saluda();

// var Pepe = new Persona("Pepe", "García");
// Pepe.saluda();
// Commmit