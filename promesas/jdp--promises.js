/* ¿Que es una promesa en JS? 
 * ====================== */  

 function Promise(){
 	this.callbacks = [];
 	this.resolved = false;
 }

 Promise.prototype = {
 	then : function(callback){
 	   if(this.resolved){
 	   	 callback(this.data);
 	   }else{
 	   	 this.callbacks.push(callback);
 	   }  
 	},
 	resolve : function(data){
 	  this.resolved = true;
 	  this.data = data;
 	  var callback;
 	  for(var i = 0; i < this.callbacks.length; i ++){
 	  	callback = this.callbacks[i];
 	  	callback(data);
 	  }
 	}
 }