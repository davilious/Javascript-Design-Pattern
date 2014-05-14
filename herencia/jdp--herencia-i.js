var Forma = function( params ){
  this.nombre = params.nombre;
  this.color = params.color;
};

Forma.prototype.formulas = {
  'Cuadrado' : function(that){
    return that.lado * that.lado;
  },
  'Rectangulo' : function(that){
    return that.base * that.altura;
  },
  'Triangulo' : function(that){
    return (that.base * that.altura) / 2;
  }
  
};

Forma.prototype.calcularArea = function(tipo){
  if (this.formulas[tipo] !== undefined){
    return this.formulas[tipo](this);
  }else{
    return "Hmm, no hay ninguna formula para " + this.nombre;
  }

};

Forma.prototype.getArea = function(){
  return "El area de " + this.nombre.toLowerCase() + " es: "+ this.calcularArea(this.nombre);
};

/* Definimos los objectos que heredarán del contructor forma     /
****************************************************************/

/// Objecto Cuadrado

var Cuadrado = function(params){
  this.lado = params.lado;
};

Cuadrado.prototype = new Forma({ nombre: "Cuadrado", color: "rojo" });

/// Objecto Rectangulo

var Rectangulo = function(params){
  this.base = params.base;
  this.altura = params.altura;
};

Rectangulo.prototype = new Forma({ nombre: "Rectangulo", color: "verde" });

// Objecto Triangulo

var Triangulo = function(params){
  this.base = params.base;
  this.altura = params.altura;
};

Triangulo.prototype = new Forma({ nombre: "Triangulo", color: "naranja" });


// Instanciamos los objetos

var cuadrado = new Cuadrado({ lado: 5 });
var rectangulo = new Rectangulo( { base: 10, altura: 25 } );
var triangulo = new Triangulo({ base: 10, altura: 35 });


// Invocamos al método

console.log( rectangulo.getArea() );
console.log( cuadrado.getArea() );
console.log( triangulo.getArea() );


