
function Heroe(){
	this.poderes = ['fuerza','velocidad','inmotalidad'];
}

function Villano(){
  this.moral = "Ser Malo";
  
  this.matarGente = function(){
  	return "A matar!!";
  }
  // Villano hereda de Heroe
  Heroe.apply(this, arguments);
}


function SuperHeroe(){
	this.moral = "Ser bueno";
	
	this.salvarGente = function(){
		return "Todo esta ok!!";
	}
    // Superheroe hereda de Heroe
	Heroe.apply(this, arguments );
}

function Humanoide( params ){
   this.tieneSangre = true;
   this.hablar = function(){
      return "Hola!! Mi nombre es " + params.name;
   }
}

// Herencia multiple
// Creamos un nuevo constructor que hereda de superheroe y de humanoide
function SuperHeroeHumanoide(){
	SuperHeroe.apply(this, arguments);
	Humanoide.apply(this, arguments );
}

// Creamos un nuevo constructor que hereda de villano y de humanoide
function VillanoHumanoide(){
    Villano.apply(this, arguments);
    Humanoide.apply(this, arguments);
    // Sobrescribiendo un método del constructor
    this.hablar = function(){
    	return "Argghhhh!!!";
    }
}

var superman = new SuperHeroeHumanoide({ name: "superman" });
var jocker = new VillanoHumanoide();
var alien = new Villano();

console.dir(superman);
console.dir(jocker);
console.dir(alien);