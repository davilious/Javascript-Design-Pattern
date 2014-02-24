function extend(target){
	// comprobamos tener al menos un argumento que es lo que vamos a inyectar
	if( !arguments[1] ){
		return;
	}
	var nIteraciones = 1, 
        nLenArgumentos = arguments.length;

	for( nIteraciones; nIteraciones < nLenArgumentos; nIteraciones ++ ){
		//recorremos los argumentos
		var fuente = arguments[nIteraciones];
		//recorremos las propiedades de cada fuente
		for(var prop in fuente){
			// vamos a tomar las propes que no estén
			// ya en el objecto target
			if(!target[prop] && fuente.hasOwnProperty(prop)){
				target[prop] = fuente[prop];
			}
		}
	}
	
}

function Persona(nombre){
	this.nombre = nombre;
}

function Perro(nombre){
	this.nombre = nombre;
}

var hablador = {
	hablar : function(){
		return this.nombre + " puede hablar";
	}
} 

var acciones = {
	correr : function(){
		return this.nombre + " puede correr";
	},
	andar : function(){
		return this.nombre + " puede correr";
	}
};

extend(Persona.prototype, acciones, hablador );
extend(Perro.prototype, acciones, hablador );

var miguel = new Persona("Miguel");
var toby = new Perro("Toby");

