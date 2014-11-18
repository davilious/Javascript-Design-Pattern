// Mi Modulo declarado
var myModule = (function(){
  
  var init = function(){
    return 'init';
  };
  return {
    init: init
  };
})();

// Extendiendo myModule
// Sobreescribiendo métodos
// Para prevenir errores le pasamos el módulo por parámetro
// y un objecto vacío por si el módulo no ha sido cargado
var myModule = (function( module ){
   
  module.foo = function(){
     return 'foo';
  };
  module.init = function(){
     return 'init sobreescrito';
  };
  
  return module;
  
})( myModule || {} );


// Submódulos reales: plugins
myModule.add = (function(){
  return {
    value : function(){
      return 'adding values';
    }
  };
})();

console.log( myModule.init() );
console.log( myModule.foo() );
console.log( myModule.add.value() );