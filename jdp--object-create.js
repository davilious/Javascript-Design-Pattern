// Crea objectos basado en otros objectos

var Miguel = {
	nombre : "Miguel",
	primerApellido : "Davila",
	segundoApellido : "Carrasco",
	decirHola : function(){
		return "Hola " + this.nombre + ' ' + this.primerApellido + ' ' + this.segundoApellido;
	}
}

var Pedro = Object.create(Miguel,{
	nombre : { value : "Pedro" },
	saludar : {
		value : function(person){
			return "Hola, " + person.nombre;
		}
	}
});

var Juan = Object.create(Pedro,{
	nombre : { value: "Juan" },
	primerApellido : { value: "Garcia" }
});

// Miguel.decirHola();
// Pedro.saludar(Pedro);
// Juan.saludar(Juan);


